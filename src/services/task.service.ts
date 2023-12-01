import { Task } from "../interfaces/task.interface";
import { httpService } from "./http.service"

export const taskService = {
    query
}

function query() {
    return httpService.get<Task[]>('http://localhost:8000/task');
}