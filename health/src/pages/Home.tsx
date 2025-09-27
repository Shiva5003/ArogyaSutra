import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import HealthScore from './tabs/HealthScore';
import InsurancePlans from './tabs/InsurancePlans';
import HealthSuggestions from './tabs/Suggestions';

const Home: React.FC = () => {
  const location = useLocation();
  const userData = location.state as any;
  const [tab, setTab] = useState<'score' | 'insurance' | 'suggestions'>('score');

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Welcome, {userData?.name}</h2>
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
        {tab === 'score' && <HealthScore userData={userData} />}
        {tab === 'insurance' && <InsurancePlans userData={userData} />}
        {tab === 'suggestions' && <HealthSuggestions userData={userData} />}
      </div>
    </div>
  );
};

export default Home;
