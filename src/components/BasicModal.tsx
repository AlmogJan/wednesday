import Modal from '@mui/material/Modal';
import { AddEditTaskModal } from './AddEditTaskModal';
import { IconButton } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Task } from '../interfaces/task.interface';
import { ModalState } from '../interfaces/interfaces';
import { ReadOnlyModal } from './ReadOnlyModal';
import { useEffect } from 'react';
export function BasicModal({ open, handleClose, task, modalState }: BasicModalProps) {
    useEffect(() => {
        console.log(open);
    }, [open])
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            hideBackdrop={true}
        >
            <div className='modal-box'>
                <IconButton onClick={() => {
                    handleClose()
                    console.log("ho");

                }}>
                    <CloseRoundedIcon></CloseRoundedIcon>
                </IconButton>
                {modalState === ModalState.AddEdit && <AddEditTaskModal task={task}></AddEditTaskModal>}
                {modalState === ModalState.ReadOnly && <ReadOnlyModal task={task}></ReadOnlyModal>}
            </div>
        </Modal>
    );
}

export type BasicModalProps = { open: boolean, handleClose: () => void, task: Task | null, modalState: ModalState }