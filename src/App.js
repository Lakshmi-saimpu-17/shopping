import React from 'react';
import Cart from './Cart';
import './Cart.css';

const items =   [
    { id: 1, name: 'Brioche Bread', price: 5.5, qty: 2 },
    { id: 2, name: 'Full Fat Milk', price: 4.8, qty: 2 },
    { id: 3, name: 'Organic Eggs', price: 1.00, qty: 2 }   
];


const App = () => {
    return (
        <div>
            <Cart initialItems= { items } />
       </div>
    );
}

export default App;