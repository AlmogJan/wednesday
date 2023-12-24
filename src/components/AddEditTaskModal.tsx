import { Button, MenuItem } from '@mui/material';
import { statusTranslation } from '../translations/status.translation';
import TextField from '@mui/material/TextField';
import { AvatarDisplay } from './AvatarDisplay';
import { useSelector } from 'react-redux';
import { RootState } from '../stores/store';
import { LabelPicker } from './LabelPicker';
import { Status, Task, TaskDto, getDtoFromTask } from '../interfaces/task.interface';
import { taskService } from '../services/task.service';
import { setTasks } from '../stores/task/task.action';
import { Uid } from '../interfaces/interfaces';
import { Subscription } from 'rxjs';
import { Formik } from 'formik';


export function AddEditTaskModal({ task }: AddEditTaskModalProps) {
    const users = useSelector((storeState: RootState) => storeState.userModule.users)

    function editTask(id: Uid, taskDto: TaskDto) {
        const subscriber: Subscription = taskService.edit(id, taskDto).subscribe({
            next: tasks => setTasks(tasks),
            complete: () => subscriber.unsubscribe(),
            error: (err) => console.error(err)
        })
    }

    function addTask(taskDto: TaskDto) {
        const subscriber: Subscription = taskService.add(taskDto).subscribe({
            next: tasks => setTasks(tasks),
            complete: () => subscriber.unsubscribe(),
            error: (err) => console.error(err)
        })
    }

    function setSubmitting(arg0: boolean) {
        throw new Error('Function not implemented.');
    }

    return <Formik
        initialValues={
            getDtoFromTask(task)
        }
        validate={(values) => {
            const errors: Partial<TaskDto> = {};
            if (!values.title) {
                errors.title = 'Required';
            } else if (!values.desc) {
                errors.desc = 'Required';
            }
            return errors;
        }}
        onSubmit={(values: TaskDto) => {
            task ? editTask(task.id, values) : addTask(values)
            setSubmitting(false)
        }}
    >
        {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,

        }) => (
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    sx={{ marginBlockEnd: 2 }}
                    label="title"
                    id="title"
                    variant="standard"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                />
                <div className='flex align-center'>
                    <span>in list</span>
                    <TextField
                        id="status"
                        name="status"
                        sx={{ width: 115, marginInlineStart: 2 }}
                        select
                        variant="standard"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.status}
                    >
                        {(Object.keys(Status) as Array<keyof typeof Status>).filter(key => isNaN(Number(key))).map((key, idx) => (
                            <MenuItem key={idx} value={Status[key] as Status} >
                                {`${statusTranslation[Status[key]]}`}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <div className='flex justify-start align-center'>
                    <div className='flex column justify-start'>
                        <span>Members</span>
                        <AvatarDisplay isDisplay={false} users={users} max={3}></AvatarDisplay>
                    </div>
                    <div>
                        <LabelPicker labels={[]}></LabelPicker>
                    </div>
                </div>
                <div>
                    <TextField
                        fullWidth
                        label="Description"
                        id="desc"
                        multiline
                        variant="standard"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.desc}
                    />
                </div>
                <Button type="submit">
                    {task ? 'Edit' : 'Add'}
                </Button>
            </form >)}
    </Formik >
}

export type AddEditTaskModalProps = { task: Task | null }


