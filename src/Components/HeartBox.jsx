import React, { useState, useEffect } from 'react';
import "./HeartBox.css";

export default function HeartBox() {

    const content = "I  Love    you!    💝";
    const [text, setText] = useState("");
    var index = 0;
    const length = content.length;

    useEffect(() => {

        const timeout = setTimeout(() => {
            const interval = setInterval(() => {
                if (index < length - 1) {
                    setText((prevText) => { return prevText + content[index] });
                    index++;
                }
                else {
                    clearInterval(interval);
                }
            }, 100);
    
            return () => clearInterval(interval);
        }, 2000);

        return () => clearTimeout(timeout);

    }, []);

    return (
        <div id="heartboxContent">
            <div id='heartBox'>
                <div id="leftbox" className='heartside'></div>
                <div id="rightbox" className='heartside'></div>
            </div>
            <p>{text}</p>
        </div>
    )
}
