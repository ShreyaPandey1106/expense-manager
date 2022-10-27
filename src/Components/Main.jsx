import React from 'react'
import TaskList from './TaskList'

function Main({tasks, deleteTask,updateTask}) {

    const tincome = tasks.filter((item)=>{
        if(item.income===true ){
            return true
        }
    }).reduce((iv ,item)=>{
        return iv+item.amount
    },0)

    const texpense = tasks.filter((item)=>{
        if(item.expense===true){
            return true
        }
    }).reduce((iv ,item)=>{
        return iv+item.amount
    },0)
    
  return (
    <div className="main m-4">
          <div className="displayAmount d-flex flex-wrap flex-md-nowrap">
           <div className="amount bg-primary bg-gradient text-white m-3 p-5">
             <p className="fs-4">Total Income</p>
           <span>₹{tincome} </span>
           </div>

           <div className="amount bg-secondary bg-gradient text-white m-3 p-5">
             <p className="fs-4">Total Expense</p>
           <span>₹{texpense}</span>
           </div>
          </div>
         <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask}/>
      </div>
  )
}

export default Main