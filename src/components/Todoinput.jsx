


export const Showinput =(props)=>{
      

    return (
        <div className="container">
          <div>{props.task}</div>
          <div>
              <button onClick={()=>props.onSelect(props.id)}>x</button>
          </div>
        </div>
    )
}

