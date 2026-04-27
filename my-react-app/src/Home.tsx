import React, { useState } from 'react'


export default function Home() {
    console.log("Home component rendered");
    const [counter,setcounter] = useState<number>(0);
    
    const handleClick = () => {
        setcounter(counter + 1);
    }

    if(counter === 2) {
        throw new Error("Counter reached 2");
    }
    
  return (
    <div>
      <p>{counter}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}
