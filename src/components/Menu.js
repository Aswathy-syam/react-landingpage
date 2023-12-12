import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Menu() {
  return (
    <section className='menu py-5'>

        <div className=' text-center'>
            <h2>Our menu</h2>
        </div>
        <Container className='mt-5'>
        <Row>
            {/* col1 */}
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/cup-coffee-with-heart-drawn-foam_1286-70.jpg?size=626&ext=jpg&ga=GA1.1.982969043.1694328295&semt=ais" height="200"/>
      <Card.Body>
        <Card.Title  className='fw-bold fs-4'>Expresso</Card.Title>
        <Button variant="primary"className='fw-bold fs-5 mt-3'>Hot</Button>
        <Button variant="primary"className='ms-3 fw-bold fs-5 mt-3'>Cool</Button>
      </Card.Body>
    </Card>
        </Col>

{/* col2 */}

        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/02/16/70/26/240_F_216702641_PT2y5uuGtVRwI800uyHlgUHwsO7mixOy.jpg" height="200"/>
      <Card.Body>
        <Card.Title  className='fw-bold fs-4'>Cappuccino</Card.Title>
        <Button variant="primary"className='fw-bold fs-5 mt-3'>Hot</Button>
        <Button variant="primary"className='ms-3 fw-bold fs-5 mt-3'>Cool</Button>
      </Card.Body>
    </Card>
        </Col>

{/* col3 */}
        <Col>
        <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/coffee-shop-cafe-latte-cappuccino-newspaper-concept_53876-42953.jpg?size=626&ext=jpg&ga=GA1.1.982969043.1694328295&semt=ais" height="200"/>
      <Card.Body>
        <Card.Title  className='fw-bold fs-4'>Latte</Card.Title>
        <Button variant="primary"className='fw-bold fs-5 mt-3' >Hot</Button>
        <Button variant="primary"className='ms-3 fw-bold fs-5 mt-3'>Cool</Button>
      </Card.Body>
    </Card>
        </Col>
      </Row>
        </Container>

        {/*  */}
        <Container className='mt-5'>
        <Row>
            {/* col1 */}
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/front-view-coffee-latte-with-coffee-beans_141793-4603.jpg?size=626&ext=jpg&ga=GA1.1.982969043.1694328295&semt=ais" height="200"/>
      <Card.Body>
        <Card.Title  className='fw-bold fs-4'>Americano</Card.Title>
        <Button variant="primary"className='fw-bold fs-5 mt-3'>Hot</Button>
        <Button variant="primary"className='ms-3 fw-bold fs-5 mt-3'>Cool</Button>
      </Card.Body>
    </Card>
        </Col>

{/* col2 */}

        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/premium-photo/hot-latte-coffee-table-close-up_113629-553.jpg?size=626&ext=jpg&ga=GA1.1.982969043.1694328295&semt=ais" height="200"/>
      <Card.Body>
        <Card.Title className='fw-bold fs-4'>Muccino</Card.Title>
        <Button variant="primary" className='fw-bold fs-5 mt-3'>Hot</Button>
        <Button variant="primary"className='ms-3 fw-bold fs-5 mt-3'>Cool</Button>
      </Card.Body>
    </Card>
        </Col>

{/* col3 */}
        <Col>
        <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/cup-hot-cappuccino-with-froth_140725-9609.jpg?size=626&ext=jpg&ga=GA1.1.982969043.1694328295&semt=ais" height="200"/>
      <Card.Body>
        <Card.Title  className='fw-bold fs-4'>Doppio</Card.Title>
        <Button variant="primary"className='fw-bold fs-5 mt-3' >Hot</Button>
        <Button variant="primary"className='ms-3 fw-bold fs-5 mt-3'>Cool</Button>
      </Card.Body>
    </Card>
        </Col>
      </Row>
        </Container>
    </section>
  )
}

export default Menu