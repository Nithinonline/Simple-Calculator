import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'


function App() {


  const [Result, setResult] = useState(() => {
    const StoredTask = localStorage.getItem("Result")
    return StoredTask ? StoredTask : 0;
  })

  useEffect(() => {
    localStorage.setItem('Result', Result.toString());
  }, [Result]);

  const [Input, setInput] = useState(() => {
    const StoredRes = localStorage.getItem("Input")
    return StoredRes ? StoredRes : 0;
  })

  useEffect(() => {
    localStorage.setItem('Input', Input.toString());
  }, [Input]);



  const handleChange = (number) => {
    const num = Input.concat(number)
    setInput(num)
    console.log(Input);
  }


  const handleEqual = (Input) => {
    const res = eval(Input)
    setResult(res)
  }

  const Backspace=()=>{
    const value=Input.slice(0,-1)
    setInput(value)

  }


  return (
    <>
      <div className='card'>
        <h2>CALCULATOR</h2>
        <div className="display">
        <div className="Inputdiv">
          <input className='Input' placeholder='0' value={Input} />
        </div>
        <div className='Resultdiv'>
          <input className='Result' placeholder='0' value={Result} />
        </div>
        </div>

        <div className="buttons">
          <button className='button' onClick={() => { handleChange(7) }}>7</button>
          <button className='button' onClick={() => { handleChange(8) }}>8</button>
          <button className='button' onClick={() => { handleChange(9) }}>9</button>
          <button className='button' onClick={() => { handleChange('+') }}>+</button>

          <button className='button' onClick={() => { handleChange(4) }}>4</button>
          <button className='button' onClick={() => { handleChange(5) }}>5</button>
          <button className='button' onClick={() => { handleChange(6) }}>6</button>
          <button className='button' onClick={() => { handleChange('-') }}>-</button>

          <button className='button' onClick={() => { handleChange(1) }}>1</button>
          <button className='button' onClick={() => { handleChange(2) }}>2</button>
          <button className='button' onClick={() => { handleChange(3) }}>3</button>
          <button className='button' onClick={() => { handleChange('*') }}>*</button>

          <button className='button' onClick={() => { handleChange(0) }}>0</button>
          <button className='button' onClick={() => { handleChange('.') }}>.</button>
          <button className='button' onClick={() => { handleEqual(Input) }}>=</button>
          <button className='button' onClick={() => { handleChange('/') }}>/</button>

          <button className='button' onClick={() => { setInput(""); setResult("") }} >C</button>
          <button className='button' onClick={() => { Backspace() }} >⌫</button>
        </div>

      </div>























    </>
  )
}

export default App
