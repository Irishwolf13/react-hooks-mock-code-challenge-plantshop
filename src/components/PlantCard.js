import React, { useState } from "react";

function PlantCard({ name, image, price, id, handleDelete}) {
  const [isInStock, setInStock] = useState(true)
  const handleClicked = () => {
    setInStock(prev => !prev)
  }
  const myDelete = () => {
    handleDelete(id)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button onClick={ handleClicked }className="primary">In Stock</button>
      ) : (
        <button onClick={ handleClicked } >Out of Stock </button>
      )}
      <button onClick={ myDelete }className="secondary">Delete</button>
    </li>
  );
}

export default PlantCard;
