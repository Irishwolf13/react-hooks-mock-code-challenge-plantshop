import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [rawData, setRawData] = useState([])
  const [searchInput, setSearchInput] = useState("")

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(response => response.json())
    .then(returnData => setRawData(returnData))
  },[])

  const addToBackEnd = (newPlant) => {
    fetch('http://localhost:6001/plants', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newPlant)
    })
    .then(res => res.json())
    .then(returnData => setRawData([...rawData, returnData]))
  }
  const handleSearchInput = (e) => {
    setSearchInput(e.target.value)
  }
  
  return (
    <main>
      <NewPlantForm addToBackEnd={addToBackEnd} />
      <Search handleSearchInput={handleSearchInput} searchInput={searchInput}/>
      <PlantList rawData={ rawData } searchInput={searchInput}/>
    </main>
  );
}

export default PlantPage;
