import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart,removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
  const [cart,setCart]=useState([]);

  const  handleRemoveProduct=(productKey)=>{
    //   console.log('remove Clicked',productKey);
      const newCart=cart.filter(pd => pd.key!==productKey);
      setCart(newCart);
    removeFromDatabaseCart(productKey)
  }
useState(()=>{
    const saveCart =getDatabaseCart();
    const productKeys=Object.keys(saveCart);

   const cartProducts= productKeys.map(key => {
   const product =fakeData.find(pd =>pd.key ===key);
   product.quantity=saveCart[key];
   return product;
   });
//    console.log(cartProducts);
   setCart(cartProducts);
})
    return (
        <div className ="twin-container">
          
          <div className="product-container">
          <h1>Cart Item : {cart.length} </h1>
            {/* <ReviewItem></ReviewItem> */}
            {
                cart.map(pd => <ReviewItem
                    key={pd.key}
                    handleRemoveProduct={handleRemoveProduct}
                     product={pd}></ReviewItem>)
            }
          </div>

          <div className="cart-container">
   <Cart  cart={cart} ></Cart>
          </div>
           
        </div>
    );
};

export default Review;