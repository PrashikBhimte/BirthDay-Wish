import React from 'react';
import "./Photos.css";
import p1 from "../Images/1.jpg";
import p2 from "../Images/2.jpg";
import p3 from "../Images/3.jpg";
import p4 from "../Images/4.jpg";
import p5 from "../Images/5.jpg";
import p6 from "../Images/6.jpg";
import p7 from "../Images/7.jpg";

export default function Photos() {
    return (
        <div id='photosBox'>
            <img className='photo' src={p1} alt="photo 1" />
            <img className='photo' src={p2} alt="photo 2" />
            <img className='photo' src={p3} alt="photo 3" />
            <img className='photo' src={p4} alt="photo 4" />
            <img className='photo' src={p5} alt="photo 5" />
            <img className='photo' src={p6} alt="photo 6" />
            <img className='photo' src={p7} alt="photo 7" />
        </div>
    )
}
