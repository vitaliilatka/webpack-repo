import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(product, document.getElementById('root'));

const image = React.createElement('img', {
    src: './images/electro370.jpg',
    alt: 'electro',
    width: 370,
});

const title = React.createElement('h2', null, 'Electroepilation');
const price = React.createElement('p', null, '15$');
const button = React.createElement('button', { type: 'button' }, 'Add to order');

const product = React.createElement('div', null, image, title, price, button);

const productWithChildrenInProps = React.createElement('div', {children: [image, title, price, button],
});