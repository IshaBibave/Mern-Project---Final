import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { data } from "../restApi.json";
import LogIn from "../Pages/LogIn";
import SignUp from "../Pages/SignUp";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [isSignUpVisible, setSignUpVisible] = useState(false);
  const [isLogInVisible, setLogInVisible] = useState(false);

  const handleSignUp = async (data) => {
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log('User registered successfully');
        setSignUpVisible(false);
      } else {
        console.error('Error registering user');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleLogIn = async (data) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log('User logged in successfully');
        setLogInVisible(false);
      } else {
        console.error('Error logging in user');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <nav>
      <div className="logo">NOURISH</div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="link">
          {
                data[0].navbarLinks.map(element=>{
                  return(
                    <Link 
                    to={element.link} 
                    key={element.id} 
                    spy={true} 
                    smooth={true} 
                    duration={500} 
                    >
                      {element.title}
                      </Link>
                  );
                })}
        </div>
        {isSignUpVisible && (
        <SignUp onClose={() => setSignUpVisible(false)} onSignUp={handleSignUp} />
      )}
      {isLogInVisible && (
        <LogIn onClose={() => setLogInVisible(false)} onLogIn={handleLogIn} />
      )}
      <div className="buttons">
        <button onClick={() => setSignUpVisible(true)}>Sign Up</button>
        <button onClick={() => setLogInVisible(true)}>Log In</button>
      </div>
        <button className="menuBtn">OUR MENU</button>
      </div>
          <div className="hamburger" onClick={() => setShow(!show)}>
            <GiHamburgerMenu/>
          </div>
    </nav>
  );
};

export default Navbar;