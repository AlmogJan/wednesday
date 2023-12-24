import { Task } from "../interfaces/task.interface.ts"
import { TaskPreview } from "./TaskPreview"
import { BasicModal } from "./BasicModal.tsx"
import { useState } from "react"
import { ModalState } from "../interfaces/interfaces.ts";
import { Button } from "@mui/material";

export function TaskList({ tasks }: TaskListProps) {
    const [openModal, setOpenModal] = useState(false);
    const handleModalOpen = () => setOpenModal(true);
    const handleModalClose = () => setOpenModal(false);

    return <>
        <BasicModal open={openModal} handleClose={handleModalClose} task={null} modalState={ModalState.AddEdit}></BasicModal >

        <ul className="clean-list">
            {tasks?.map((task: Task) =>
                <li key={task.id}>
                    <TaskPreview task={task} handleModalOpen={handleModalOpen} openModal={openModal} handleModalClose={handleModalClose}></TaskPreview>
                </li>
            )}
        </ul>
        <Button onClick={handleModalOpen}>Add Task</Button>

    </>

}
export type TaskListProps = { tasks: Task[] | undefined }
