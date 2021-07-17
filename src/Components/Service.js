import React, {useState} from 'react';
import '../App.css';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import {FaShoppingCart} from 'react-icons/fa'; 
import data from './data'


function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <Card>
      <Card.Header><h2>Cart<FaShoppingCart/></h2></Card.Header>
      <div>
        {cartItems.length === 0 && <Card.Body>Cart is empty</Card.Body>}
        {cartItems.map((item) => (
          <Card.Body key={item.id} className="row">
            <Col>{item.name}</Col>
            <Col>
              <Button variant="light" onClick={() => onRemove(item)} className="remove">
                -
              </Button>{' '}
              <Button variant="light" onClick={() => onAdd(item)} className="add">
                +
              </Button>
            </Col>

            <Col>
              {item.qty} x ${item.price.toFixed(2)}
            </Col>
          </Card.Body>
        ))}

        {cartItems.length !== 0 && (
          <>
            <Row>
              <Col>Service Fee</Col>
              <Col>${itemsPrice.toFixed(2)}</Col>
            </Row>
            <Row>
              <Col>Tax </Col>
              <Col>${taxPrice.toFixed(2)}</Col>
            </Row>
            <Card.Footer>
            <Row>
              <Col><strong>Total Price</strong></Col>
              <Col><strong>${totalPrice.toFixed(2)}</strong></Col> 
            </Row>
            
              <Button  variant="secondary" onClick={() => alert('Contact Me To Get Better Quote')}>
                Checkout
              </Button>
         </Card.Footer>
          </>
        )}
      </div>
    </Card>
  );
}

function Main(props) {
  const { products, onAdd } = props;
  return (
      <Row>
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </Row>
  );
}

function Product(props) {
  const { product, onAdd } = props;
  return (
    <Card as={Col} xs={12} md={4}>
      <Card.Header><h3>{product.name}</h3></Card.Header>
      
      <Card.Img className="small" src={product.image} alt={product.name} />
      
      <Card.Footer><p>${product.price}/hour</p><p>{product.description}</p>
        <Button variant="secondary" onClick={() => onAdd(product)}>Add To Cart</Button>
      </Card.Footer>
    </Card>
  );
}

function Service() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <Container className="service">
      <Row>
        <Col xs={12} md={8}>
        <h2>Services</h2>
        <Main products={products} onAdd={onAdd}></Main>
        </Col>
        <Col xs={12} md={4}>
        <h2>Get A Quote</h2>
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
        <p><i>These are just for practicing, not real services price. Please contact me if you need a quote from me!</i></p>
        </Col>
        </Row>
    </Container>
  );
}

export default Service;