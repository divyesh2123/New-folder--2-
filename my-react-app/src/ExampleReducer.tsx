import React, { useReducer, useState } from 'react'

interface Action {
    type: string;
    payload: string;
}

export default function ExampleReducer() {
    const [input,setInput] = useState<string>('')
  //  const [data,setData] = useState<string[]>([]) 



    const reducer = (state: string[], action: Action) => {
        switch (action.type) {
            case 'Add':
                return [...state, action.payload]
            case 'REMOVE':
                return state.filter(item => item !== action.payload)
            default:
                return state
        }
    }
     const [data,setData] = useReducer(reducer, [])
  return (
    <div>
        
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={() => {setData({type:"Add", payload: input})}}>Alert Input</button>
        {data.map((item, index) => (
            <div key={index}>{item}
                <button onClick={() => setData({type:"REMOVE", payload: item})}>Remove</button>
            </div>
        ))}
    </div>
  )
}
