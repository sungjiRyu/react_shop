import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Container, Nav, NavDropdown}  from 'react-bootstrap';
import bg from './img/bg.png';
import { useState } from 'react';
import './App.css';
import data from './data.js';
import { Routes, Route, Link } from 'react-router-dom';
import main from './components/main.js';
import detail from './components/detail.js';

function App() {
  //상품데이터(원래는 서버에서 받아와야함)

  let [shoes, setShoes] = useState(data);


  return (
    <div className="App"> 
    
     

        <Navbar expand="lg" className="bg-body-tertiary" >
      <Container>
        <Navbar.Brand><Link to="/" className='link'>ShoeShop</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="me-auto">
            <Nav.Link href="#home">menu</Nav.Link>
            <Nav.Link href="#link">cart</Nav.Link>
            <Nav.Link><Link to="/detail" className='link'>상세페이지</Link></Nav.Link>
          </Nav>
      </Container>
    </Navbar>

    {/* 라우터로 페이지 나누는 법 */}
    <Routes>
        <Route path="/" element={<main bg={bg} shoes={shoes} />}/>
        <Route path="/detail" element={<detail></detail>}/>
        <Route/>
      </Routes>

    
  </div>
  );
}



export default App;





