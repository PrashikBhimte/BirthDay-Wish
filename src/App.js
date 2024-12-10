import './App.css';
import HeartBox from './Components/HeartBox';
import AskBox from './Components/AskBox';
import MessageBox from './Components/MessageBox';
import BirthdayWishBox from './Components/BirthdayWishBox';
import React, { useEffect, useRef, useState } from 'react';
import Confetti from 'react-confetti';
import song from "./Music/song.mpeg";
import MessageBox2 from './Components/MessageBox2';
import InitialBox from './Components/InitialBox';
import { AiFillSound, AiOutlineSound } from "react-icons/ai";

var index = 0;

function App() {

  const myRef = useRef();

  const [is, setIs] = useState(false);
  // const [isfirst, setIsfirst] = useState(true);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const [isAudioOn, setIsAudioOn] = useState(false);

  const handleNext = () => {
    if (index === 0) {
      setIs(true);
      setIsAudioOn(true);
      myRef.current.play();
    }
    index++;
    setBox(boxes[index]);
  }

  const handlePrev = (e) => {
    e.preventDefault();
    if (index > 0) {
      index--;
      if (index === 0) {
        myRef.current.load();
        setIs(false);
      }
      if (index === 1) {
        myRef.current.load();
        myRef.current.play();
        setIsAudioOn(true);
        document.getElementById("confetti").style.display = "block";
      }
      setBox(boxes[index]);
    }
  }

  // const audio = new Audio(song);
  const boxes = [<InitialBox next={handleNext} />, <BirthdayWishBox next={handleNext} />, <MessageBox next={handleNext} />, <MessageBox2 next={handleNext} />, <AskBox next={handleNext} />, <HeartBox />];
  const [box, setBox] = useState(boxes[index]);

  useEffect(() => {

    setWidth(window.innerWidth);
    setHeight(window.innerHeight);

  }, [window]);

  const HandleAudio = () => {
    if (isAudioOn) {
      myRef.current.pause();
      setIsAudioOn(false);
    }
    else {
      // audio.play();
      myRef.current.play();
      setIsAudioOn(true);
    }
  }

  return (
    <div className="App">
      <audio ref={myRef} src={song} />
      {is && <button id='audioButton' onClick={HandleAudio}>{isAudioOn ? <AiFillSound /> : <AiOutlineSound />}</button>}
      {is && <Confetti id='confetti' height={height} width={width} />}
      {is && <button id='backbutton' onClick={handlePrev}>Back</button>}
      <p id='continue'>Click anywhere to continue!</p>
      {box}
    </div>
  );
}

export default App;
