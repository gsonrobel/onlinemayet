import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
  <Link to={`/product/${product._id}`}>
    {/* Apply Bootstrap class 'img-fluid' to make the image responsive */}
    <Card.Img src={product.image} variant='top' className='img-fluid' />
  </Link>

  <Card.Body>
    <Link to={`/product/${product._id}`}>
      <Card.Title as='div'>
        <strong>{product.name}</strong>
      </Card.Title>
    </Link>

    <Card.Text as='div'>
      {/* Ensure Rating component is responsive */}
      <Rating
        value={product.rating}
        text={`${product.numReviews} reviews`}
      />
    </Card.Text>

    {/* Use 'h5' instead of 'h3' for the price to maintain consistency */}
    <Card.Text as='h5'>
      ${product.price}
    </Card.Text>
  </Card.Body>
</Card>
  )
}

export default Product
