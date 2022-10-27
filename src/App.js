import { useState } from 'react';
import Main from "./Components/Main";
import Navbar from "./Components/Navbar"
import Hero from "./Images/gold-coin-hourglass-time-is-money-concept.jpg"
import InputSection from "./Components/InputSection";


function App() {
   const[tasks, setTasks]= useState([])
   const[edit, setEdit]= useState({
     task:{},
     isEdit: false
   })

   function saveTask(newTask){
    setTasks([...tasks,newTask]);
    console.log(newTask.id);
   }

   function deleteTask(id){
    setTasks(tasks.filter(item=> item.id!==id));
   }
   
   function editTask(newtask){
    console.log(newtask.id);
    setTasks(tasks.map(item => item.id===newtask.id ? newtask: item));
    setEdit({task: {}, isEdit: false});
   }

   function updateTask(data){
     setEdit({task: data, isEdit:true})
   }

  return (

    <div className="App">
       <img src={Hero} className="hero" alt=""></img>
       <Navbar/>
       <div className="content d-flex flex-wrap-reverse flex-md-nowrap">
      
         <Main tasks={tasks} deleteTask={deleteTask} updateTask={updateTask}/>
         <InputSection tasks={tasks} saveTask={saveTask} edit={edit} editTask={editTask}/>

       </div>
    </div>
  );
}

export default App;
