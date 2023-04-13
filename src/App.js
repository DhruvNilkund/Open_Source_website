import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Checkout from "./Components/Checkout";


import Login from "./Components/Login";
import Home2 from "./Components/mern_internship_frontend/src/pages/Home/Home2"
import SignUp from "./Components/SignUp";
import Home from './Components/Home'
import Student_page from "./Components/student_page";
import { BrowserRouter } from 'react-router-dom';
import AddProduct from "./Components/AddProduct";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";


const promise = loadStripe(
  "pk_test_51KUDBXSE1AGsrDtwyXK8vcHYNkEOofJAP1vV1fRlpZNo93g4o80dZe4IvhAkBXo2ytDciCqqpynwQUXv7plCjezF00G9zyj4sc"
);


function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/student_page" element={<Student_page />} />
          <Route path="/student_OSC" element={<Home2 />} />
          <Route path = "/prime" />
       </Routes>
       </Container>
    </Router>

  );
}


 const Container = styled.div`
  width: 100vw;
 height: 100vh;
overflow-y: scroll;
   &::-webkit-scrollbar {
     display: none;
   }
`;

export default App;