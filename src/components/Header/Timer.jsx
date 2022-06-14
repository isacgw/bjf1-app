import React from 'react'
import './Timer.css'
import { useState, useEffect } from 'react'
import {getRemainingTimeUntilMsTimestamp} from './TimerUtils'

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
};

const Timer = ({countdownTimestampsMs}) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(()=> {
            updateRemainingTime(countdownTimestampsMs);
        },1000);
        return () => clearInterval(intervalId)
    },[countdownTimestampsMs]);

    function updateRemainingTime(countdown) {
       setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown))
    };
  return (
    <div className='countdown-timer'>
        <div className="number-item">
        <span className='two-numbers'>{remainingTime.days}</span>
        <span>DAYS</span>
        </div>
        <div className="number-item">
        <span className='two-numbers'>{remainingTime.hours}</span>
        <span>HRS</span>
        </div>
        <div className="number-item">
        <span className='two-numbers'>{remainingTime.minutes}</span>
        <span>MINS</span>
        </div>
        <div className="number-item">
        <span className='two-numbers'>{remainingTime.seconds}</span>
        <span>SEC</span>
        </div>
    </div>
  )
}

export default Timer