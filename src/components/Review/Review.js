import React, { useEffect, useState } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';

const Review = () => {
   const {cart,setCart}=useState([]);
    useEffect(()=>{
        // cart data
        const saveCart=getDatabaseCart();
        const productKeys=Object.keys(saveCart);
     const count=   productKeys.map(key => saveCart[key]);
        console.log(count);
    })
    return (
        <div>
            <h1>this is review</h1>
        </div>
    );
};

export default Review;