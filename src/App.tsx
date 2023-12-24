import { Aside } from "./components/Aside";
import { Header } from "./components/Header";
import { Board } from "./views/Board";
import { useEffect } from "react";
import { taskService } from "./services/task.service";
import { Subscription } from "rxjs";
import { useSelector } from "react-redux";
import { RootState } from "./stores/store";
import { setTasks } from "./stores/task/task.action";
import { setUsers } from "./stores/user/user.action";
import { userService } from "./services/user.service";

export function App({ breakpointClass }: AppProps) {
    const subscribers: Subscription[] = [];
    const tasks = useSelector((storeState: RootState) => storeState.taskModule.tasks)

    useEffect(() => {
        subscribers.push(taskService.query().subscribe(result => { setTasks(result); }))
        subscribers.push(userService.query().subscribe(result => { setUsers(result); }))
        return () => {
            subscribers.forEach(subscriber => subscriber.unsubscribe());
        }
    }, [])
    return <div className={`${breakpointClass}-app-container`}>
        <Aside />
        <div className="board-container">
            <header>
                <Header />
            </header>
            <main>
                <Board tasks={tasks} />
            </main>
        </div>
    </div>
}

export type AppProps = { breakpointClass: string }