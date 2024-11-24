import React from 'react';

const Merchandise = ({ products }) => {
  return (
    <div className="merchandise">
      <h2>Event Merchandise</h2>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Merchandise;
