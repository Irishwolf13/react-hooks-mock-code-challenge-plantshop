import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ rawData, searchInput }) {
  const filteredData = rawData.filter(plant => plant.name.toLowerCase().includes(searchInput.toLowerCase()))
  const displayData = filteredData.map(plant => (
    <PlantCard
      key={plant.id}
      name={plant.name}
      image={plant.image}
      price={plant.price}
    />
  ))
  
  return (
    <ul className="cards">{displayData}</ul>
  );
}

export default PlantList;
