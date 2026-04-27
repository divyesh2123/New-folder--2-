import React from 'react'

export default function ExampleRef() {
    console.log('ExampleRef rendered')
    const inputRef = React.useRef<HTMLInputElement>(null)   
  return (
    <div>
        
        <input ref={inputRef} type="text" />
        <button onClick={() => {inputRef.current?.focus()

            console.log(inputRef.current?.value)  }  
        }>Focus Input

        </button>

    </div>
  )
}
