import React from 'react'





 function Child( arrayValue : any) {
    console.log(arrayValue);
  return (
    <div>Child</div>
  )
}

export default React.memo(Child);
