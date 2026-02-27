import React, { useState } from 'react'

const App = () => {
  const [username, setUsername] = useState("")


  const Submithandler=(e)=>{
    e.preventDefault();
    console.log('form submitted', username);
    setUsername('')
    
  }

  return (
    <>
      <h1>Welcome to React!</h1>
      <form onSubmit={(e)=>{
        Submithandler(e)
      }}>
        <input type="text" placeholder='Enter your Username'
        value={username}
        onChange={(e)=>{
          setUsername(e.target.value)
        }}
         />
        <button>Submit</button>
      </form>
    </>
  )
}

export default App