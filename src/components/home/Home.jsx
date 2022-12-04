import React from 'react'
import './home.css'
import {Link} from 'react-router-dom';

const Home = ({user}) => {
    return (
        <>
          <div className="home_card">
  <div className="home_content">
    <div className='home_card_options'>
        <h1>Welcome to Fitness Trackr</h1>
        <h2>Stay Consistent, Stay Hungry, and Build the Best Version of You!</h2>
        <h3>If you are a new user, set up your account below</h3>


        <button className='btn'><Link to="/register">Register</Link></button>
        <h3>Already Have An Account?</h3>
        <button className='btn'><Link to="/login">Login</Link></button>
        <h3>Proceed As A Guest.</h3>
        
        <button className='btn'><Link to="/activities">View Activities</Link></button>
        
        </div>
  
  
  </div>
  </div>
        </>
      );
}





export default Home