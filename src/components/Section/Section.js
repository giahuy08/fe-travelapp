import React from 'react'
import { Button } from '../Button/Button';
import './Section.css';

function Section() {
    return (
        <div className='hero-container'>
        <img src='images/bg.jpg' className="hero-bg" alt="img"/>
        <h1>Khám phá du lịch</h1>
        <p>Bạn đang chờ đợi điều gì?</p>
        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            BẮT ĐẦU
          </Button>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
          >
            XEM TRAILER <i className='far fa-play-circle' />
          </Button>
        </div>
      </div>
    )
}

export default Section
