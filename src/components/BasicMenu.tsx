import * as React from 'react';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton } from '@mui/material';
import { ModalState, Uid } from "../interfaces/interfaces";
import { Subscription } from "rxjs";
import { taskService } from "../services/task.service";
import { setTasks } from "../stores/task/task.action";
import { Task } from '../interfaces/task.interface';
import { BasicModal } from './BasicModal';
export function BasicMenu({ task, handleModalOpen, openModal, handleModalClose }: BasicMenuProps) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const openMenu = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        event.stopPropagation()
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    function removeTask(taskId: Uid) {
        const subscriber: Subscription = taskService.remove(taskId).subscribe({
            next: tasks => setTasks(tasks),
            complete: () => subscriber.unsubscribe(),
            error: (err) => console.error(err)
        })
    }

    return (
        <div>
            <IconButton sx={{ height: 24, width: 24 }}
                aria-controls={openMenu ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openMenu ? 'true' : undefined}
                onClick={handleClick}>
                <MoreHorizRoundedIcon sx={{ height: 20, width: 20 }}></MoreHorizRoundedIcon>
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleMenuClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={() => {
                    removeTask(task.id)
                    handleMenuClose()
                }}>Delete Task</MenuItem>
                <MenuItem onClick={() => {
                    handleModalOpen()
                    handleMenuClose()
                }}
                >Edit Task</MenuItem>
            </Menu>
            <BasicModal open={openModal} handleClose={handleModalClose} task={task} modalState={ModalState.AddEdit}></BasicModal>
        </div>
    );
}

export type BasicMenuProps = { task: Task, handleModalOpen: () => void, openModal: boolean, handleModalClose: () => void }
