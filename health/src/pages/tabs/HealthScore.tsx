import React from 'react';

interface HealthScoreProps {
  userData: any;
}

const HealthScore: React.FC<HealthScoreProps> = ({ userData }) => {
  // Example: calculate health score from BMI or other fields
  const score = 78; // placeholder
  return (
    <div>
      <h4>Health Score</h4>
      <p>Your Health Score: {score}/100 ✅</p>
      <p>BMI: {userData?.bmi_LAB}</p>
      <p>Avg Daily Steps: {userData?.avg_daily_steps_SW}</p>
      {/* Add more details here */}
    </div>
  );
};

export default HealthScore;
