import { Task } from "../interfaces/task.interface"
import { store } from "./store"
import { SET_TASKS } from "./task.reducer"

export function setTasks(tasks: Task[]) {
    try {
        store.dispatch({
            type: SET_TASKS,
            tasks
        })
        return tasks
    } catch (err) {
        console.log('Cannot set tasks', err)
        throw err
    }
}
