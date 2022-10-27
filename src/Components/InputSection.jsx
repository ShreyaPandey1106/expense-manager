import React from 'react'
import Form from './Form'

function InputSection({tasks,saveTask,edit, editTask}) {
    const balance = tasks.reduce((iv , item)=>{
        if(item.income===true)
        return iv+item.amount
        else
        return iv-item.amount
      },0)
  return (
    <div className="inputSection m-5">
         <Form  saveTask={saveTask} edit={edit} editTask={editTask}/>
         <div className="amount bg-dark bg-gradient bg-opacity-75 text-white my-3 p-5">
           <p className="fs-4">Total Amount</p>
           <span>₹{balance}</span>
         </div>
      </div>
  )
}

export default InputSection