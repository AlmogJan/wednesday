import moment from "moment"
import { Task } from "../interfaces/task.interface"
import { statusTranslation } from "../translations/status.translation"
export function TaskPreview({ task }: TaskPreviewProps) {

    return <div className="task-preview">
        <div className="task-header flex justify-start">
            <span >{statusTranslation[task.status]}</span>
            <h1>{task.title}</h1>
        </div>
        <div className="task-controller flex align-center space-between ">
            <span>{moment(task.lastEdited).format('DD MMM YY HH:mm')}</span>
            <div className="flex">
                <span className="task-preview-img"></span>
                <span className="task-preview-img"></span>
            </div>
        </div>
    </div>
}
export type TaskPreviewProps = { task: Task }