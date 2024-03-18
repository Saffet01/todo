import { useState } from 'react'
import './App.css'
import { NewTask } from './component/NewTask'
import { TaskList } from './component/TaskList';

export interface taskType {
  id: number,
  title: string,
  description: string,
}

function App() {

  const [tasks, setTasks] = useState<taskType[]>([]);

  const addTask = (taskTitle: string, taskDetails: string) => {
    const newTask: taskType = {
      id: Date.now(),
      title: taskTitle,
      description: taskDetails,
    }
    setTasks([...tasks, newTask]);
  }

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  return (
    <>
      <NewTask onAddTask={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </>
  )
}

export default App
