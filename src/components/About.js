import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function About() {
  return (
    <section className='about'>
       <div className='py-5 text-center'>
        <h2>About us</h2>
       </div>
       <Container>
      <Row>
        <Col>
        <div className='mt-2 py-2'>
            <h3 className='fs-1 fw-bold'>Steaming cup of coffee</h3>
            <p className='fs-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita itaque consequatur autem harum, ducimus, aut eveniet perferendis aliquid quidem libero est deleniti quis. Nobis, dignissimos sint repudiandae nam est quas.</p>
        </div>
        </Col>

        {/*  */}
        <Col>
        <img className='image-fluid' src="https://img.freepik.com/free-photo/close-up-hands-barista-make-latte-coffee-art-paint_1150-12161.jpg?size=626&ext=jpg&ga=GA1.1.982969043.1694328295&semt=ais" alt="" width="400" />
        </Col>
      </Row>
     </Container>
    </section>
  )
}

export default About