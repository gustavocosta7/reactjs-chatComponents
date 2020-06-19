import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatBubbleComponent from './components/vectors/chatBubble/ChatBubbleComponent';
import ProgressBarCircle from './components/vectors/progressBarCircle/ProgressBarCircleComponent';


function App() {
  const ProgressRef = useRef();

  return (
    <div className="App">
      <ChatBubbleComponent text={"texto"}></ChatBubbleComponent>
      <ProgressBarCircle childRef={ProgressRef} porcentagem={100}></ProgressBarCircle>
    </div>
  );
}

export default App;
