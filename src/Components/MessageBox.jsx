import React, { useEffect, useState } from 'react';
import "./MessageBox.css";

export default function MessageBox(props) {

    const content = "Happy birthday to the most incredible person I know!  🎉 Today, as you celebrate another year of life, I want to take a moment to express my deepest gratitude for having you in my life. You've brought joy, laughter, and love into my world. Your unwavering support, your infectious optimism, and your kind heart have made a profound impact on my life. I'm fortunate to have you by my side 🥂.";
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
