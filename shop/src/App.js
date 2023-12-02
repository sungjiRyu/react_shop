import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Container, Nav, NavDropdown}  from 'react-bootstrap';
import bg from './img/bg.png';
import { useState } from 'react';
import './App.css';
import data from './data.js';



function App() {
  //상품데이터(원래는 서버에서 받아와야함)

  let [shoes, setShoes] = useState(data);


  return (
    <div className="App">
        <Navbar expand="lg" className="bg-body-tertiary" >
      <Container>
        <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="me-auto">
            <Nav.Link href="#home">menu</Nav.Link>
            <Nav.Link href="#link">cart</Nav.Link>
          </Nav>
      </Container>
    </Navbar>

    <div className="main-bg" style={{backgroundImage : 'url('+bg+')' }}></div>

    {/* 상품목록 */}
    <div className="container text-center">
    <div className="row align-items-start">
           
    {
      shoes.map((a,i)=>{
        return(
          <List shoes = {shoes[i]} i = {i} key = {i}></List>
        )
      })
    }
    
    
    
    </div>
    </div>
  </div>
  );
}

// 상품 목록 컴포넌트
function List(props){
    return (
            <div className="col" >
              <img src={'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg' } width="80%" />
              <h4>{props.shoes.title}</h4>
              <p>{props.shoes.price}</p>
        </div>
    )
  }

export default App;





