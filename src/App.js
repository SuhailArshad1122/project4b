import React from 'react';
import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";


function App() {

  const { ref, playState } = useWebAnimations({
    keyframes: [{transform: "translate(0,0)"}, {transform: "translate(750px,0)"}],
    timing: {
      delay: 500, // Start with a 500ms delay
      duration: 3000, // Run for 1000ms
      iterations: Infinity, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
      
    },
    onReady: ({ playState, animate, animation }) => {
      // Triggered when the animation is ready to play (Google Chrome: available in v84+)
    },
    onUpdate: ({ playState, animate, animation }) => {
      // Triggered when the animation enters the running state or changes state
      
    },
    onFinish: ({ playState, animate, animation }) => {
      // Triggered when the animation enters the finished state (Google Chrome: available in v84+)
    },
  });

  return (
    <div>
      <div className='target' ref={ref}>
        <img src='./PakFlag.png' alt="PakFlag" />;
        <p>The playstae is : {playState} </p>
      </div>
    </div>
  );
}

export default App;
