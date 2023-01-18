import React, { useState } from "react";

function NewPlantForm({ passUpInformation: addToBackEnd }) {
  const [formName, setFormName] = useState("")
  const [formImage, setFormImage] = useState("")
  const [formPrice, setFormPrice] = useState("")

  const handleName = (e) => {
    setFormName(e.target.value)
  }
  const handleImage = (e) => {
    setFormImage(e.target.value)
  }
  const handlePrice = (e) => {
    setFormPrice(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const newPlant = {
      name: formName,
      image: formImage,
      price: formPrice
    }
    addToBackEnd(newPlant)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input 
          type="text" 
          name="name" 
          placeholder="Plant name" 
          value={formName}
          onChange={handleName}
          />
        <input 
          type="text" 
          name="image" 
          placeholder="Image URL" 
          value={formImage}
          onChange={handleImage}
          />
        <input 
          type="number" 
          name="price" 
          step="0.01" 
          placeholder="Price" 
          value={formPrice}
          onChange={handlePrice}
          />
        <button onClick={handleSubmit} type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
