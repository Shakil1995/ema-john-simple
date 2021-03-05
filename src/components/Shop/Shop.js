import React, { useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';


const Shop = () => {
    // console.log(fakeData);
    const first10=fakeData.slice(0,10);
 const [products,setProducts]=useState(first10);
 const [cart,setCart]=useState([]);




 const handleAddProduct = (product) =>{
     const newCart = [...cart,product];
     setCart(newCart);
     const sameProduct=newCart.filter(pd=>pd.key==product.key)
     const count=sameProduct.length;
     addToDatabaseCart(product.key,count)

 }
  

    // console.log(first10);
    return (
        <div className="shop-container" >
            {/* <h1>this is Shop</h1>
            <h3>{products.length}</h3> */}

       <div className=" product-container">
                  {
                    
                    products.map(pd => <Product
                    key={pd.key}
                        showAddToCart={true}
                    handleAddProduct={handleAddProduct}
                         product={pd}>

                         </Product>)
                }
        </div>
       <div className="cart-container">
{/* <h1>this is cart</h1>
<h5>Order Summary : {cart.length}</h5> */}
                 <Cart  cart={cart} ></Cart>
       </div>


            
        </div>
    );
};

export default Shop;