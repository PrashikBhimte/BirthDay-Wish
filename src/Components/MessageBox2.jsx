import React, { useEffect, useState } from 'react';
import "./MessageBox.css";

export default function MessageBox2(props) {

    const content = "As you embark on this new year, I hope it's filled with endless happiness, good health, and success. May all your dreams and aspirations come true. ✨ I wish you a lifetime of love, joy, and prosperity. Let's celebrate this special day with laughter, delicious food, and unforgettable memories. Cheers to you!🎉🥂";
    const [text, setText] = useState("");
    // var [ index, setIndex ] = useState(0);
    var index = 0;
    const length = content.length;

    const handleClick = (e) => {
        e.preventDefault();
        if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'svg' && e.target.tagName !== 'path') {
            document.getElementById('continue').style.display = "none";
            document.getElementById('backbutton').style.display = "none";
            // document.getElementById('messageBox').remove();
            document.removeEventListener('click', handleClick);
            props.next();
        }
    }

    useEffect(() => {

        const timeout = setTimeout(() => {
            const interval = setInterval(() => {
                if (index < length - 1) {
                    setText((prevText) => { return prevText + content[index] });
                    // setIndex(index+1);0
                    index++;
                }
                else {
                    clearInterval(interval);
                    document.addEventListener('click', handleClick);
                    document.getElementById('continue').style.display = "block";
                    document.getElementById('backbutton').style.display = "block";
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
