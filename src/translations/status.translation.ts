import { Status } from "../interfaces/task.interface";

export const statusTranslation: Record<Status, string> = {
    [Status.Todo]: "Todo",
    [Status.InProgress]: "In Progress",
    [Status.Done]: "Done",
    [Status.Blocked]: "Blocked",
}