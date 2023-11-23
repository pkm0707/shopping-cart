import './App.css';
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 
import Rating from '@mui/material/Rating';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from '@mui/material/Badge';
import { IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
function App() {
  return (
    <div className="App">
      <Shopingcart/>
    </div>
  );
}
function Shopingcart(){
  const[count,setCount]=useState(0)
  return(
    <div className='main'>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#" style={{fontSize:"25px"}}>Start Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" style={{fontSize:"20px"}}>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <NavDropdown title="Shop" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#all-products">All Products</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#all-products/popular-items">
                  Popular Items
                </NavDropdown.Item>
                <NavDropdown.Item href="#all-products/new-arrivals">New Arrivals</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
            <IconButton>
              <Badge color="secondary" badgeContent={count}>
                <ShoppingCartIcon fontSize='large'/>
              </Badge>
            </IconButton>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='header'>
        <h1 style={{fontSize:"60px",marginBottom:"5px",color:"white"}}>Shop in style</h1>
        <p style={{fontSize:"26px",marginTop:"5px",color:"white",opacity:"0.3"}}>With this shop homepage template</p>
      </div>
      <div>
        <div className='card-flex'>
          <Card style={{ width: '300px',position:"relative"}}>
            <Card.Img variant="top" src="https://m.media-amazon.com/images/I/61ZCngQmGDL._SX342_.jpg"/>
            <Card.Body>
              <Card.Title style={{textAlign:"center",fontSize:"22px"}}><b>Citizen Analog Black</b></Card.Title>
              <Card.Text style={{textAlign:"center"}}>
                <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
              </Card.Text>
              <Card.Text style={{textAlign:"center",fontSize:"20px"}}>
                <s>₹29,900</s> ₹26,900 
              </Card.Text>
              <div className='button-center'>
                <Button variant="primary" onClick={()=>setCount(count+1)}>Add to cart</Button>
                <Button variant="danger" onClick={()=>setCount(count-1)} style={{margin:"0px 0px 0px 5px"}}>Remove from cart</Button>
              </div>
            </Card.Body>
            <Badge color="primary" style={{width:"70px",position:"absolute",marginTop:"10px",marginLeft:"220px",backgroundColor:"black",borderRadius:"8px",color:"white"}}>offer-sale</Badge>
          </Card>
          <Card style={{ width: '300px',position:"relative"}}>
            <Card.Img variant="top" src="https://m.media-amazon.com/images/I/51qSnKMJ6RL._SX300_SY300_QL70_FMwebp_.jpg" />
            <Card.Body>
              <Card.Title style={{textAlign:"center",fontSize:"22px"}}><b>Marshall Stanmore II</b></Card.Title>
              <Card.Text style={{textAlign:"center"}}>
                <Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
              </Card.Text>
              <Card.Text style={{textAlign:"center",fontSize:"20px"}}>
                <s>₹39,999</s> ₹34,999 
              </Card.Text>
              <div className='button-center'>
                <Button variant="primary" onClick={()=>setCount(count+1)}>Add to cart</Button>
                <Button variant="danger" onClick={()=>setCount(count-1)} style={{margin:"0px 0px 0px 5px"}}>Remove from cart</Button>
              </div>
            </Card.Body>
            <Badge color="primary" style={{width:"70px",position:"absolute",marginTop:"10px",marginLeft:"220px",backgroundColor:"black",borderRadius:"8px",color:"white"}}>offer-sale</Badge>
          </Card>
          <Card style={{ width: '300px'}}>
            <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71d7rfSl0wL._SX679_.jpg"/>
            <Card.Body>
              <Card.Title style={{textAlign:"center",fontSize:"22px"}}><b>Apple iPhone 15</b></Card.Title>
              <Card.Text style={{textAlign:"center"}}>
                <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
              </Card.Text>
              <Card.Text style={{textAlign:"center",fontSize:"20px"}}>
                ₹79,900 
              </Card.Text>
              <div className='button-center'>
                <Button variant="primary" onClick={()=>setCount(count+1)}>Add to cart</Button>
                <Button variant="danger" onClick={()=>setCount(count-1)} style={{margin:"0px 0px 0px 5px"}}>Remove from cart</Button>
              </div>
            </Card.Body>
          </Card>
          <Card style={{ width: '300px',position:"relative"}}>
            <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71TPda7cwUL._SX679_.jpg"/>
            <Card.Body>
              <Card.Title style={{textAlign:"center",fontSize:"22px"}}><b>Apple MacBook Air M1C</b></Card.Title>
              <Card.Text style={{textAlign:"center"}}>
                <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
              </Card.Text>
              <Card.Text style={{textAlign:"center",fontSize:"20px"}}>
                <s>₹99,900</s> ₹84,990
              </Card.Text>
              <div className='button-center'>
                <Button variant="primary" onClick={()=>setCount(count+1)}>Add to cart</Button>
                <Button variant="danger" onClick={()=>setCount(count-1)} style={{margin:"0px 0px 0px 5px"}}>Remove from cart</Button>
              </div>
            </Card.Body>
            <Badge color="primary" style={{width:"70px",position:"absolute",marginTop:"10px",marginLeft:"220px",backgroundColor:"black",borderRadius:"8px",color:"white"}}>offer-sale</Badge>
          </Card>
          <Card style={{ width: '300px',position:"relative"}}>
            <Card.Img variant="top" src="https://m.media-amazon.com/images/I/31IhYwtLhPL._SX300_SY300_QL70_FMwebp_.jpg"/>
            <Card.Body>
              <Card.Title style={{textAlign:"center",fontSize:"22px"}}><b>Apple Watch SE 2nd-G</b></Card.Title>
              <Card.Text style={{textAlign:"center"}}>
                <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
              </Card.Text>
              <Card.Text style={{textAlign:"center",fontSize:"20px"}}>
                <s>₹32,900</s> ₹29,400 
              </Card.Text>
              <div className='button-center'>
                <Button variant="primary" onClick={()=>setCount(count+1)}>Add to cart</Button>
                <Button variant="danger" onClick={()=>setCount(count-1)} style={{margin:"0px 0px 0px 5px"}}>Remove from cart</Button>
              </div>
            </Card.Body>
            <Badge color="primary" style={{width:"70px",position:"absolute",marginTop:"10px",marginLeft:"220px",backgroundColor:"black",borderRadius:"8px",color:"white"}}>offer-sale</Badge>
          </Card>
          <Card style={{ width: '300px',position:"relative"}}>
            <Card.Img variant="top" src="https://m.media-amazon.com/images/I/41du-jmuX1L._SX300_SY300_QL70_FMwebp_.jpg"/>
            <Card.Body>
              <Card.Title style={{textAlign:"center",fontSize:"22px"}}><b>Zebronics NBC 5S</b></Card.Title>
              <Card.Text style={{textAlign:"center"}}>
                <Rating name="half-rating-read" defaultValue={3} precision={0.5} readOnly />
              </Card.Text>
              <Card.Text style={{textAlign:"center",fontSize:"20px"}}>
                <s>₹81,999</s> ₹54,990 
              </Card.Text>
              <div className='button-center'>
                <Button variant="primary" onClick={()=>setCount(count+1)}>Add to cart</Button>
                <Button variant="danger" onClick={()=>setCount(count-1)} style={{margin:"0px 0px 0px 5px"}}>Remove from cart</Button>
              </div>
            </Card.Body>
            <Badge color="primary" style={{width:"70px",position:"absolute",marginTop:"10px",marginLeft:"220px",backgroundColor:"black",borderRadius:"8px",color:"white"}}>offer-sale</Badge>
          </Card>
          <Card style={{ width: '300px'}}>
            <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71nH3-koucL._SX679_.jpg"/>
            <Card.Body>
              <Card.Title style={{textAlign:"center",fontSize:"22px"}}><b>Disel Analog Black Dial</b></Card.Title>
              <Card.Text style={{textAlign:"center"}}>
                <Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
              </Card.Text>
              <Card.Text style={{textAlign:"center",fontSize:"20px"}}>
                ₹33,995
              </Card.Text>
              <div className='button-center'>
                <Button variant="primary" onClick={()=>setCount(count+1)}>Add to cart</Button>
                <Button variant="danger" onClick={()=>setCount(count-1)} style={{margin:"0px 0px 0px 5px"}}>Remove from cart</Button>
              </div>
            </Card.Body>
          </Card>
          <Card style={{ width: '300px',position:"relative"}}>
            <Card.Img variant="top" src="https://m.media-amazon.com/images/I/61e183Wpy2L._SX342_.jpg"/>
            <Card.Body>
              <Card.Title style={{textAlign:"center",fontSize:"22px"}}><b>GUESS Phoenix</b></Card.Title>
              <Card.Text style={{textAlign:"center"}}>
                <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
              </Card.Text>
              <Card.Text style={{textAlign:"center",fontSize:"20px"}}>
                <s>₹14,999</s> ₹10,999 
              </Card.Text>
              <div className='button-center'>
                <Button variant="primary" onClick={()=>setCount(count+1)}>Add to cart</Button>
                <Button variant="danger" onClick={()=>setCount(count-1)} style={{margin:"0px 0px 0px 5px"}}>Remove from cart</Button>
              </div>
            </Card.Body>
            <Badge color="primary" style={{width:"70px",position:"absolute",marginTop:"10px",marginLeft:"220px",backgroundColor:"black",borderRadius:"8px",color:"white"}}>offer-sale</Badge>
          </Card>
        </div>
      </div>
      <div className='footer'>
        <p style={{fontSize:"20px",color:"white"}}>Copyright © Your Website 2023</p>
      </div>
    </div>
  );
}
export default App;
