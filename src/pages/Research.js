import React, { Component } from 'react'
import {Carousel,Table, Button } from 'react-bootstrap';
import screenHourImg from '../resources/graphs/screen_hour.PNG'
import covid_impactImg from '../resources/graphs/covid_impact.PNG'
import tooOftenUsedImg from '../resources/graphs/too_often_used.PNG'
import interviewer_ageImg from '../resources/graphs/interviewer_age.PNG'
import interviewer_statusImg from '../resources/graphs/interviewer_status.PNG'
import mostly_used_devicesImg from '../resources/graphs/mostly_used_devices.PNG'
import often_appImg from '../resources/graphs/often_app.PNG'
import reminder_responseImg from '../resources/graphs/reminder_response.PNG'
import rewardImg from '../resources/graphs/reward.PNG'
import grandma from '../resources/persona/grandma_personna.PNG'
import john_doe from '../resources/persona/john_doe_personna.PNG'
import son_tung from '../resources/persona/son_tung_personna.PNG'
import user_flow from '../resources/user_flow.PNG'
import user_journey from '../resources/user_journey.PNG'


const Research=()=> {
        return (
            <div className="page_2" id="research">
              <div className="d-flex">
              <h1 className="pr-3">II. Research </h1>
              <a href="/resources/user_journey.PNG" download>
              <Button>Get the survey result</Button>
              </a>
              </div>
              <div  className="text-container">
                  <h2>1. Survey</h2>
                  <h4 className="p-3">A. Method</h4>
                  <p>
                  In order to collect the information regarding the users’ 
                  screen habit, we have run a survey on Google Form and shared 
                  it on our social network (Facebook) and the class 
                  communicating protocols including Slack and Discord. 
                  After two days running the form, we received 38 answers. 
                  Based on these answers, our hypothesis was confirmed and 
                  the needs of the users were established. 
                  </p>
                  <h4 className="p-3">B. Our analysis</h4>
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
              <Carousel className="carousel_1">
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
                      <th>Idea</th>
                      <th>Things to learn</th>
                      <th>Things to improve</th>
                    </tr>
                  </thead>
                  <tbody>
                      <tr>
                        <td>Fabulous</td>
                        <td>An app helps the users build good habits by applying science result on psychology</td>
                        <td>
                          <ol>
                            <li>Reward users for their achievement</li>
                            <li>A network of users who is also doing the challenge</li>
                          </ol>
                        </td>
                        <td>
                          <ol>
                            <li>Real reward since Fabulous only offers 50% discount on the membership.</li>
                            <li>No free version</li>
                          </ol>
                        </td>
                      </tr>
                      <tr>
                        <td>Facebook</td>
                        <td>Social network for keeping contact</td>
                        <td>
                        People like to get update from their friends
                        </td>
                        <td>
                        If information is not oriented and become too diverse, users will be addictive
                        </td>
                      </tr>
                  </tbody>
                </Table>
                <h2>3. Design decision</h2>
                <p>
                To encourage people to use the app, we will need a social network. 
                But, its content must only be related to health (such as LinkedIn only targets Jobs and Professionalism).
                Thus, we can limit the problem with newsfeed addiction. 
                </p>
                <p>
                To motivate people to maintain their good habits, we will reward them with some real deals such as gift cards or cash.
                Also, the users will be rewarded more based on their effort in practicing.
                </p>
                <h2>4. Our solution</h2>
                <p>
                Our reward system focuses on two factors: physical reward 
                (a currency called H-coins and a level system for the accounts) and mental reward 
                (a social network with the same healthy goals). When the users pass a challenge, 
                they will be rewarded with H-coin and XP. H-coin can be exchanged for gifts, gift codes, or cash. 
                XP can be accumulated to level up an account, the higher level will grant access to more benefits. 
                </p>
                <p>
                As a super app, our app will extend to many industries and services to make it 
                a vital everyday app for the users. By giving challenges, desirable rewards, and 
                an encouraging network, we hope our super app will bring not only a healthier 
                screen habit but also better well-being. 
                </p>
              </div>
              <h2 id="analysis">III. Analysis</h2>
              <div  className="text-container">
                    <p>
                    Armed with the information provided by the research phase, 
                  we were then able to move on to the analysis phase of this design process. 
                  This phase will help us understand why the users would need to use a personal data marketplace.
                    </p>
                  <h2>User Personas</h2>
                  <p>Based on the result from our survey, we made 3 archetypes of users: <strong>the nerd</strong> (young people with decent
                    technology skills), <strong>the workaholic</strong> (middle age people who works mostly on their computer)
                    and <strong>the tech-novice</strong> (the users with very limited tech skills ) </p> 
                  <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={grandma}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={son_tung}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-125"
                    src={john_doe}
                    alt="First slide"
                  />
                </Carousel.Item>
                </Carousel>
                <br></br>
                  <h2>User's Journey</h2>
                  <p>We chose <strong>Son Beach</strong> to create a user journey since he represents for 60% our participants </p> 
                  <img
                    className=""
                    src={user_flow}
                    alt="Son Beach's user flow"
                  />
                  <br/><br/>
                   <h2>User's Flowchart</h2>
                  <p>An idea of how our product will work</p> 
                  <img
                    className=""
                    src={user_journey}
                    alt="Son Beach's user flow"
                  />
                </div>
                
          </div>
        )
}

export default Research
