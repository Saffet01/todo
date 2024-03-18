import React, { useRef } from 'react'

interface newTaskType {
    onAddTask: (taskTitle: string, taskDetails: string) => void
}

export const NewTask = ({onAddTask}:newTaskType) => {

    const task = useRef<HTMLInputElement>(null);
    const details = useRef<HTMLInputElement>(null);
    const form = useRef<HTMLFormElement>(null)

    const submitHandler = (event: React.FormEvent) => {
        event?.preventDefault();

        const enteredTitle = task.current?.value;
        const enteredDetail = details.current?.value;

        if(enteredTitle && enteredDetail){
            onAddTask(enteredTitle, enteredDetail);
        }

        form.current?.reset();
    }

  return (
    <form ref={form} action="" onSubmit={submitHandler}>
    <p>
      <label htmlFor="task">Your Task</label>
      <input id='title' type="text" ref={task} />
    </p>
    <p>
      <label htmlFor="details">Task Details</label>
      <input id='details' type="text" ref={details} />
    </p>

    <p>
      <button type='submit'>Add Task</button>
    </p>
  </form>    
  )
}
