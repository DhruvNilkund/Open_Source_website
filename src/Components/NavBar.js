
import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import {useNavigate} from "react-router-dom";
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-scroll'

import './NavbarStyles.css'

function Navbar() {
    const [nav, setNav] = useState(false)
    const navigate=useNavigate()
    const handleNav = () => setNav(!nav)
    function handleClick(){
            navigate("/login");
    }
    return (
        <div name='home' className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <div className={nav ? 'logo dark' : 'logo'} >
                <h2 align="center">PROJECT_Tech-Titans</h2> 
                <div style={{difplay:"flex"}}>
                <button class="button1" type='button' onClick={handleClick} >Login</button>
                </div>
            </div>

            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : (<AiOutlineClose style={{ color: '#000' }} className='icon' />)}

            </div>

        </div>
    )
}

export default Navbar
