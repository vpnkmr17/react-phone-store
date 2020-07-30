import React from 'react';
import Title from '../Title'

function CartColumn() {
    return (
        <div>
             <Title name="Your" title="Cart" />
             <div className="container-fluid text-center d-none d-lg-block">
             
             <div className="row">
                 <div className="col-10 mx-auto col-lg-2 ">
                     <p className="text-uppercase">Product</p>
                 </div>
                 <div className="col-10 mx-auto col-lg-2">
                     <p className="text-uppercase">Name of Product</p>
                 </div>
                 <div className="col-10 mx-auto col-lg-2">
                     <p className="text-uppercase">Price</p>
                 </div>
                 <div className="col-10 mx-auto col-lg-2">
                     <p className="text-uppercase">Quantity</p>
                 </div>
                 <div className="col-10 mx-auto col-lg-2">
                     <p className="text-uppercase">Remove</p>
                 </div>
                 <div className="col-10 mx-auto col-lg-2">
                     <p className="text-uppercase">Total</p>
                 </div>
             </div>
        </div>
        </div>
    )
}

export default CartColumn
