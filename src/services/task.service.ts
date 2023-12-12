import { Observable } from "rxjs";
import { Task, TaskDto } from "../interfaces/task.interface";
import { httpService } from "./http.service"
import { Uid } from "../interfaces/interfaces";


export const taskService = {
    query,
    getById,
    add,
    edit,
    remove
}

function query(): Observable<Task[]> {
    return httpService.get<Task[]>('http://localhost:8000/task');
}

function getById(id: Uid): Observable<Task> {
    return httpService.get<Task>(`http://localhost:8000/task/${id}`);
}

function add(taskDto: TaskDto): Observable<Task[]> {
    return httpService.post<TaskDto, Task[]>('http://localhost:8000/task', taskDto);
}

function edit(id: Uid, taskDto: TaskDto): Observable<Task[]> {
    return httpService.put<TaskDto, Task[]>(`http://localhost:8000/task/${id}`, taskDto);
}

function remove(id: Uid): Observable<Task[]> {
    return httpService.remove<Task[]>(`http://localhost:8000/task/${id}`);
}