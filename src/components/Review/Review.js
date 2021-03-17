import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart,processOrder,removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyImg from '../../images/giphy.gif';
import { useHistory } from 'react-router';

const Review = () => {
  const [cart,setCart]=useState([]);
  const [orderPlaced,setOderPlaced]=useState(false);

  const history=useHistory();

  const handleProceedCheckOut=() =>{
    // // console.log('order korte parben');
    // setCart([]);
    // setOderPlaced(true);
    // processOrder();
    history.push('/shipment')
  }

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
},[]);


let thankYou;
if(orderPlaced){
  thankYou =<img src={happyImg} alt=""/>

}
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

                   { thankYou}
          </div>

          <div className="cart-container">
   <Cart  cart={cart} >
     <button onClick={handleProceedCheckOut}  className="main-button">Proceed Checkout</button>
   </Cart>
          </div>
         

        </div>
    );
};

export default Review;