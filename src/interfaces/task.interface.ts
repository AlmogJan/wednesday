import { Uid } from "./interfaces";

// export interface Task {

// }

export interface Task {
    id: Uid;
    title: string;
    desc: string;
    lastEdited: Date;
    status: Status;
    tag: Tags;
    userId: Uid;
}

export interface TaskDto {
    title: string;
    desc: string;
    status: Status;
    tag: Tags;
    userId: Uid;
}

export enum Tags {
    Bug, Feature
}

export enum Status {
    Todo, InProgress, Done, Blocked
}