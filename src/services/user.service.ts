import { Observable, of } from "rxjs";
import { Uid } from "../interfaces/interfaces";
import { User } from "../interfaces/user.interface";


export const userService = {
    query,
    getById,
}

const users: User[] = [
    { fullname: 'Almog Jan', id: "1234", username: 'AJ1998' },
    { fullname: 'Yuval Yaakobi', id: "1224", username: 'YY1997' },
    { fullname: 'Maple Jan', id: "1424", username: 'MJ2015' },

]

function query(): Observable<User[]> {
    return of(users);
}

function getById(id: Uid): Observable<User | undefined> {
    return of(users.find((user) => user.id === id));
}
