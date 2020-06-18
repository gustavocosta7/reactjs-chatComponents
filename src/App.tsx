import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChatBubbleComponent from './components/vectors/chatBubble/ChatBubbleComponent';

function App() {
  return (
    <div className="App">
      <ChatBubbleComponent text={"texto"}></ChatBubbleComponent>
    </div>
  );
}

export default App;
