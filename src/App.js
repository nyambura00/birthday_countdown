import React from 'react'; //react library has been imported so that JSX elements can rightfully get implemented.
import './App.css';
import Countdown from "./Countdown.js"

function App() {
  return (
    //so the app.js just contains the app's parent div element content
    <div id="project-info">
    <p>So this is a countdown for my birthday.</p>
    <p>I implemented the following tech stack fields:</p>
    <ul type="I">
      <li>Vanilla JavaScript</li>
      <li>ReactJS</li>
      <li>CSS Framework</li>
      <li>HTML language</li>
      <li>Git version control system</li>
    </ul>
    <Countdown />
    </div>
  )
}

export default App; //making the functional component available in the application
