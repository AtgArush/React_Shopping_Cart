import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css"
import './App.css';
import {
  Container,
  Row, Col
} from "reactstrap"
import {ToastContainer, toast} from "react-toastify"

import BuyPage from './Components/BuyPage';
import Cart from "./Components/Cart"

function App() {
  
  const [cartItem, setCardItem] = useState([])

  const addInCart = (item) => {

    const isAlreadyAdded = cartItem.findIndex( function(array){
      return array.id === item.id
    } )

    if (isAlreadyAdded === -1) {
    setCardItem([...cartItem, item])
  }
  else{
    toast("already added in cart", {
      type: "error"
    })
    return;
  }
  }

  const buyNow = () => {

    setCardItem([])
    toast("Purchase Complete", { type: "success" })
  }

  const clearNow = () => {

    setCardItem([])
    toast("Cart has been Cleared", { type: "info" })
  }


  const removeItem = item =>{
    setCardItem(cartItem.filter(singleItem => singleItem.id !== item.id))
  }



  return (
    <Container fluid>
      <ToastContainer />
      <Row>
        <Col md="9">
          <BuyPage addInCart={addInCart} />
        </Col>
        <Col md="3">
          <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow} clearNow={clearNow}></Cart>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
