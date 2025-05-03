import { useState } from "react";

function App() {

  let [counter,setCounter] = useState(15);
  let [decreaser,setDecreaser] = useState(15);

  const addvalue = () =>{
    if(counter<20){
    counter = counter+1
    }
    setCounter(counter)

  }
  const decrease = () =>{
    if(decreaser>0){
    decreaser = decreaser-1
    }
    setDecreaser(decreaser)

  }
 
 

  return (
   <>
   <h1>Chai aur react using vite </h1>
   <button onClick={addvalue}
   >Add value</button>
   <button onClick={decrease}
   >Decrease value</button>
   <h2>Addvalue{counter}</h2>
   <h2>Decreasevalue{decreaser}</h2>

   </>
  )
}

export default App
