import React, { useState } from "react";

function PlantCard({ name, image, price }) {
  const [isInStock, setInStock] = useState(true)
  const handleClicked = () => {
    setInStock(prev => !prev)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button onClick={ handleClicked }className="primary">In Stock</button>
      ) : (
        <button onClick={ handleClicked } className="secondary" >Out of Stock </button>
      )}
    </li>
  );
}

export default PlantCard;
