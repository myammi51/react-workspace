import { useState } from 'react'
import './App.css'

function App() {
  let [inputText, setInputText] = useState("");

  return (
    <>
      <div>야구게임 (4글자)</div>
      <div className="nbGame">
        <input 
          type="text" 
          value={ inputText } 
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <button>제출</button>
        <div>제출한 답</div>

      </div>
    </>
  )
}

export default App
