import React, { useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatBubbleComponent from './components/vectors/chatBubble/ChatBubbleComponent';
import ProgressBarCircle from './components/vectors/progressBarCircle/ProgressBarCircleComponent';


function App() {
  const ProgressRef = useRef();

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ChatBubbleComponent text={"olá"}></ChatBubbleComponent>
      <ProgressBarCircle percentage={count}></ProgressBarCircle>

      <button onClick={() => setCount(count + 1)}></button>
    </div>
  );
}

export default App;
