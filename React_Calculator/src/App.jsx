import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState('0')

  const handleClick = (val) => {
    // console.log(val)
    if (val === '0' && question === '0') {
      return;
    }
    if (val !== '0' && question === '0') {
      setQuestion(val)
      setAnswer(val)
      return;
    }
    if ((val === '/' || val === '*') && question === '') {
      return;
    }
    const symbols = ['+', '-', '/', '*']
    if (val === '-') {
      setQuestion(question + val)
    }
    else if (question.length > 2 && symbols.includes(val) && symbols.includes(question[question.length - 1]) && symbols.includes(question[question.length - 2])) {
      let str1 = question.slice(0, -2) + val;
      setQuestion(str1)
    }
    else if (symbols.includes(val) && symbols.includes(question[question.length - 1])) {
      let str1 = question.slice(0, -1) + val;
      setQuestion(str1)
    }
    else {
      setQuestion(question + val)
    }
    // for symbols
    if (symbols.includes(val)) {
      setAnswer(val)
    }
    // for first entered value
    else if (question === '' || answer === 0) {
      setAnswer(val)
    }
    // extracting string after last symbol
    else {
      let str = ''
      let l = question.length - 1;
      while (l >= 0 && !symbols.includes(question[l])) {
        str += question[l]
        l--;
      }
      const reversedString = str.split('').reverse().join('');
      setAnswer(reversedString + val)
    }
  }

  const calculateAnswer = () => {
    if (question === '') {
      return;
    }
    setAnswer(Number(eval(question)))
    setQuestion(question + "=" + eval(question))
  }

  const clearDisplay = () => {
    setQuestion("")
    setAnswer('0')
  }

  const handleDot = () => {
    const symbols = ['+', '-', '/', '*']
    if (question === '') {
      setQuestion("0.")
      return
    }
    else if (question[question.length - 1] === '.') {
      return;
    }
    else if (symbols.includes(question[question.length - 1])) {
      setQuestion(question + '0.')
    }
    else {
      let l = question.length - 1;
      while (l >= 0) {
        if (question[l] === '.') {
          return
        } else if (!symbols.includes(question[l])) {
          l--;
        }
        else {
          setQuestion(question + '.')
          return
        }
      }
      setQuestion(question + '.')
    }
  }

  return (
    <>
      <div className='calculator'>
        <div className='display-screen'>
          <div className="que">
            <p>{question}</p>
          </div>
          <div className="ans">
            <p id='display'>{answer}</p>
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
          <div className="key" id='decimal' onClick={handleDot}>.</div>
          <div className="key k20"></div>
        </div>
      </div>
      <footer><p>Designed and Coded by NAMIT PATEL</p></footer>
    </>
  )
}

export default App
