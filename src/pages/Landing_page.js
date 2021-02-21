import React, { Component } from 'react'
import Begin from '../resources/design/Begin.png'


const Landing_page=()=> {
        return (
            <div className="d-flex a_page landing mx-auto" id="home">
                <div className="logo">
                    <img src={Begin}/>
                </div>
                <div className="team-name">
                    <h1>OptiScreen</h1>
                    <h2>Super app for better wellbeing</h2>
                    <h2>case study</h2>
                    <br/>
                    <h5>by</h5>
                    <p>1. The Kien Nguyen -- 40055738
                    <br/>
                    2. Tung Leu -- 40025151
                    </p>
                </div>
          </div>
        )
}

export default Landing_page
