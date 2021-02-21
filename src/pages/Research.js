import React, { Component } from 'react'
import {Carousel,Table } from 'react-bootstrap';
import screenHourImg from '../resources/graphs/screen_hour.PNG'
import covid_impactImg from '../resources/graphs/covid_impact.PNG'
import tooOftenUsedImg from '../resources/graphs/too_often_used.PNG'
import interviewer_ageImg from '../resources/graphs/interviewer_age.PNG'
import interviewer_statusImg from '../resources/graphs/interviewer_status.PNG'
import mostly_used_devicesImg from '../resources/graphs/mostly_used_devices.PNG'
import often_appImg from '../resources/graphs/often_app.PNG'
import reminder_responseImg from '../resources/graphs/reminder_response.PNG'
import rewardImg from '../resources/graphs/reward.PNG'


const Research=()=> {
        return (
            <div className="page_2" id="research">
              <h1>II. Research </h1>
              <div  className="text-container">
                  <h2>1. Survey</h2>
                  <h4>A. Method</h4>
                  <p>
                  In order to collect the information regarding the users’ 
                  screen habit, we have run a survey on Google Form and shared 
                  it on our social network (Facebook) and the class 
                  communicating protocols including Slack and Discord. 
                  After two days running the form, we received 38 answers. 
                  Based on these answers, our hypothesis was confirmed and 
                  the needs of the users were established. 
                  </p>
                  <h4>B. Our analysis</h4>
                  <p>
                  1. Most of the participants were students and workers who must 
                  switch to study and work remotely. Thus, they found Covid-19 
                  has an impact on their screen habit. (Graphs: age, employment 
                  status and covid impact)
                  </p>
                  <p>
                  2. The majority spend from 6 to 10 hours working on their smartphones or laptops for 
                  their school / work per day. An increase by 30-50 hours on screen per week. 
                  (Apps and hours used often)
                  </p>
                  <p>
                  3. Most people regret spending too much time than wanted on social 
                  networks or streaming Apps (such as Youtube). (Apps used too often)
                  </p>
              </div>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-75"
                    src={screenHourImg}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-75"
                    src={covid_impactImg}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-75"
                    src={tooOftenUsedImg}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-75"
                    src={interviewer_ageImg}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-75"
                    src={interviewer_statusImg}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-75"
                    src={mostly_used_devicesImg}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-75"
                    src={often_appImg}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-75"
                    src={reminder_responseImg}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-75"
                    src={rewardImg}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
              <br/>
              <div  className="text-container">
                  <h2>2. Research on related Apps</h2>
                  <Table responsive>
                  <thead>
                    <tr>
                      <th>App's name</th>
                      {Array.from({ length: 12 }).map((_, index) => (
                        <th key={index}></th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      {Array.from({ length: 12 }).map((_, index) => (
                        <td key={index}>Table cell {index}</td>
                      ))}
                    </tr>
                    <tr>
                      <td>2</td>
                      {Array.from({ length: 12 }).map((_, index) => (
                        <td key={index}>Table cell {index}</td>
                      ))}
                    </tr>
                    <tr>
                      <td>3</td>
                      {Array.from({ length: 12 }).map((_, index) => (
                        <td key={index}>Table cell {index}</td>
                      ))}
                    </tr>
                  </tbody>
                </Table>
              </div>
          </div>
        )
}

export default Research
