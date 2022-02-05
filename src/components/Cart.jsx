import { Button, Card, Container } from 'react-bootstrap'
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa'
const Cart = () => {
  return (
    <Container className='my-4'>
      <h2>Your Bag</h2>
      <Card className='flex-row my-4'>
        <Card.Img
          style={{ width: '10rem' }}
          variant='top'
          src='https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/427917001/item/goods_56_427917001.jpg?width=1008&impolicy=quality_75'
        />
        <Card.Body>
          <Card.Title>ID: 195525222</Card.Title>
          <Card.Text>PRICE: $ 3.99</Card.Text>
          <Button variant='danger'>Remove from cart</Button>
        </Card.Body>
        <Card.Body>
          <Card.Title>
            <FaPlusCircle /> 2 <FaMinusCircle />
          </Card.Title>
        </Card.Body>
      </Card>
      <Card className='flex-row'>
        <Card.Img
          style={{ width: '10rem' }}
          variant='top'
          src='https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/427917001/item/goods_56_427917001.jpg?width=1008&impolicy=quality_75'
        />
        <Card.Body>
          <Card.Title>ID: 195525222</Card.Title>
          <Card.Text>PRICE: $ 3.99</Card.Text>
          <Button variant='danger'>Remove from cart</Button>
        </Card.Body>
        <Card.Body>
          <Card.Title>
            <FaPlusCircle /> 2 <FaMinusCircle />
          </Card.Title>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Cart
