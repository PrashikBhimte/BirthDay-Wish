import React, { useEffect } from 'react';
import "./InitialBox.css";

export default function InitialBox(props) {

    useEffect(() => {

        const handleClick = (e) => {
            e.preventDefault();
            document.removeEventListener('click', handleClick);
            props.next();
        }

        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        }
    }, []);

  return (
    <div id='initialbox'>
        <p>Click Any Where to Continue!</p>
    </div>
  )
}
