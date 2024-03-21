import { useState } from 'react'
import './App.css'
import { NewTask } from './component/NewTask'
import { TaskList } from './component/TaskList';

export interface taskType {
  id: number,
  title: string,
  description: string,
  isSelected: boolean,
}

function App() {

  const [tasks, setTasks] = useState<taskType[]>([]);
  const [showSelected, setShowSelected] = useState(false);

  const addTask = (taskTitle: string, taskDetails: string) => {
    const newTask: taskType = {
      id: Date.now(),
      title: taskTitle,
      description: taskDetails,
      isSelected: false,
    }
    setTasks([...tasks, newTask]);
  }

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  const toggleTaskSelection = (taskId: number) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, isSelected: !task.isSelected } : task))
  }

  const toggleShowSelected = () => {
    setShowSelected(!showSelected);
  }

  return (
    <>
      <div className='selectedTasks'>
        <label htmlFor="">Selected Tasks Only</label>
        <input id='showSelected' type="checkbox" checked={showSelected} onChange={toggleShowSelected} />
      </div>
      <NewTask onAddTask={addTask} />
      <TaskList tasks={showSelected ? tasks.filter(task => task.isSelected) : tasks} onDelete={deleteTask} toggleTask={toggleTaskSelection} />
    </>
  )
}

export default App
