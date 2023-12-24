import { Task } from "../interfaces/task.interface";

export function ReadOnlyModal({ task }: ReadOnlyModalProps) {
    return <h1>hi</h1>
}


export type ReadOnlyModalProps = { task: Task | null }