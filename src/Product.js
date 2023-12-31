import React from 'react'
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product({id, title, image, price, rating}) {

  const [ {cart}, dispatch] = useStateValue();
  
  // Add to cart method when button is clicked
  const addToCart = () => {

    // dispatch the item into data layer
    dispatch({
      type: 'ADD_TO_CART',
      item: {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating
            },
        });
  }

  return (
    <div className='product'>
        <div className='product_info'>
            <p>{title}</p>
            <p className='product_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product_rating'>
                {Array(rating).fill().map(() => (<p>⭐</p>))}
            </div>
        </div>
        <img src = {image} alt=''/>
        <button onClick={addToCart}> Add to Cart </button>
    </div>
  );
}

export default Product
