import React from 'react';
import styled from "styled-components"
import {useNavigate} from "react-router-dom";
import './student_page.css'

function Student_page() {
    const navigate= useNavigate();
    function handleClick() {
      window.location.href = 'http://localhost:3003/';
    }
    function handleClick2(){
      window.location.href='http://localhost:3005/'
    }

  return(
    <Body >
      <h1 class="lo">Student's Site</h1>
      
      <div class="cla">
        
      <button class="adddiv" onClick={handleClick2}>View Professor's Account</button>
      <button class="adddiv" onClick={handleClick}>View Open source Contributions</button>
      </div>
       
    </Body>
  );
}

const Body=styled.div`{position:absolute;top:80px;left:45px;right:45px;
        border:2px solid ;
        border-radius: 5px;
        max-width: 960px; /* Sets the maximum width of the container */
        margin: 0 auto; /* Centers the container horizontally */
        padding: 20px; /* Adds some padding to the container */
        background-color: #87f3ea; /* Sets the background color of the container */
}`;


styled.button`{
    margin: 0 10px;
}`; 
export default Student_page;
