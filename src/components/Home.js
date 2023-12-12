import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Home() {
  return (
    <section className='home'>
         <Container>
      <Row>
        <Col>
        <div className='mt-5 py-5'>
        <h1>Start your day with</h1>
        <h1>a cup of happiness</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br></br> ad maiores, consequatur omnis earum perspiciatis itaque <br></br>ipsam quas blanditiis sequi.</p>
        <button className='btn'>Add to card</button>
        <button className='btn ms-3'>More menu</button>
        </div>
        </Col>
        <Col>
         
        <img src="https://img.freepik.com/premium-photo/hot-latte-art-coffee-relax-time_41969-7063.jpg" alt="" className='img-fluid mt-5 py-5'/>
        </Col>
       
      </Row>
      </Container>
    </section>
   
  )
}

export default Home