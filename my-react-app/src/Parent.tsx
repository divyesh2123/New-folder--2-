import React, { useState } from 'react'
import Child from './Child';

export default function Parent() {

    const [inputValue, setInputValue] = useState<string>("");
    const [arrayValue, setArrayValue] = useState<string[]>([]); 

    const handleAdd =  React.useCallback(() => {
        setArrayValue([...arrayValue,inputValue])
    },[arrayValue]);

   
  return (
    <div>

        <input type='text' value={inputValue} 
        onChange={(e)=>setInputValue(e.target.value)}/>
        <button onClick={()=>{
            
            setArrayValue([...arrayValue,inputValue])


        }}>Add</button>
        
        <Child arrayValue={arrayValue} handleAdd={handleAdd} />
    </div>
  )
}

