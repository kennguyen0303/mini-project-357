import React, { Component } from 'react'

const Problem_description=()=> {
        return (
            <div className="a_page page_1" id="problem">
            <h1>I. Problem Description</h1>
              <div className="text-container">
                  <p>To advocate a healthy screen habit, 
                    many applications and devices use screen time as 
                    an indicator to analyze the users’ usage. 
                    Once these products detect a prolonged session, 
                    their users often receive a reminder or an advice to take a break. 
                    The problem with this approach is its impact on the users’ habit. 
                    A reminder does not reward the users, it asks them to stop voluntarily. 
                    Hence, many users find it hard to stop themselves in the middle 
                    of attractive activities like games and movies. 
                    Some other users struggle not to touch the phone to check for
                    updates on their Newsfeed or inbox. Thus, rewarding users for taking a break is the key component our product wants to target.
                    <br/><br/><br/>
                    Our reward system focuses on two factors: 
                    physical reward (a currency called H-coins and a level system for the accounts) 
                    and mental reward (a social network with the same healthy goals). 
                    Our users can exchange their H-coin for gifts, gift codes, 
                    or cash. And how to earn H-coins and experience 
                    (to level up their account)? The users will need to win the 
                    challenges our app assigns to them every day including taking 
                    a break from their screens after a long period of usage. 
                    The challenges have three levels (Easy, Medium, and Hard) 
                    and the reward is higher for a harder level. For activities such as 
                    drinking water, it is very hard to verify if the users finish the challenge or 
                    not. Thus, we implement a social network (a clone of Instagram) where
                    the users will upload their videos and ask their network to 
                    verify the activities. With enough verification based on the challenge, 
                    the users will pass the challenge. Every time an account levels up, 
                    the user will have access to more benefits. 
                  </p>
              </div>
            </div>
        )
}

export default Problem_description
