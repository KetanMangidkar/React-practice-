

import {useEffect, useState} from "react";

export const Timer =()=>{
    const [count, setCount] = useState(0)
    const [min,setMin] = useState(0);
    const [minute , setMinute] =useState(0);


    var chaitanya;
    useEffect(()=>{
     chaitanya =  setInterval(()=>{
        setCount(count+1)

        if(count ==10){
          setMin(min+1);
          setCount(0);
        }
        if(min ==59){
          setMinute(minute+1);
          setMin(0);
          setCount(0);
        }
      },100)

      return ()=>clearInterval(chaitanya);
    },)
    
  
    const ketan=()=>{
      clearInterval(chaitanya);
    }
    const start=()=>{
      setCount(count+1);
    }
    const restart =()=>{
      setCount(0);
      setMin(0);
      setMinute(0)
    }
   

    return (
        <div>
              <div>hellow chaitanya</div>
      <div> <p>{minute<=9 ?"0"+minute : minute}:{min<=9 ?"0"+min : min}:{count<=9 ?"0"+count : count} </p></div>
      <button onClick={start}>start</button>
      <button onClick={ketan}>stop</button>
       
      <button onClick={restart}>restart</button>
        </div>
    )
}