import React, { useState, useEffect, useRef } from 'react';
import './home.css';
import Navbar from '../Navbar';
import { gsap } from 'gsap';
import Axios from 'axios';

const Countdown = () => {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const countdownRef = useRef(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    Axios.get(`http://localhost:3000/user/readregis`)
      .then(response => {
        const startDate = new Date(response.data.results[0].startdate);
        const endDate = new Date(response.data.results[0].enddate);
  
        startDate.setDate(startDate.getDate() + 1);
        endDate.setDate(endDate.getDate() + 1);
  
        const currentDate = new Date();
        const diffMilliseconds = startDate.getTime() - currentDate.getTime();
        const totalSeconds = Math.floor(diffMilliseconds / 1000);
  
        setStartDate(startDate.toISOString().split('T')[0]);
        setEndDate(endDate.toISOString().split('T')[0]);
  
        // Set totalSeconds
        setTotalSeconds(totalSeconds);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (totalSeconds > 0) {
        const updatedTotalSeconds = totalSeconds - 1;
        const updatedHours = Math.floor(updatedTotalSeconds / 3600);
        const updatedMinutes = Math.floor((updatedTotalSeconds % 3600) / 60);
        const updatedSeconds = updatedTotalSeconds % 60;

        setHours(updatedHours);
        setMinutes(updatedMinutes);
        setSeconds(updatedSeconds);
        setTotalSeconds(updatedTotalSeconds);
      } else {
        clearInterval(countdownInterval);
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [totalSeconds]);

  useEffect(() => {
    const regisData = JSON.parse(localStorage.getItem('regis'));
    const { date } = regisData;
    const regisDate = new Date(date);
    const currentDate = new Date();
    const diffInSeconds = Math.floor((regisDate - currentDate) / 1000);
    console.log(currentDate)
    setTotalSeconds(diffInSeconds);
  }, []);

  const animateFigure = ($el, value) => {
    if (!$el) return;

    const $top = $el.querySelector('.top');
    const $bottom = $el.querySelector('.bottom');
    const $backTop = $el.querySelector('.top-back');
    const $backBottom = $el.querySelector('.bottom-back');

    if (parseInt(value) % 2 === 0) {
      $top.classList.add('limiter');
      $bottom.classList.add('limiter');
    } else {
      $top.classList.remove('limiter');
      $bottom.classList.remove('limiter');
    }
    
    $backTop.querySelector('span').innerHTML = value;
    $backBottom.querySelector('span').innerHTML = value;

    gsap.to($top, {
      duration: 0.01,
      rotationY: -180,
      transformPerspective: 300,
      ease: "power4.out",
      onComplete: () => {
        $top.innerHTML = value;
        $bottom.innerHTML = value;
        gsap.set($top, { rotationX: 0 });
      }
    });

    gsap.to($backTop, {
      duration: 0.8,
      rotationX: 0,
      transformPerspective: 300,
      ease: "power4.out",
      onComplete: () => {
        gsap.set($backTop, { clearProps: 'all' });
      }
    });
  };

  useEffect(() => {
    const $el = countdownRef.current;
    if (!$el) return;

    animateFigure($el.querySelector('.figure.hours-1'), Math.floor(hours / 10));
    animateFigure($el.querySelector('.figure.hours-2'), hours % 10);
    animateFigure($el.querySelector('.figure.min-1'), Math.floor(minutes / 10));
    animateFigure($el.querySelector('.figure.min-2'), minutes % 10);
    animateFigure($el.querySelector('.figure.sec-1'), Math.floor(seconds / 10));
    animateFigure($el.querySelector('.figure.sec-2'), seconds % 10);

  }, [hours, minutes, seconds]);

  return (
    <div>
      <Navbar/>
      <div className="wrap">
        <h1>Draft <strong>Countdown</strong></h1>
        <div className="countdown" ref={countdownRef}>
          <div className="bloc-time hours">
            <span className="count-title">Hours</span>
            <div className="figure hours hours-1">
              <span className="top">0</span>
              <span className="top-back">
                <span>0</span>
              </span>
              <span className="bottom">0</span>
              <span className="bottom-back">
                <span>0</span>
              </span>
            </div>
            <div className="figure hours hours-2">
              <span className="top">0</span>
              <span className="top-back">
                <span>0</span>
              </span>
              <span className="bottom">0</span>
              <span className="bottom-back">
                <span>0</span>
              </span>
            </div>
          </div>
          <div className="bloc-time min">
            <span className="count-title">Minutes</span>
            <div className="figure min min-1">
              <span className="top">0</span>
              <span className="top-back">
                <span>0</span>
              </span>
              <span className="bottom">0</span>
              <span className="bottom-back">
                <span>0</span>
              </span>
            </div>
            <div className="figure min min-2">
              <span className="top">0</span>
              <span className="top-back">
                <span>0</span>
              </span>
              <span className="bottom">0</span>
              <span className="bottom-back">
                <span>0</span>
              </span>
            </div>
          </div>
          <div className="bloc-time sec">
            <span className="count-title">Seconds</span>
            <div className="figure sec sec-1">
              <span className="top">0</span>
              <span className="top-back">
                <span>0</span>
              </span>
              <span className="bottom">0</span>
              <span className="bottom-back">
                <span>0</span>
              </span>
            </div>
            <div className="figure sec sec-2">
              <span className="top">0</span>
              <span className="top-back">
                <span>0</span>
              </span>
              <span className="bottom">0</span>
              <span className="bottom-back">
                <span>0</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;