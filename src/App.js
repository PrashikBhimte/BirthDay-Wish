import './App.css';
import HeartBox from './Components/HeartBox';
import AskBox from './Components/AskBox';
import MessageBox from './Components/MessageBox';
import BirthdayWishBox from './Components/BirthdayWishBox';
import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import song from "./Music/song.mpeg";
import MessageBox2 from './Components/MessageBox2';
import InitialBox from './Components/InitialBox';

function App() {

  const [ is, setIs ] = useState(false);
  const [ isfirst, setIsFirst ] = useState(true);

  const width = window.innerWidth;
  const height = window.innerHeight;

  const handleNext = () => {
    index++;
    setBox(boxes[index]);
    if (isfirst) {
      setIsFirst(false);
      setIs(true);
    }
  }

  const audio = new Audio(song);
  var index = 0;
  const boxes = [<InitialBox next={handleNext}/>, <BirthdayWishBox next={handleNext}/>, <MessageBox next={handleNext}/>, <MessageBox2  next={handleNext} />, <AskBox next={handleNext}/>, <HeartBox />];
  const [ box, setBox ] = useState(boxes[index]);

  useEffect(() => {

    const handleFirstClick = (e) => {
      e.preventDefault();
      audio.play();
      document.removeEventListener('click', handleFirstClick);
    }

    document.addEventListener('click', handleFirstClick);

    return () => {
      document.removeEventListener('click', handleFirstClick);
    }

  }, []);

  return (
    <div className="App">
      {is && <Confetti id='confetti' height={height} width={width}/>}
      <p id='continue'>Click Any Where to Continue!</p>
      {box}
      {/* <MessageBox /> */}
    </div>
  );
}

export default App;
