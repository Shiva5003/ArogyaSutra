import React from 'react';

interface InsurancePlansProps {
  userData: any;
}

const InsurancePlans: React.FC<InsurancePlansProps> = ({ userData }) => {
  return (
    <div>
      <h4>Insurance Plans</h4>
      <ul>
        <li>Basic Health Cover</li>
        <li>Family Health Plus</li>
        <li>Critical Illness Cover</li>
      </ul>
      <p>Recommended based on your BMI: {userData?.bmi_LAB}</p>
    </div>
  );
};

export default InsurancePlans;
