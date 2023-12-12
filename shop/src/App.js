import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Container, Nav, NavDropdown}  from 'react-bootstrap';
import bg from './img/bg.png';
import { useState } from 'react';
import './App.css';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Home from './routes/Home.js';
import Detail from './routes/Detail.js';
import axios from 'axios';

function App() {
  //상품데이터(원래는 서버에서 받아와야함)

  let [shoes, setShoes] = useState(data);
  // hook => 유용한 것들이 들어있는 함수
  let navigate = useNavigate();   // 페이지 이동을 도와주는 함수

  return (
    <div className="App"> 
    
     

        <Navbar expand="lg" className="bg-body-tertiary" >
      <Container>
        <Navbar.Brand >ShoeShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="me-auto">
            <Nav.Link onClick={()=>navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={()=>navigate('/detail')}>Detail</Nav.Link>
          </Nav>
      </Container>
    </Navbar>

    <Routes>
        <Route path="/" element={<Home bg={bg} shoes={shoes} setShoes={setShoes} />}/>
        <Route path="/detail" element={ <Detail shoes = {shoes}/> }/>

        {/* url parameter 문법 (:id = 아무거나)  */}
        <Route path="/detail/:id" element={ <Detail shoes = {shoes}/> }/>

        <Route path="*" element = {<div>없는 페이지에요</div>}/>

    
      </Routes>

  </div>
  );
}

function About(){
  return(
    <div>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Event(){
  return(
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}


export default App;





