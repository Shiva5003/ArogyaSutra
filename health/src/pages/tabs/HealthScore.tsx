import React from 'react';

interface HealthScoreProps {
  userData: any;
}

const HealthScore: React.FC<HealthScoreProps> = ({ userData }) => {
  const score = 78; 
  return (
    <div>
      <h4>Health Score</h4>
      <p>Your Health Score: {score}/100 </p>
      <p>BMI: {userData?.bmi_LAB}</p>
      <p>Avg Daily Steps: {userData?.avg_daily_steps_SW}</p>
    </div>
  );
};

export default HealthScore;
