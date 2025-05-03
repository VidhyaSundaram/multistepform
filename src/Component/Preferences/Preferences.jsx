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
        {/* <Form.Group controlId="favoriteSport">
          <Form.Label>Favorite Sport*</Form.Label>
          <Form.Control
            type="text"
            name="favoriteSport"
            value={formData.favoriteSport}
            onChange={handleChange}
            required
          />
        </Form.Group> */}
         <Form.Group controlId="favoriteSport">
            <Form.Label>Favorite Sport*</Form.Label>
            <Form.Select
              name="favoriteSport"
              value={formData.favoriteSport}
              onChange={handleChange}
              required
            >
              <option value="">-- Select Sport --</option>
              <option value="Cricket">Cricket</option>
              <option value="Football">Football</option>
              <option value="Tennis">Tennis</option>
              <option value="Basketball">Basketball</option>
              <option value="Badminton">Badminton</option>
            </Form.Select>
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
      // <Form.Group controlId="instrumentPlayed" className="mt-3">
      //   <Form.Label>Instrument Played*</Form.Label>
      //   <Form.Control
      //     type="text"
      //     name="instrumentPlayed"
      //     value={formData.instrumentPlayed}
      //     onChange={handleChange}
      //     required
      //   />
      // </Form.Group>

      <Form.Group controlId="instrumentPlayed" className="mt-3">
  <Form.Label>Instrument Played*</Form.Label>
  <Form.Select
    name="instrumentPlayed"
    value={formData.instrumentPlayed}
    onChange={handleChange}
    required
  >
    <option value="">-- Select Instrument --</option>
    <option value="Guitar">Guitar</option>
    <option value="Piano">Piano</option>
    <option value="Violin">Violin</option>
    <option value="Drums">Drums</option>
    <option value="Flute">Flute</option>
  </Form.Select>
</Form.Group>

    )}
  </Form>
  );
}

export default Preferences