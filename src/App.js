
import './App.css';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card, ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Basicinfo from './Component/BasicInfo/Basicinfo';
import Preferences from './Component/Preferences/Preferences';
import Review from './Component/Review/Review';

function App() {

  const initialFormState = {
    name: '',
    email: '',
    interestedInSports: false,
    interestedInMusic: false,
    favoriteSport: '',
    favoriteSportsperson: '',
    instrumentPlayed: '',
    declaration: false
  };

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);

  // Load form data from localStorage 
  useEffect(() => {
    const saved = localStorage.getItem('multiStepForm');
    if (saved) setFormData(JSON.parse(saved));
  }, []);


  // Save form data to localStorage on change
  useEffect(() => {
    localStorage.setItem('multiStepForm', JSON.stringify(formData));
  }, [formData]);



  const handleNext = () => {
    if (step < 3) setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    console.log(formData);
    localStorage.removeItem('multiStepForm');

    // Reset form and go back to Step 1 after short delay
    setTimeout(() => {
      setFormData(initialFormState);
      setStep(1);
      setSubmitted(false);
    }, 2000);

  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Basicinfo formData={formData} setFormData={setFormData} />;
      case 2:
        return <Preferences formData={formData} setFormData={setFormData} />;
      case 3:
        return <Review formData={formData} setFormData={setFormData} />;
      default:
        return null;
    }
  };

  const validateStep = () => {
    if (step === 1) return formData.name.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    if (step === 2) {
      if (formData.interestedInSports && (!formData.favoriteSport.trim() || !formData.favoriteSportsperson.trim())) return false;
      if (formData.interestedInMusic && !formData.instrumentPlayed.trim()) return false;
      return true;
    }
    if (step === 3) return formData.declaration;
    return true;
  };

  return (
    <div className="App">
      <Container className="mt-4">
        <h1 className="text-center mb-4">Multi-Step Form wizard</h1>
        <Card>
          <Card.Body>

           
{/* --------------------Progress bar---------------------------- */}

<div className="step-progress mb-4 d-flex">
  {['Basic Info', 'Preferences', 'Review'].map((label, index) => {
    const stepNumber = index + 1;
    const isActive = step === stepNumber;
    const isCompleted = step > stepNumber;
    const variant = isCompleted ? 'success' : isActive ? 'primary' : 'outline-secondary';

    return (
      <div key={index} className={`step-arrow ${variant} flex-fill text-center`}>
        {stepNumber}. {label}
      </div>
    );
  })}
</div>

{renderStep()}
{/* --------------------------------------------------------------------------- */}
            <Row className="mt-4">
              <Col>
                {step > 1 && <Button variant="secondary" onClick={handleBack}>Back</Button>}
              </Col>
              <Col className="text-end">
                {step < 3 ? (
                  <Button onClick={handleNext} disabled={!validateStep()}>
                    Next
                  </Button>
                ) : (
                  <Button onClick={handleSubmit} disabled={!validateStep()}>
                    Submit
                  </Button>
                )}
              </Col>
              {submitted && (
                <Row className="mt-3">
                  <Col>
                    <p className="text-success">✅ Form submitted successfully!</p>
                  </Col>
                </Row>
              )}
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default App;
