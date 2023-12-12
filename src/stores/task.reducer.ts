import { Task } from "../interfaces/task.interface"

export const SET_TASKS = 'SET_TASKS'
export const ADD_TASK = "ADD_TASK"

const initialState = {
    tasks: [] as Task[],
}

export function taskReducer(state = initialState, action: any) {
    let newState = state;
    let tasks: Task[];
    switch (action.type) {
        case SET_TASKS:
            tasks = [...action.tasks]
            newState = { ...state, tasks }
            break
        case ADD_TASK:
            tasks = [...state.tasks, action.task];
            newState = { ...state, tasks }
            break
        default:
    }
    return newState
}
