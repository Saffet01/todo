import { taskType } from '../App';

interface taskListType {
    tasks: taskType[];
    onDelete: (taskId: number) => void;
    toggleTask: (taskId: number) => void;
}

export const TaskList = ({ tasks, onDelete, toggleTask }: taskListType) => {
    return (
        <>
            <div>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <div style={{ marginBottom:'10px', padding:'10px', backgroundColor: task.isSelected ? 'green' : 'transparent' }}>
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                            <div className='taskButtons'>
                                <button className='deleteButton' onClick={() => onDelete(task.id)}>Delete Task</button>
                                <input className='checkbox' type="checkbox" checked={task.isSelected} onChange={() => toggleTask(task.id)} />
                            </div>
                        </div>
                    </li>
                ))}
            </div>

        </>

    )
}
