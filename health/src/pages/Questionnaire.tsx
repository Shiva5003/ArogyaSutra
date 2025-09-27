import React, { useState } from 'react';

export interface QuestionnaireData {
  name: string;
  gender: string;
  height: string;
  weight: string;
  smoking: string;
  alcohol: string;
  sleep: string;
  exercise: string;
  diet: string;
  history: string;
}

interface QuestionnaireProps {
  onComplete: (data: QuestionnaireData) => void;
}

const Questionnaire: React.FC<QuestionnaireProps> = ({ onComplete }) => {
  const [formData, setFormData] = useState<QuestionnaireData>({
    name: '',
    gender: '',
    height: '',
    weight: '',
    smoking: '',
    alcohol: '',
    sleep: '',
    exercise: '',
    diet: '',
    history: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="card p-4 shadow w-75">
        <h3 className="card-title text-center mb-3">Health Questionnaire</h3>
        {Object.keys(formData).map((key) => (
          <input
            key={key}
            type="text"
            name={key}
            placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
            className="form-control mb-2"
            value={(formData as any)[key]}
            onChange={handleChange}
          />
        ))}
        <button
          className="btn btn-success w-100 mt-2"
          onClick={() => onComplete(formData)}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Questionnaire;
