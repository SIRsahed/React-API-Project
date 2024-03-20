import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

function App() {

  let [product, setProduct] = useState([])
  const products = () => {
    axios.get("https://dummyjson.com/products").then((response) => {
      setProduct(response.data.products);
    })
  }

  useEffect(() => {
    products()
  }, [])


  console.log(product);

  return (
    <>
      <Container>
        <Row>
              {product.map((item) => (
          <Col lg={4}>
            <div className="products">
                <div className="products_data">
                  <h2>{item.title}</h2>
                  <img src={item.thumbnail} alt="" className="w-100" />
                  <h5>{item.description}</h5>
                  <h6>${item.price} <button>Add to Cart</button> <button>Order Now</button></h6>
                </div>
            </div>
          </Col>
              ))}
        </Row>
      </Container>
    </>
  )
}

export default App
