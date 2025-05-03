import React from 'react';
import { Form } from 'react-bootstrap';

const Preferences = ({ formData, setFormData }) => {

    // Handle change of input fields
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <Form>
    {formData.interestedInSports && (
      <>
        <Form.Group controlId="favoriteSport">
          <Form.Label>Favorite Sport*</Form.Label>
          <Form.Control
            type="text"
            name="favoriteSport"
            value={formData.favoriteSport}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="favoriteSportsperson" className="mt-3">
          <Form.Label>Favorite Sportsperson*</Form.Label>
          <Form.Control
            type="text"
            name="favoriteSportsperson"
            value={formData.favoriteSportsperson}
            onChange={handleChange}
            required
          />
        </Form.Group>
      </>
    )}

    {formData.interestedInMusic && (
      <Form.Group controlId="instrumentPlayed" className="mt-3">
        <Form.Label>Instrument Played*</Form.Label>
        <Form.Control
          type="text"
          name="instrumentPlayed"
          value={formData.instrumentPlayed}
          onChange={handleChange}
          required
        />
      </Form.Group>
    )}
  </Form>
  );
}

export default Preferences