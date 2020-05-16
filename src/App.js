import React from 'react';
import './App.css';
import Header from './layouts/Header'
import DuckImage from './layouts/DuckImage'
import peekingRilakkuma from './assets/images/peeking.gif'

function App() {
  return (
    <div className="App">
      <div style = {mainContainerStyle} className="mainContainer">
        <Header/>
        <DuckImage/>
      </div>
      <div style={bottomContainerStyle}>
        <div style={peekingStyle} >
          <img src={peekingRilakkuma} alt="peekaboo!"></img>
        </div>
      </div>
    </div>
  );
}

export default App;

const mainContainerStyle = {
  padding: "10%"
}

const bottomContainerStyle = {
  position: "relative",
  bottom: "0",
  overflow: "hidden"
}

const peekingStyle = {
  position: "relative",
  left: "-124px"
}