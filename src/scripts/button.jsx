import React from 'react';
import ReactDom from 'react-dom';

const imageUrl = './images/electro370.jpg';
const price = 15;

const product = (
    <div>
        <img src="{imageUrl}" alt="electroepilation" width='370' />
        <h2>Electroepilation</h2>
        <p>Price: {price}$</p>
        <button type='button'>Add to order</button>
    </div>
);

ReactDom.render(product, document.getElementById('root'));