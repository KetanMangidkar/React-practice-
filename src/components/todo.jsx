import { Showinput } from "./Todoinput";
import { useState,useRef } from "react"

export const Todo =()=>{
    const [todotext , setTodo] = useState([]);
   const refinput1 = useRef() 


   const handleInput = ()=>{

       var a = refinput1.current.value
       setTodo([...todotext,a])
       refinput1.current.focus()
   }

   const deleteItem = (inputId)=>{
         const finalData = todotext.filter((currEle,index)=>{
             return index !=inputId;
         })
         setTodo(finalData)
   }

    return (
        <div>
            <input type="text" ref={refinput1} />
            <button onClick={handleInput}>add todo</button>
         
            {todotext.map((a,index)=>{
                return <Showinput
                key={index}
                id={index}
                task={a} 
                onSelect ={deleteItem}
                
                />
            })}
        </div>
    )
}