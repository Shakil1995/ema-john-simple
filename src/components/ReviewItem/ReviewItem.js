import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    // console.log(props);
    const {name,quantity,img,key,price}=props.product;
    return (
        <div className="review-item">
            <h5 className="product-name">{name} </h5>
            <img src={img} alt=""/>
            <p>Quantity : {quantity}</p>
            <p> <small>Price : ${price}</small></p>
            <br/>
            <button className="main-button"
              
              onClick={()=>props.handleRemoveProduct(key)}
            > Remove</button>

        </div>
    );
};

export default ReviewItem;