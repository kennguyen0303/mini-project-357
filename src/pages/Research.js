import React, { Component } from 'react'
import {Carousel } from 'react-bootstrap';
import screenHourImg from '../resources/graphs/screen_hour.PNG'
import covid_impactImg from '../resources/graphs/covid_impact.PNG'
import tooOftenUsedImg from '../resources/graphs/too_often_used.PNG'


const Research=()=> {
        return (
            <div className="a_page page_2" id="research">
            <h1>II. Research </h1>
            <div  className="text-container">
                <h2>1. Survey</h2>
                <p>
                  We have surveyed <strong>38</strong> people and found that Covid-19 has affected their lives.
                  Our participants are mostly university students and workers who must switch to
                  work or study remotely. 
                </p>
            </div>
            <Carousel pause="hover" className="carousel">
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-75"
                  src={screenHourImg}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>HELLO so as you can see this one very bad</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  className="d-block w-75"
                  src={covid_impactImg}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-75"
                  src={tooOftenUsedImg}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        )
}

export default Research
