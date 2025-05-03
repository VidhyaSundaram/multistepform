import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const Basicinfo = ({ formData, setFormData }) => {

     
      const [touched, setTouched] = useState({
        name: false,
        email: false
      });
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: type === 'checkbox' ? checked : value,
        }));
      };
    
      const handleBlur = (e) => {
        const { name } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
      };
    
      const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);


  return (
    <Form>
    <Form.Group controlId="name">
      <Form.Label>Name*</Form.Label>
      <Form.Control
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        onBlur={handleBlur}
        isInvalid={touched.name && !formData.name.trim()}
        required
      />
      <Form.Control.Feedback type="invalid">
        Name is required.
      </Form.Control.Feedback>
    </Form.Group>

    <Form.Group controlId="email" className="mt-3">
      <Form.Label>Email*</Form.Label>
      <Form.Control
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        onBlur={handleBlur}
        isInvalid={touched.email && !isEmailValid}
        required
      />
      <Form.Control.Feedback type="invalid">
        Please provide a valid email address.
      </Form.Control.Feedback>
    </Form.Group>

    <Form.Check
      type="checkbox"
      name="interestedInSports"
      label="Interested in Sports"
      checked={formData.interestedInSports}
      onChange={handleChange}
      className="mt-3"
    />
    <Form.Check
      type="checkbox"
      name="interestedInMusic"
      label="Interested in Music"
      checked={formData.interestedInMusic}
      onChange={handleChange}
      className="mt-2"
    />
  </Form>
  );
}

export default Basicinfo