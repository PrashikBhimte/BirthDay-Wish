import React, { useEffect } from 'react';
import "./InitialBox.css";

export default function InitialBox(props) {

    useEffect(() => {

        const handleClick = (e) => {
            e.preventDefault();
            if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'svg' && e.target.tagName !== 'path') {
                document.removeEventListener('click', handleClick);
                props.next();
            }
        }

        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        }
    }, []);

  return (
    <div id='initialbox'>
        <p>Click anywhere to continue!</p>
    </div>
  )
}
