import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css'
const Form = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    university: '',
    htmlCssProficiency: 'Beginner',
    reactProficiency: 'Beginner',
    wordpressProficiency: 'Beginner',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form data if needed

    // Store data in local storage
    localStorage.setItem('formData', JSON.stringify(formData));

    // Reset form fields
    setFormData({
      name: '',
      email: '',
      phone: '',
      university: '',
      htmlCssProficiency: 'Beginner',
      reactProficiency: 'Beginner',
      wordpressProficiency: 'Beginner',
    });

    alert('Form submitted successfully!');
    navigate('/');
  };

  return (
    <div className='form-container'>
      <h2>Form Page</h2>
      <form onSubmit={handleSubmit} className='form'>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          University Name:
          <input
            type="text"
            name="university"
            value={formData.university}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          HTML/CSS Proficiency Level:
          <select
            name="htmlCssProficiency"
            value={formData.htmlCssProficiency}
            onChange={handleChange}
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="I don't know">I don't know</option>
          </select>
        </label>
        <br />
        <label>
          React.js Proficiency Level:
          <select
            name="reactProficiency"
            value={formData.reactProficiency}
            onChange={handleChange}
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="I don't know">I don't know</option>
          </select>
        </label>
        <br />
        <label>
          WordPress Proficiency Level:
          <select
            name="wordpressProficiency"
            value={formData.wordpressProficiency}
            onChange={handleChange}
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="I don't know">I don't know</option>
          </select>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
