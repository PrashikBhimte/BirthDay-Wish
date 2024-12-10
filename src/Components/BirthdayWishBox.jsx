import React, { useEffect } from 'react';
import "./BirthdayWishBox.css";

export default function BirthdayWishBox(props) {

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'svg' && e.target.tagName !== 'path') {
      document.getElementById('continue').style.display = "none";
      document.getElementById('confetti').style.display = "none";
      document.getElementById('birthdayWishBox').style.marginTop = "120vh";
      // setTimeout(() => {return document.getElementById('birthdayWishBox').remove();}, 2000);
      document.removeEventListener('click', handleClick);
      setTimeout(() => { return props.next(); }, 2000);
    }
  }
  
  useEffect(() => {

    document.addEventListener("click", handleClick);
    setTimeout(() => { return document.getElementById('continue').style.display = "block"; }, 2000);

    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, []);

  return (
    <div id='birthdayWishBox'>
      <div id='birthdayWishBoxImg'></div>
      <p>Happy Birthday Gargi</p>
    </div>
  )
}
