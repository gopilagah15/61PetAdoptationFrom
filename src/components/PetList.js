import React from 'react';

const PetList = ({ pets, onAdopt }) => {
  return (
    <div>
      <h2>Available Pets for Adoption</h2>
      {pets.length === 0 ? (
        <p>No pets available for adoption at the moment.</p>
      ) : (
        <ul>
          {pets.map((pet, index) => (
            <li key={index}>
              <strong>Name:</strong> {pet.name} <br />
              <strong>Type:</strong> {pet.type} <br />
              <strong>Age:</strong> {pet.age} years <br />
              <strong>Status:</strong> {pet.isAdopted ? 'Adopted' : 'Available'}
              <br />
              {!pet.isAdopted && (
                <button onClick={() => onAdopt(index)}>Apply for Adoption</button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PetList;
