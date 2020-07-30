import React, { Component } from 'react'
import CartColumn from './CartColumn';
import {ProductConsumer} from '../../context';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotals from './CartTotals';

export default class Cart extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    console.log("value is ",value)
                    const {cart}=value
                    if(cart.length>0){
                        return(
                            <React.Fragment>
                                <CartColumn />
                                <CartList cart={cart} value={value}/>
                                <CartTotals value={value} />
                            </React.Fragment>
                        )
                    }
                    else{
                        return(
                            <React.Fragment>
                                <EmptyCart />
                            </React.Fragment>
                        )
                    }
                }}
            </ProductConsumer>

        )
            }
        }
