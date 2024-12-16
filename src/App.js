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
import { IoMdArrowBack } from "react-icons/io";
import Photos from './Components/Photos';

var index = 0;

function App() {

  const myRef = useRef();

  const [ isConfetti, setIsConfetti ] = useState(false);
  const [ isAudioSwitch, setIsAudioSwitch ] = useState(false);
  const [ isContinue, setIsContinue ] = useState(false);
  const [ isBack, setIsBack ] = useState(false);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const [isAudioOn, setIsAudioOn] = useState(false);

  const ready = () => {
    setIsBack(true);
    setIsContinue(true);
  }

  const handleNext = () => {
    if (index === 0) {
      setIsConfetti(true);
      setIsAudioSwitch(true);
      setIsAudioOn(true);
      setIsBack(true);
      setIsContinue(true);
      myRef.current.play();
      index++;
      setBox(boxes[index]);
    }
    else if ( index === 1 ) {
      setIsConfetti(false);
      document.getElementById('birthdayWishBox').style.marginTop = "120vh";
      setTimeout(() => {
        index++;
        setBox(boxes[index]);
      }, 2000);
    }
    else if (index === 2 || index === 3 || index === 5) {
      index++;
      setBox(boxes[index]);
    }
    else if (index === 4) {
      setIsContinue(false);
      document.removeEventListener('click', handleClick);
      index++;
      setBox(boxes[index]);
    }
  }

  const handlePrev = (e) => {
    e.preventDefault();
    if (index > 0) {
      index--;
      if (index === 0) {
        myRef.current.load();
        setIsConfetti(false);
        setIsAudioSwitch(false);
        setIsAudioOn(false);
        setIsBack(false);
        setIsContinue(false);
      }
      else if (index === 1) {
        myRef.current.load();
        myRef.current.play();
        setIsAudioOn(true);
        setIsAudioSwitch(true);
        setIsConfetti(true);
      }
      else if (index === 3) {
        setIsContinue(true);
        document.addEventListener('click', handleClick);
      }
      setBox(boxes[index]);
    }
  }

  const boxes = [<InitialBox />, <BirthdayWishBox />, <Photos />, <MessageBox ready={ready} />, <MessageBox2 ready={ready} />, <AskBox next={handleNext} />, <HeartBox />];
  const [box, setBox] = useState(boxes[index]);

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'svg' && e.target.tagName !== 'path') {
      handleNext();
    }
  }

  useEffect(() => {

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, []);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);

  const HandleAudio = () => {
    if (isAudioOn) {
      myRef.current.pause();
      setIsAudioOn(false);
    }
    else {
      myRef.current.play();
      setIsAudioOn(true);
    }
  }

  return (
    <div className="App">
      <audio ref={myRef} src={song} />
      {isAudioSwitch && <button id='audioButton' onClick={HandleAudio}>{isAudioOn ? <AiFillSound /> : <AiOutlineSound />}</button>}
      {isConfetti && <Confetti id='confetti' height={height} width={width} />}
      {isBack && <button id='backbutton' onClick={handlePrev}><IoMdArrowBack /></button>}
      {isContinue && <p id='continue'>Click anywhere to continue!</p>}
      {box}
    </div>
  );
}

export default App;
