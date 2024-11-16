import React, { useState, useEffect } from 'react';
import PetList from './components/PetList';
import AdoptionForm from './components/AdoptionForm';
import AdoptionReports from './components/AdoptionReports';

const App = () => {
  const [pets, setPets] = useState([
    { name: 'Buddy', type: 'Dog', age: 3, isAdopted: false },
    { name: 'Whiskers', type: 'Cat', age: 2, isAdopted: false },
    { name: 'Chirpy', type: 'Bird', age: 1, isAdopted: false },
  ]);

  // Load pets from LocalStorage
  useEffect(() => {
    const savedPets = JSON.parse(localStorage.getItem('pets')) || [];
    if (savedPets.length > 0) {
      setPets(savedPets);
    }
  }, []);

  // Save pets to LocalStorage whenever they change
  useEffect(() => {
    localStorage.setItem('pets', JSON.stringify(pets));
  }, [pets]);

  const handleAdoptPet = (index) => {
    const updatedPets = [...pets];
    updatedPets[index].isAdopted = true;
    setPets(updatedPets);
  };

  const handleSubmitAdoption = ({ applicantName, petIndex }) => {
    const index = parseInt(petIndex, 10);
    if (index >= 0 && index < pets.length && !pets[index].isAdopted) {
      alert(`Adoption application submitted by ${applicantName} for ${pets[index].name}`);
      handleAdoptPet(index);
    } else {
      alert('Invalid Pet ID or Pet already adopted');
    }
  };

  return (
    <div>
      <h1>Pet Adoption Platform</h1>
      <PetList pets={pets} onAdopt={handleAdoptPet} />
      <AdoptionForm onSubmitAdoption={handleSubmitAdoption} />
      <AdoptionReports pets={pets} />
    </div>
  );
};

export default App;
