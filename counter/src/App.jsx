import { useState } from "react";

function App() {
const [count,setCount]=useState(0)
// let counter=12

const addValue=()=>{
  // console.log("Clicked");
  setCount((prevCounter)=>prevCounter+1)
  setCount((prevCounter)=>prevCounter+1)
  setCount((prevCounter)=>prevCounter+1)
  setCount((prevCounter)=>prevCounter+1)
}

const decreaseValue=()=>{
  // console.log("Clicked");
  setCount(count-1)
}
  return (
    <>
       <h1>Chai and Code </h1>
       <h2>Counter Value : {count}</h2>

       <button  onClick={addValue}>Add Value</button>
       <br/>
       <button onClick={decreaseValue}>Remove Value</button>
    </>
  )
}

export default App;
