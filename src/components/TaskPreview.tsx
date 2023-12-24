import { Task } from "../interfaces/task.interface"
import { statusTranslation } from "../translations/status.translation"
import { AvatarDisplay } from "./AvatarDisplay";
import { useSelector } from "react-redux";
import { RootState } from "../stores/store";
import { utilService } from "../services/util.service";
import { BasicMenu } from "./BasicMenu";
import { BasicModal } from "./BasicModal";
import { ModalState } from "../interfaces/interfaces";
export function TaskPreview({ task, handleModalOpen, openModal, handleModalClose }: TaskPreviewProps) {
    const users = useSelector((storeState: RootState) => storeState.userModule.users)
    return <div className="task-preview" onClick={handleModalOpen}>
        <BasicModal open={openModal} handleClose={handleModalClose} task={task} modalState={ModalState.ReadOnly}></BasicModal>
        <div className="task-header flex justify-start">
            <span >{statusTranslation[task.status]}</span>
            <h1>{task.title}</h1>
            <BasicMenu task={task} handleModalOpen={handleModalOpen} openModal={openModal} handleModalClose={handleModalClose}></BasicMenu >
        </div>
        <div className="task-controller flex align-center space-between ">
            <span>{utilService.formatRelativeTime(new Date(task.lastEdited))}</span>
            <AvatarDisplay isDisplay={true} users={users} max={3}></AvatarDisplay>
        </div>
    </div>
}
export type TaskPreviewProps = { task: Task, handleModalOpen: () => void, openModal: boolean, handleModalClose: () => void }