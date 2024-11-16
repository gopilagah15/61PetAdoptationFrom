import React from 'react';

const AdoptionReports = ({ pets }) => {
  const totalPets = pets.length;
  const adoptedPets = pets.filter((pet) => pet.isAdopted).length;
  const availablePets = totalPets - adoptedPets;

  return (
    <div>
      <h2>Adoption Reports</h2>
      <p>Total Pets: {totalPets}</p>
      <p>Adopted Pets: {adoptedPets}</p>
      <p>Available Pets: {availablePets}</p>
    </div>
  );
};

export default AdoptionReports;
