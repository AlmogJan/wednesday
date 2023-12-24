import { Uid } from "./interfaces";
import { Tags } from "./tags.interface";

export interface Task {
    id: Uid;
    title: string;
    desc: string;
    lastEdited: string;
    status: Status;
    tag: Tags;
    userId: Uid;
}

export interface TaskDto {
    title: string;
    desc: string;
    status: Status;
    tag: Tags;
}

export enum Status {
    Todo, InProgress, Done, Blocked
}

export function getDtoFromTask(task: Task | null): TaskDto {
    if (task) {
        const dto: TaskDto = {
            desc: task.desc,
            title: task.title,
            status: task.status,
            tag: task.tag,
        }
        return dto;
    }
    return {
        desc: '',
        title: '',
        status: Status.Todo,
        tag: Tags.Feature,
    };

}
