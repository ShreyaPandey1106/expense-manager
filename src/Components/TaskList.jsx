import React from 'react'
import List from './List'

function TaskList({tasks,deleteTask,updateTask}) {
  return (
    <ul className="list-group m-2">
        {
            tasks.map((task)=>
            <List key={task.id} task={task} deleteTask={deleteTask} updateTask={updateTask}/>
            )
        }
           
    </ul>
  )
}

export default TaskList