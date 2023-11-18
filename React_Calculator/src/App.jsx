import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState(0)

  const handleClick = (val) => {
    setQuestion(question + val)
  }

  const calculateAnswer = () => {
    setAnswer(eval(question))
    setQuestion(question+"="+eval(question))
  }

  const clearDisplay = () => {
    setQuestion("")
    setAnswer(0)
  }

  return (
    <>
      <div className='calculator'>
        <div className='display-screen' id='display'>
          <div className="que">
            <p>{question}</p>
          </div>
          <div className="ans">
            <p>{answer}</p>
          </div>
        </div>
        <div className='keys-container'>
          <div className="key k1" id='clear' onClick={clearDisplay}>AC</div>
          <div className="key k2"></div>
          <div className="key" id='divide' onClick={() => handleClick("/")}>/</div>
          <div className="key" id='multiply' onClick={() => handleClick("*")}>x</div>
          <div className="key" id='seven' onClick={() => handleClick("7")}>7</div>
          <div className="key" id='eight' onClick={() => handleClick("8")}>8</div>
          <div className="key" id='nine' onClick={() => handleClick("9")}>9</div>
          <div className="key" id='subtract' onClick={() => handleClick("-")}>-</div>
          <div className="key" id='four' onClick={() => handleClick("4")}>4</div>
          <div className="key" id='five' onClick={() => handleClick("5")}>5</div>
          <div className="key" id='six' onClick={() => handleClick("6")}>6</div>
          <div className="key" id='add' onClick={() => handleClick("+")}>+</div>
          <div className="key" id='one' onClick={() => handleClick("1")}>1</div>
          <div className="key" id='two' onClick={() => handleClick("2")}>2</div>
          <div className="key" id='three' onClick={() => handleClick("3")}>3</div>
          <div className="key k16" id='equals' onClick={calculateAnswer}>=</div>
          <div className="key k17" id='zero' onClick={() => handleClick("0")}>0</div>
          <div className="key k18"></div>
          <div className="key" id='decimal'>.</div>
          <div className="key k20"></div>
        </div>
      </div>
      <footer><p>Designed and Coded by NAMIT PATEL</p></footer>
    </>
  )
}

export default App
