import React, { useState } from 'react';

const AdoptionForm = ({ onSubmitAdoption }) => {
  const [formData, setFormData] = useState({
    applicantName: '',
    petIndex: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.applicantName && formData.petIndex !== '') {
      onSubmitAdoption(formData);
      setFormData({ applicantName: '', petIndex: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Apply for Pet Adoption</h2>
      <input
        type="text"
        name="applicantName"
        placeholder="Your Name"
        value={formData.applicantName}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="petIndex"
        placeholder="Pet ID (index)"
        value={formData.petIndex}
        onChange={handleChange}
        required
      />
      <button type="submit">Apply</button>
    </form>
  );
};

export default AdoptionForm;
