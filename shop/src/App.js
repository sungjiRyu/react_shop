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
        <Route path="/" element={<Home bg={bg} shoes={shoes} />}/>
        <Route path="/detail" element={ <Detail/> }/>

        {/* Nested Routes */}
        <Route path="/about" element={ <About/> }>
          <Route path="member" element={<div>멤버임</div>}/>
          <Route path="location" element={<div>위치정보임</div>}/>
        </Route>


        <Route path="*" element = {<div>없는 페이지에요</div>}/>

        {/* Nested Routes 숙제 */}
        <Route path="/event" element={<Event/>}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>}/>
          <Route path="two" element={<div>생일기념 쿠폰 받기</div>}/>
        </Route>
    
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





