import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  let [counter, setCounter] =  useState(20)

  const AddValue = ()=>{ 
    //  counter = counter + 1
    //  setCounter(counter)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    console.log(counter)
   
  }

  const removeValue = () => { 
    counter = counter - 1
    setCounter(counter)
  } 

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value: {counter}</h2>

    <button 
    onClick={AddValue}
    >Add value</button>
    <br/>
    <br/>
    <button
    onClick={removeValue}
    >Remove value: {counter}</button>
    <p>Footer: {counter}  </p>
    </>
  )
}

export default App
