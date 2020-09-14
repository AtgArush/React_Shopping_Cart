import React, {useState, useEffect} from "react"
import Axios from "axios"

import {random} from "faker"
import {Container, Col, Row} from "reactstrap"
import CartItem from "./CardItem"


const localurl = "https://jsonware.com/json/e021b2ab46b5499b6e0dbb25e2ff468d.json"
// const localurl = "https://jsonware.com/json/7f26bf2c0233a09ad8426b4e6ad9ccbd.json"

const BuyPage = ({addInCart}) => {

    const [product, setProduct] = useState([])

    //  const fetchPhotos = async () => {
    //      const {data} = await Axios.get(url, {
    //          header: {
    //              Authorization: apiKey
    //          }
    //      })
    // // }

    const fetchPhotos = async () => {
        const {data} = await Axios.get(localurl)
    

    const {photos} = data;

    
    
    
    const allProducts = photos.map(photo => (
        {
            smallImage: photo.src.medium,
            tinyImage: photo.src.tiny,
            productName: photo.company,
            secondName: photo.name,
            productPrice: photo.price,
            adder: photo.priceInt,
            id: random.uuid()
        }
    ))
    
        setProduct (allProducts)

}
    
    useEffect ( () => {
        fetchPhotos();
    }, [] )

    return (
        <Container>
            <h1 className = "text-success text-center">
                Buy page
            </h1>

            <Row>
        {product.map(product => (
            <Col md={4} key = {product.id}>
                <CartItem product={product} addInCart={addInCart} />
            </Col>
        ))}
      </Row>

        </Container>
    )



}

export default BuyPage
