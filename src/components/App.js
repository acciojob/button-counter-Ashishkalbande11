
import React, { useState} from "react";

const App = () => {
  const[count, setCount] = useState(0);
  return (
    <div>
        <P>Button clicked {count} times</P>
        <button onClick = { () => {
          setCount(count+1)
        }}>Click me</button>
    </div>
  )
}

export default App
