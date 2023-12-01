import { useEffect, useState } from "react";
import { taskService } from "../services/task.service";
import { Task } from "../interfaces/task.interface";

export function Aside() {
    const [tasks, setTasks] = useState<Task[]>();

    useEffect(() => {
        const subscription = taskService.query().subscribe(x => setTasks(x))
        return () => {
            subscription.unsubscribe();
        }
    }, [])

    useEffect(() => {
        console.log(tasks);
    }, [tasks])

    return <div className="aside-container">
    </div>
}