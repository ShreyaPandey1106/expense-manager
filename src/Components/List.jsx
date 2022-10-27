import React from 'react'

function List({task,deleteTask,updateTask}) {
  return (
    <li className="list-group-item task">
             <span className = {task.income===true ? "inc" : "outc"}>₹{task.amount} </span>
             <p className="fs-5">{task.text}</p>
             <div>
             <button type="button" className="btn btn-primary mx-2" onClick={()=>updateTask(task)}>Update</button>
             <button type="button" className="btn btn-dark" onClick={()=>deleteTask(task.id)}  >Delete</button>
             </div>
             
    </li>
  )
}

export default List