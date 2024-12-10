import React from 'react';
import "./AskBox.css";

export default function AskBox(props) {

    const values = ['300px', "200px", "100px", "50px", "250px", "150px", '-300px', "-200px", "-100px", "-50px", "-250px", "-150px"];

    const hanldeNo = () => {
        var randomIndex = Math.floor(Math.random() * values.length);
        document.getElementById('askBox').style.top = values[randomIndex];
        // randomIndex = Math.floor(Math.random() * values.length);
        // document.getElementById('askBox').style.left = values[randomIndex];
    }

    const handleYes = () => {
        props.next();
    }

  return (
    <div id='askBox' >
        <p>Would you be mine Forever? 💍</p>
        <div id="buttons">
            <button onClick={handleYes}>Yes!</button>
            <button onClick={hanldeNo}>No!</button>
        </div>
    </div>
  )
}
