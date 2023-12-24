import { User } from "../../interfaces/user.interface";

export const SET_USERS = 'SET_USERS'

const initialState = {
    users: [] as User[],
}

export function userReducer(state = initialState, action: any) {
    let newState = state;
    let users: User[];
    switch (action.type) {
        case SET_USERS:
            users = [...action.users]
            newState = { ...state, users }
            break
        default:
    }
    return newState
}
