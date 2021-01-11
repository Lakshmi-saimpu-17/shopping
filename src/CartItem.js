import React from 'react';
import './CartItem.css';

function CartItem({ name, price, qty, id ,updateQty }) {
    const addOne = () => {
        updateQty(id,qty + 1);
    }
    const delOne = () => {
        updateQty(id, qty-1);
    }

    return (
        <div className="cart-item">
            <div>  { name } </div>
            <div>  { price } </div>
            <div>  
                <button onClick={ delOne } disabled = {qty <=1 }>- </button>
                { qty } 
                <button onClick={ addOne }>+</button>
            </div>
            <div>  Total: ${qty * price } </div>
        </div>
    )
}


export default CartItem;