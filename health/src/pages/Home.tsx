import React, { useState } from 'react';
import { QuestionnaireData } from './Questionnaire';

interface HomeProps {
  userData: QuestionnaireData;
}

const Home: React.FC<HomeProps> = ({ userData }) => {
  const [tab, setTab] = useState<'score' | 'insurance' | 'suggestions'>('score');

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Welcome, {userData.name}</h2>
      <ul className="nav nav-tabs mb-3 justify-content-center">
        <li className="nav-item">
          <button
            className={`nav-link ${tab === 'score' ? 'active' : ''}`}
            onClick={() => setTab('score')}
          >
            Health Score
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${tab === 'insurance' ? 'active' : ''}`}
            onClick={() => setTab('insurance')}
          >
            Insurance Plans
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${tab === 'suggestions' ? 'active' : ''}`}
            onClick={() => setTab('suggestions')}
          >
            Health Suggestions
          </button>
        </li>
      </ul>
      <div className="card p-4 shadow">
        {tab === 'score' && <p>Your Health Score: 78/100 ✅</p>}
        {tab === 'insurance' && <p>Suggested Plans: Basic Cover, Family Health Plus...</p>}
        {tab === 'suggestions' && <p>Tip: Sleep 7-8 hrs, Exercise 30 min daily 🚶‍♂️</p>}
      </div>
    </div>
  );
};

export default Home;
