import React , { useState } from 'react';
import { Form , Row, Col } from 'react-bootstrap';

const Review = ({ formData, setFormData }) => {

    const [isConfirmed, setIsConfirmed] = useState(false);

  
    const handleDeclarationChange = (e) => {
        setFormData(prev => ({
          ...prev,
          declaration: e.target.checked
        }));
      };

      const renderItem = (label, value) => (
        <Row className="mb-2 ">
          <Col xs={4} className="fw-semibold text-start ms-3">
            {label}:
          </Col>
          <Col xs={6} >{value}</Col>
        </Row>
      );

  return (
    <div>
      <h5 className='text-center mb-4'>Review Your Information</h5>
  
{renderItem('Name', formData.name)}
      {renderItem('Email', formData.email)}
      {renderItem('Interested in Sports', formData.interestedInSports ? 'Yes' : 'No')}
      {renderItem('Interested in Music', formData.interestedInMusic ? 'Yes' : 'No')}
      {formData.interestedInSports && renderItem('Favorite Sport', formData.favoriteSport)}
      {formData.interestedInSports && renderItem('Favorite Sportsperson', formData.favoriteSportsperson)}
      {formData.interestedInMusic && renderItem('Instrument Played', formData.instrumentPlayed)}

      <Form.Check
        type="checkbox"
        label="I declare all details are true"
        checked={formData.declaration}
        onChange={handleDeclarationChange}
        className="mt-3"
      />
      
     
    </div>
  );
}

export default Review