import React, { useEffect } from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'; 

function Form({saveTask, edit,editTask}) {
    const[inputText, setInputText]= useState([ ])
    const[inputAmount, setInputAmount]= useState([ ])
    const [checked, setChecked] = useState({ income: false, expense: false });
    useEffect(()=>{
      setInputText(edit.task.text);
      setInputAmount(edit.task.amount); 
      setChecked({ income: edit.task.income, expense: edit.task.expense });
    },[edit])

    function handleTextChange(e){
       setInputText(e.target.value);   
    }
    function handleAmountChange(e){
        setInputAmount(e.target.value);  
     }

     function handleTypeChange(e){
       if(e.target.value==="income")
       setChecked({income:true, expense: false});
       else
       setChecked({income:false, expense: true});
    }
     
     function handleSubmit(event) {
        event.preventDefault();
         
        if(edit.isEdit){
          const edited ={  
            id : edit.task.id,
           text : inputText,
           amount : parseInt(inputAmount),
           income : checked.income,
           expense : checked.expense
           }
          editTask(edited);
        }
        else{
          const newTask ={  
            id : uuidv4(),
           text : inputText,
           amount : parseInt(inputAmount),
           income : checked.income,
           expense : checked.expense
           }
           saveTask(newTask);
        }
        

        setInputAmount("");
        setInputText("");
        setChecked({ income: false, expense: false });
      }

  return (
    <form className="bg-dark bg-gradient bg-opacity-75 text-white p-4" onSubmit={(e)=>handleSubmit(e)} >
           <div className="row mb-3">
             <label className="col-sm-2 col-form-label">Text</label>
             <div className="col-sm-10">
               <input value={inputText} type="text" className="form-control" onChange={(e)=>handleTextChange(e)}/>
             </div>
           </div>
           <div className="row mb-3">
             <label className="col-sm-2 col-form-label">Amount</label>
             <div className="col-sm-10">
               <input value={inputAmount} type="text" className="form-control" onChange={(e)=>handleAmountChange(e)}/>
             </div>
           </div>
           <fieldset className="row mb-3">
             <legend className="col-form-label col-sm-2 pt-0">Options</legend>
             <div className="col-sm-10">
               <div className="form-check">
                 <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" checked={checked.income}
          value="income" onChange={(e)=>handleTypeChange(e)}/>
                 <label className="form-check-label" htmlFor="gridRadios1">
                   Income
                 </label>
               </div>
               <div className="form-check">
                 <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="expense" checked={checked.expense} value="expense" onChange={(e)=>handleTypeChange(e)}/>
                 <label className="form-check-label" htmlFor="gridRadios2">
                   Expense
                 </label>
               </div>
             </div>
           </fieldset>
           <div className="d-grid gap-2">
               <button type="submit" className="btn btn-primary btn-lg" >Save</button>
           </div>
         </form>
  )
}

export default Form