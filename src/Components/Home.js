import React,{ useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "./NavBar";
import './HeroStyles.css'
import Image from './globe.png'
import axios from "./axios"
import Image4 from "C:/Users/User/Desktop/kodikon/my-app/src/Components/logo1.png"
import Card from "./Card";

import { Link } from "react-router-dom";


function Home() {
  return (
    <div>
    <Navbar /> 
    <div className='hero'>
        
            <img src={Image} type='image' alt="Globe" style={{width:1500,height:710}}/>
            <div className="overlay"></div>
        <div className="content">
            <h1>Welcome to the World of Projects</h1>
            <h2>Creates space to expand knowledge and exposure!</h2>
        </div>
    </div>
    </div>
);
}

export default Home;






