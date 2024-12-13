import React, { useEffect, useState } from 'react';
import "./MessageBox.css";

export default function MessageBox2(props) {

    const content = "As you embark on this new year, I hope it's filled with endless happiness, good health, and success. May all your dreams and aspirations come true. ✨ I wish you a lifetime of love, joy, and prosperity. Let's celebrate this special day with laughter, delicious food, and unforgettable memories. Cheers to you!🎉🥂";
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
                    props.ready();
                }
            }, 50);

            return () => {
                clearInterval(interval);
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
