import React , { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const Review = ({ formData, setFormData }) => {

    const [isConfirmed, setIsConfirmed] = useState(false);

  
    const handleDeclarationChange = (e) => {
        setFormData(prev => ({
          ...prev,
          declaration: e.target.checked
        }));
      };

  return (
    <div>
      <h5 className='text-center'>Review Your Information</h5>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Interested in Sports:</strong> {formData.interestedInSports ? 'Yes' : 'No'}</p>
      <p><strong>Interested in Music:</strong> {formData.interestedInMusic ? 'Yes' : 'No'}</p>
      {formData.interestedInSports && <p><strong>Favorite Sport:</strong> {formData.favoriteSport}</p>}
      {formData.interestedInMusic && <p><strong>Instrument Played:</strong> {formData.instrumentPlayed}</p>}

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