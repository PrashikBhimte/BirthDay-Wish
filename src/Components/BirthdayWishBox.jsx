import React, { useEffect } from 'react';
import "./BirthdayWishBox.css";
import head from "../Images/head.png";

export default function BirthdayWishBox() {

  return (
    <div id='birthdayWishBox'>
      <img id='birthdayWishBoxImg' src={head} alt='happy birthday' />
      {/* <div ></div> */}
      <p>Happy Birthday Gargi</p>
    </div>
  )
}
