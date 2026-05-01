import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './slice/counterslice'



export default function CounterExample() {

    const counter = useSelector((state: { counter: { myNumber: number } }) => state.counter.myNumber)
    const dispatch = useDispatch()
  return (
    <div>CounterExample: {counter}
        <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>

    
    </div>
  )
}
