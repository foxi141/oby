import React, { ChangeEvent, FC, useState } from 'react';
import TodoTask from './components/TodoTask';
import  {ITask} from './interfaces';
  const App: FC =() => {
    const [task,setTask]=useState<string>("")
    const [deadline,setDeadline]=useState<number>(0)
    const [todolist,setTodolist]=useState<ITask[]>([]);
    const handleChange =(event : ChangeEvent<HTMLInputElement>): void =>{
      if (event.target.name === 'task'){
        setTask(event.target.value)
      }else{
        setDeadline(Number(event.target.value))
      }
    }
    const addTask = (): void => {
      const newTask={taskName:task ,deadline: deadline};
      setTodolist([...todolist,newTask])
     setTask ("")
     setDeadline(0)
    }
    const completeTask =(taskNameToDelete:string):void=>{
     setTodolist(todolist.filter((task) =>{
      return task.taskName != taskNameToDelete
     }))
    
    }
    
  return(
    <div className="App">
      <div className='header'>
        <div className='inputcontainer'>
        <input type='text' placeholder='task' onChange={handleChange} name='task'/>
        <input type='number' placeholder='time' name="deadline" onChange={handleChange} />
          </div>
        <button onClick={addTask}>Add</button>
        <div className='todolist'>
        {todolist.map((task:ITask,key:number )=>{
        return<TodoTask key={key} task={task} completeTask={completeTask}/>;
  })}
      
        </div>


      </div>
    </div>
  )
}
export default App