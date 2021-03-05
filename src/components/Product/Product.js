import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props);
    const {img,name,seller ,price ,stock,key}=props.product;
    return (
        <div className="product" >
            <div >
              <img src={img} alt="" srcset=""/>
            </div>
            <div>
            <h5 className="product-name" > <Link to={"/product/"+key} >{name} </Link> </h5>
            <br/>
            <p> <small> by : {seller} </small> </p>
            <p>$ {price}</p>
            <p><small>Only {stock} left in stock -Order soon</small></p>

    { props.showAddToCart ===true &&  <button 
    className="main-button"
    onClick={() =>props.handleAddProduct(props.product)}
    > 
    <FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
          }


    </div>
   
            
        </div>
    );
};

export default Product;