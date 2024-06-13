import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS file
import {AiOutlineMenu} from 'react-icons/ai'

const Navto = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglenav = () => {
    setIsOpen(isOpen => !isOpen);
  };

  return (

    <div className='head'>

    <div className="logo">logo</div>       

    <ul className={`headLinks ${isOpen ? 'open' : ''}`}>
    <li><a href='/home'>Home</a></li>
    <li><a href='/test2'>About Us</a></li>
    <li><a href='/test3'>Other Projects</a></li>
    <li><button>Enquire Now</button></li>
    
    </ul>
    <button onClick={togglenav} className="navbtn"><AiOutlineMenu size={20}/></button>
    </div>
  );
};

export default Navto;
