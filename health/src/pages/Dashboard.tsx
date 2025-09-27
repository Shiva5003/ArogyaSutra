import React, { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { QuestionnaireData } from './Questionnaire';

interface HomeProps {
  userData: QuestionnaireData;
}

const Home: React.FC<HomeProps> = ({ userData }) => {
  const [tab, setTab] = useState<'score' | 'insurance' | 'suggestions'>('score');
  const healthScore = 78; // Example score

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Welcome, {userData.name} 👋</h2>

      {/* Tabs */}
      <ul className="nav nav-tabs mb-4 justify-content-center">
        {['score', 'insurance', 'suggestions'].map((t) => (
          <li className="nav-item" key={t}>
            <button
              className={`nav-link ${tab === t ? 'active' : ''}`}
              onClick={() => setTab(t as any)}
            >
              {t === 'score' ? 'Health Score' : t === 'insurance' ? 'Insurance Plans' : 'Suggestions'}
            </button>
          </li>
        ))}
      </ul>

      {/* Dashboard Content */}
      <div className="card p-4 shadow">
        {tab === 'score' && (
          <div className="text-center">
            <div style={{ width: 150, margin: '0 auto' }}>
              <CircularProgressbar
                value={healthScore}
                text={`${healthScore}/100`}
                styles={buildStyles({
                  textColor: '#4caf50',
                  pathColor: '#4caf50',
                  trailColor: '#d6d6d6',
                })}
              />
            </div>
            <p className="mt-3">Your overall health score based on lifestyle & medical history.</p>
            <div className="row mt-4">
              <div className="col-md-4">
                <div className="card p-2 text-center">BMI: 23.5</div>
              </div>
              <div className="col-md-4">
                <div className="card p-2 text-center">Risk: Low</div>
              </div>
              <div className="col-md-4">
                <div className="card p-2 text-center">Steps: 7500/day</div>
              </div>
            </div>
          </div>
        )}

        {tab === 'insurance' && (
          <div className="row">
            {['Basic Cover', 'Family Health Plus', 'Premium Care'].map((plan) => (
              <div className="col-md-4 mb-3" key={plan}>
                <div className="card p-3 h-100 shadow-sm">
                  <h5>{plan}</h5>
                  <p>Coverage: ₹5,00,000</p>
                  <p>Premium: ₹1,200/month</p>
                  <button className="btn btn-success btn-sm">View Details</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 'suggestions' && (
          <ul className="list-group list-group-flush">
            {[
              'Sleep 7-8 hours daily 🛌',
              'Exercise 30 min daily 🚶‍♂️',
              'Drink 2L water 💧',
              'Eat more vegetables 🥦',
            ].map((tip, idx) => (
              <li className="list-group-item" key={idx}>
                {tip}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Home;
