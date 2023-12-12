import { Subscription } from "rxjs"
import { Status, Tags, Task, TaskDto } from "../interfaces/task.interface.ts"
import { taskService } from "../services/task.service.ts"
import { setTasks } from "../stores/task.action.ts"
import { TaskPreview } from "./TaskPreview"
import { Uid } from "../interfaces/interfaces.ts"
import { BasicModal } from "./BasicModal.tsx"
import { useState } from "react"

export function TaskList({ status, tasks }: TaskListProps) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function addTask(taskDto: TaskDto) {
        const subscriber: Subscription = taskService.add(taskDto).subscribe({
            next: tasks => setTasks(tasks),
            complete: () => subscriber.unsubscribe(),
            error: (err) => console.error(err)
        })
    }

    function removeTask(taskId: Uid) {
        const subscriber: Subscription = taskService.remove(taskId).subscribe({
            next: tasks => setTasks(tasks),
            complete: () => subscriber.unsubscribe(),
            error: (err) => console.error(err)
        })
    }

    function editTask(id: Uid, taskDto: TaskDto) {
        const subscriber: Subscription = taskService.edit(id, taskDto).subscribe({
            next: tasks => setTasks(tasks),
            complete: () => subscriber.unsubscribe(),
            error: (err) => console.error(err)
        })
    }

    return <>
        <BasicModal open={open} handleClose={handleClose}></BasicModal >
        <button onClick={handleOpen}>Open modal</button>

        <ul className="clean-list">
            {tasks?.map((task: Task) =>
                <li key={task.id}>
                    <TaskPreview task={task}></TaskPreview>

                </li>

            )}
        </ul>
        <button onClick={() => addTask({ desc: 'desc', title: 'title', status: Status.Done, tag: Tags.Feature, userId: '1234' })}>add</button>
        <button onClick={() => editTask('1234', { desc: 'desc', title: 'title', status: Status.Done, tag: Tags.Feature, userId: '1234' })}>edit</button>
        <button onClick={() => removeTask('1234')}>remove</button>
        {/* <button><img className="svg-white" src="https://res.cloudinary.com/do4agaebw/image/upload/v1701955185/asset_14_hv4yqe.svg" alt="" /></button> */}
    </>

}
export type TaskListProps = { status: Status, tasks: Task[] | undefined }
