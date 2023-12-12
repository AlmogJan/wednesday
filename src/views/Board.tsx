import { TaskList } from "../components/TaskList";
import { Status, Task } from "../interfaces/task.interface";

export function Board({ tasks }: BoardProps) {
    return <div className="inner-board-container">
        <TaskList status={Status.Todo} tasks={tasks}></TaskList>
    </div>
}

export type BoardProps = { tasks: Task[] | undefined }