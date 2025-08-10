import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    useEffect(()=>{
        console.log("This is the current value of Count: ", count);
    }, [count])


  return (
    <div>
      Counter: {count}
      <br />
      <br />
      <br />
      <button onClick={()=>setCount(count + 5)}>Increment Count</button>
    </div>
  )
}

export default Counter
// class based component -> lifecycle -> constructor, 