import React from 'react';
import CartItem from './CartItem';

function CartList({cart,value}) {
    console.log("your cart is ",cart)
    return (
        <div className="container-fluid">
            {cart.map((item)=>{
                return <CartItem key={item.id} item={item} value={value}/>
            })}
        </div>

    )
}

export default CartList
