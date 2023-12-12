import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


function Product() {
  return (
    <section className='product'>
        <div className='py-5 text-center'>
            <h2>Products</h2>
        </div>
        <Container>
<Row>
        <Col>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://img.freepik.com/free-photo/tool-used-coffee-press_23-2149878074.jpg?size=626&ext=jpg&ga=GA1.1.982969043.1694328295&semt=ais"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className='fw-bold fs-4'>
            Nespresso
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ipsum minima autem consectetur adipisicing elit dolores voluptatem dicta.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Col>
        {/*  */}
        <Col>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://img.freepik.com/free-photo/close-up-view-dark-fresh-roasted-coffee-beans-coffee-beans-background_141793-27283.jpg?size=626&ext=jpg&ga=GA1.1.982969043.1694328295&semt=sph"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className='fw-bold fs-4'>
            Aeropress
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ipsum minima autem dolores consectetur adipisicing elit voluptatem dicta.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Col>
        {/*  */}
        <Col>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.shutterstock.com/shutterstock/photos/326070713/display_1500/stock-photo-cup-of-coffee-bag-and-scoop-on-old-rusty-background-326070713.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className='fw-bold fs-4 '>
            Chemex
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ipsum minima autem dolores consectetur adipisicing elit voluptatem dicta.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Col>

      </Row>
    </Container>
    </section>
  )
}

export default Product