import React, { useState } from "react";
import {useRef} from "react";
import {FaBars,FaTimes} from 'react-icons/fa'
import "./App.css"; 
import Flexi from './flexi1'
import Login from './Login';
function Restaurant() {
    const navRef = useRef();
    const [showLogin, setShowLogin]=useState(false);

    const showNavbar =() =>{
      navRef.current.toggle("responsive_nav");
    }
    const toggleLogin = () =>{
      setShowLogin(!showLogin);
      document.body.style.overflow = showLogin ? 'auto' : 'hidden';
    }
  return (
    <div>
        <header style={{position:'sticky', backgroundColor: 'crimson', top: '0',padding:'10px',zIndex:'2'}}>
           
          <nav >
          <h1>Riverside Dining</h1>
          <a href="#Home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#About">About</a>
          <a href="#About">Contact</a>
          <a href="#" onClick={toggleLogin}>Login</a>
          <button className="nav-btn nav-close" onClick={showNavbar}>
            <FaTimes/>
          </button>
        </nav>
  
        </header>
        {showLogin && <Login onClose={toggleLogin} />}
      <section className="banner">
        <div className="banner-text">
          <h2 className="glow">Welcome to <span>Riverside Dining</span></h2>
          <p className="glow">Delicious food at your fingertips!</p>
          <a href="#" className="button">
            Order Now
          </a>
        </div>
      </section>
      <Flexi />
      <section className="about" id="About">
        <div className="about-about">
        <h2>About Us</h2>
        <p>
          We are a food restaurant committed to serving delicious meals made
          from the finest ingredients. Our team of expert chefs creates
          mouthwatering dishes that will leave you wanting more. Whether you're
          craving a juicy burger, a cheesy pizza, or a plate of sushi, we've got
          you covered.
        </p>
        </div>
        <br /><br />
        <div className="location"><br /><br />
        <div className="about-location">
        <h3 >Location</h3>
          <p>Chennai <br />Bengalore <br />Mumbai <br />Kerala <br />Miami <br /> London</p>
        </div>
          <div className="about-Services">
          <h3 >Services</h3>
          <p>Services Overview <br />Wifi <br />Rd Delivery <br />Rewards</p>
          </div>
          <div className="about-contact">
          <h3 >Contact</h3>
          <p>Phone : 9384451432<br />Email:naveencse54@gmail.com <br />Address:Abe street,XYZ<br /></p>
          </div>
        </div>
      </section>

    <div className="footer">
    <p>&copy; 2023 Riverside Dining. All rights reserved.</p>
    
    </div>

    </div>
  );
}

export default Restaurant;
