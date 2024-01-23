import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../data';
import { Container } from '@mui/material';
const ProductDetails = () => {
    const params=useParams();
    const filteredSingleData=data.filter((singleProduct)=>
    {
        return params.id==singleProduct.id
    })
    console.log(filteredSingleData)
  return (
    <div>
      {
        filteredSingleData.map((currect,index)=>
        {
            const {image,title,description,price,category,rating}=currect;
            return <Container maxWidth="md" style={{textAlign:'center'}}>
                <img src={currect.image} width={320} />
                <h1>Title: {title}</h1>
                <h4>Category: {category}</h4>
                <h3>Price {price}</h3>
                <h3>Rate {rating.rate} , Count {rating.count}</h3>
                <p>{description}</p>
            </Container>
        })
      }
    </div>
  )
}

export default ProductDetails
