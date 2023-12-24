import { User } from "../../interfaces/user.interface"
import { store } from "../store"
import { SET_USERS } from "./user.reducer"

export function setUsers(users: User[]) {
    try {
        store.dispatch({
            type: SET_USERS,
            users
        })
        return users
    } catch (err) {
        console.log('Cannot set tasks', err)
        throw err
    }
}
