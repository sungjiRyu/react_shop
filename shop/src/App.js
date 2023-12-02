import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Container, Nav, NavDropdown}  from 'react-bootstrap';
import bg from './img/bg.png';

function App() {
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

    <div class="container text-center">
  <div class="row align-items-start">
    <div class="col">
      <img src = 'https://codingapple1.github.io/shop/shoes1.jpg' width = "80%"></img>
      <h4>상품명</h4>
      <p>상품설명</p>
    </div>
    <div class="col">
      <img src = 'https://codingapple1.github.io/shop/shoes2.jpg' width = "80%"></img>
      <h4>상품명</h4>
      <p>상품설명</p>
    </div>
    <div class="col">
      <img src = 'https://codingapple1.github.io/shop/shoes3.jpg' width = "80%"></img>
      <h4>상품명</h4>
      <p>상품설명</p>
    </div>
   
  </div>
</div>

    </div>
  );
}



export default App;





