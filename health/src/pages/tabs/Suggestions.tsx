import React from 'react';

interface HealthSuggestionsProps {
  userData: any;
}

const HealthSuggestions: React.FC<HealthSuggestionsProps> = ({ userData }) => {
  
  return (
    <div>
      <h4 style={{color:"#a4ce4e"}}>Health Suggestions</h4>
      <ul>
        <li style={{color:"#357bbc"}}>Sleep 7-8 hours daily (currently {userData?.avg_sleep_hours_SW} hrs)</li>
        <li style={{color:"#0090da"}}>Exercise 30 mins daily</li>
        <li style={{color:"#357bbc"}}>Maintain BMI between 18.5 and 24.9</li>
        <li style={{color:"#0090da"}}>Monitor cholesterol and blood pressure</li>
      </ul>
    </div>
  );
};

export default HealthSuggestions;
