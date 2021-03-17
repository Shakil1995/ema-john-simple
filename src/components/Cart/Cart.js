import React from 'react';


const Cart = (props) => {
    const cart=props.cart;
    // console.log(cart);

    // const totalPrice = cart.reduce((total,prd) =>total+prd.price,0);
    // const total= cart.reduce( (total,prd) => total +prd.price,0);

    let total=0;
    for(let i=0;i<cart.length;i++){
        const product=cart[i];
        total=(total+product.price*product.quantity);
        // debugger;
    }

let shipping =0;
if(total>500){
    shipping=0;

}else if(total>100){
shipping=4.99;
}else if(total>0){
    shipping=12.99;
}

const tax= total/10;
const finalPrice=(total + shipping + tax);



const formateNumber= num =>{
    const precision= num.toFixed(2);
    return Number(precision);
}
    return (
        <div>
          <h1>Order Summary</h1>
        <h5>Item Ordered : {cart.length}</h5>
        <p>Product Price : ${formateNumber(total)}</p>
        <p>Shipping Price : ${formateNumber(shipping)}</p>
        <p> <small> Tax+Vat  : ${formateNumber(tax)}</small></p>
        <p>Final Price :${formateNumber(finalPrice)}</p>

    <br/>
    {
        props.children
    }
       
        </div>
    );
};

export default Cart;