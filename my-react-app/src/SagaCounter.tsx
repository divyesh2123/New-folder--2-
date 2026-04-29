import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function SagaCounter() {
    const data = useSelector((state: { counter: { myNumber: number } }) => state.counter.myNumber);
 
    const dispatch = useDispatch();
 
    console.log(data);
 
    return (
    <div>SagaCounter: {data}

            <button onClick={() => dispatch({ type: 'INCREMENT_COUNTER_Asyc2' })}>
                Increment Counter</button>
    
    </div>
  )
}
