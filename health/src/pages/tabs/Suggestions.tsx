import React from 'react';

interface HealthSuggestionsProps {
  userData: any;
}

const HealthSuggestions: React.FC<HealthSuggestionsProps> = ({ userData }) => {
  
  return (
    <div>
      <h4>Health Suggestions</h4>
      <ul>
        <li>Sleep 7-8 hours daily (currently {userData?.avg_sleep_hours_SW} hrs)</li>
        <li>Exercise 30 mins daily</li>
        <li>Maintain BMI between 18.5 and 24.9</li>
        <li>Monitor cholesterol and blood pressure</li>
      </ul>
    </div>
  );
};

export default HealthSuggestions;
