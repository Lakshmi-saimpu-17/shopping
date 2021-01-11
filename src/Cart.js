import React, { useState , useEffect } from 'react';
import CartItem from './CartItem';

function Cart ( { initialItems } ) {
    
    const [items, setItems ] = useState(initialItems);

    useEffect( () => {
        window.localStorage.setItem('items', JSON.stringify(items));
    },[items]); // only works when we change items state

    const updateQty = (id, newQty) => {
        const newItems = items.map(item =>{
            if(item.id === id ) {
                return {...item, qty : newQty }
            }
            return item;
        });
        setItems(newItems);
    }

    const total = items.reduce((total, item) => (
        total+ (item.qty * item.price )
    ), 0).toFixed(2)   //fixes two decimal values
    return (
        <div className="Cart" >
            <h1 className="cart-title">Shopping Cart </h1>
            <div className="cart-items">
                 <ul>
                        { items.map( item => (
                        <CartItem key={item.id} updateQty = {updateQty } {...item} />
                         ))}
                 </ul>
            </div>
            <h2>Grand Total = ${ total }</h2>
        </div>
    )
}

export default Cart;