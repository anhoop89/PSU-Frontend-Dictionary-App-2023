//React Circular Progressbar:  https://www.npmjs.com/package/react-circular-progressbar
import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../../CSS/ProgressBar.css';

const ProgressBar = ({ count }) => {
  const [getWordCount, setWordCount] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [pathColor, setPathColor] = useState('#3e98c7');
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setWordCount((count % 10) * 10);
  }, [count]);

  useEffect(() => {
    if (count % 10 === 0) {
      setDisplayText('Nice!');
      setPathColor(getRandomColor()); // Set a new color
      setShowMessage(true);
    } else {
      setDisplayText(`Total: ${count}`);
      setShowMessage(false); // Hide congrats msg
    }
  }, [count]);

  const getRandomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgba(${red}, ${green}, ${blue})`;
  };

  return (
    <div> 
    <div className='mx-auto' style={{ width: '70%' }}>
      <div className="">
        <CircularProgressbar
          value={getWordCount}
          text={displayText}
          background
          backgroundPadding={6}
          styles={buildStyles({
            textColor: '#fff',
            pathColor: pathColor,
            trailColor: '#ECF8F9',
            backgroundColor: '#395B64',
            textSize: '12px',
          })}
        />
      </div>
    </div>
    {showMessage && (
        <div className='p-1 mt-2'>
          <p className='text-center lead font-weight-bold pt-2 mt-2'>You translated 10 new words.  <br /> Keep it up!</p>
        </div>
    )}
    </div>
  );
};

export default ProgressBar;
