import React, { Component } from 'react'
import sketch1 from '../resources/sketch/sketch1.jpg'
import sketch2 from '../resources/sketch/sketch2.jpg'
import wireframe from '../resources/wireframe/wireframe.PNG'
import color from '../resources/color/color.PNG'
import font from '../resources/font/font.PNG'
import begin from '../resources/design/Begin.png'
import habit from '../resources/design/OptiHabit.png'
import habit1 from '../resources/design/CreateHabit-1.png'
import habit2 from '../resources/design/CreateHabit.png'
import Login from '../resources/design/Log In.png'
import Signup from '../resources/design/Sign Up.png'
import Learn from '../resources/design/OptiLifeStyle.png'
import Sleep from '../resources/design/Sleep.png'
import Community from '../resources/design/OptiCommunity.png'
import Profile from '../resources/design/Posts.png'
import Prototype from '../resources/prototype/prototype.mp4'

const Design=()=> {
    return (
        <div className="a_page page_3" id="design">
            <div  className="text-container">
                <h1>IV. Design </h1>
                <h2>1. Sketch</h2>
                    <p>
                    Based on user flow, we start sketching the design of the app to know how user 
                    will interact with the mobile. 
                    </p>
                    <img src={sketch1} height="" width="75%"/>
                    <br></br>
                    <img src={sketch2} width="75%"/>
                <h2>2. Wireframe</h2>
                    <p>
                    After we finish sketching, we start making wireframe to know what are the
                    necessary components 
                    </p>
                    <img src={wireframe} />
                <h2>3. Color Palette</h2>
                    <p>
                    Before we jump into final design, we have to decide what are the main color themes for our application.We chose Black, Pink and White as the color for our mock-ups design since those colors bring our user a positive healthy vibe.
                    </p>
                    <img src={color}/>
                    
                <h2>4. Font</h2>
                    <p>
                    To match our minimalistic style of our app, we decided to choose Inter - a variable font family carefully crafted and designed for the computer screen. 
                    Inter is considered the most common text font in almost all iOS mobile apps. We will take advantage of it so that users can have a pleasant experience. 
                    </p>
                    <img src={font}/>
                <h2>5. Final Design</h2>
                    <p>
                    With chosen color palette and text font, we are finally able to create our final design. 
                    </p>
                    <h3>5.1 Login/Signup</h3>
                        <img src={begin}/>
                        <img src={Login}/>
                        <img src={Signup}/>
                    <h3>5.2 Social Media</h3>
                        <img src={Community}/>
                    <h3>5.3 Habit Tracking</h3>
                        <img src={habit}/>
                        <img src={habit1}/>
                        <img src={habit2}/>
                    <h3>5.4 Knowledge Resource</h3>
                        <img src={Learn}/>  
                        <img src={Sleep}/>  
                    <h3>5.5 Profile</h3>
                        <img src={Profile}/>
                <h2>6. Demo</h2>
                <p>The video below demonstrates the design of our application</p>
                <video width="750" height="500" controls id="demo">
                    <source src={Prototype} type="video/mp4"/>
                    </video>

            </div>
        </div>
    )
}
export default Design
