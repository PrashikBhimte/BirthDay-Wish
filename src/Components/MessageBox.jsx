import React, { useEffect, useState } from 'react';
import "./MessageBox.css";

export default function MessageBox(props) {

    const content = "Happy birthday to the most incredible person I know! Today, as you celebrate another year of life, I want to take a moment to express my deepest gratitude for having you in my life. You've brought so much joy, laughter, and love into my world. Your unwavering support, your infectious optimism, and your kind heart have made a profound impact on my life. I'm incredibly lucky to have you by my side.";
    const [ text, setText ] = useState("");
    // var [ index, setIndex ] = useState(0);
    var index = 0;
    const length = content.length;

    const handleClick = (e) => {
        e.preventDefault();
        document.getElementById('continue').style.display = "none";
        // document.getElementById('messageBox').remove();
        document.removeEventListener('click', handleClick);
        props.next();
    }

    useEffect(() => {

        const timeout = setTimeout(() => {
            const interval = setInterval(() => {
                if (index < length) {
                    setText((prevText) => { return prevText + content[index] });
                    // setIndex(index+1);0
                    index++;
                }
                else {
                    document.getElementById('continue').style.display = "block";
                    clearInterval(interval);
                    document.addEventListener('click', handleClick);
                }
            }, 50);
    
            return () => {
                clearInterval(interval);
                document.removeEventListener('click', handleClick);
            }
        }, 1500);

        return () => {
            clearTimeout(timeout);
        }

    }, []);

  return (
    <div id='messageBox'>{text}</div>
  )
}
