import React from 'react'
import { taskType } from '../App';

interface taskListType {
    tasks: taskType[];
    onDelete: (taskId:number) => void;
}

export const TaskList = ({ tasks, onDelete }: taskListType) => {
    return (
        <>
            <div>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <button onClick={()=> onDelete(task.id)}>Delete Task</button>
                    </li>
                ))}
            </div>
            
        </>

    )
}
