import React, { useEffect, useState } from "react";

interface HealthScoreProps {
  userData: any;
}

const HealthScore: React.FC<HealthScoreProps> = ({ userData }) => {
  const backendScore = 78; 
  const [score, setScore] = useState(0); 

  const radius = 70;
  const circumference = 2 * Math.PI * radius;

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setScore(backendScore);
    }, 300);
    return () => clearTimeout(timer);
  }, [backendScore]);

  const progress = (score / 100) * circumference;

  
  let gradientId = "gradRed";
  if (score > 25 && score <= 50) gradientId = "gradOrange";
  else if (score > 50 && score <= 75) gradientId = "gradYellow";
  else if (score > 75) gradientId = "gradGreen";

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h3 style={{ marginBottom: "15px", color:"#357bbc" }}>
        Health Score
      </h3>
      <svg width="180" height="180">
        
        <defs>
          <linearGradient id="gradRed" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff4d4d" />
            <stop offset="100%" stopColor="#cc0000" />
          </linearGradient>
          <linearGradient id="gradOrange" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffb84d" />
            <stop offset="100%" stopColor="#ff6600" />
          </linearGradient>
          <linearGradient id="gradYellow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fff94d" />
            <stop offset="100%" stopColor="#ffcc00" />
          </linearGradient>
          <linearGradient id="gradGreen" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a8e063" />
            <stop offset="100%" stopColor="#56ab2f" />
          </linearGradient>
        </defs>

        
        <circle
          cx="90"
          cy="90"
          r={radius}
          stroke="#eee"
          strokeWidth="14"
          fill="none"
        />

        
        <circle
          cx="90"
          cy="90"
          r={radius}
          stroke={`url(#${gradientId})`}
          strokeWidth="14"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
          transform="rotate(-90 90 90)"
          style={{ transition: "stroke-dashoffset 1.5s ease" }}
        />

        
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="22"
          fontWeight="bold"
          fill="#333"
        >
          {score}
        </text>
      </svg>

      
      <p style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>
        BMI: {userData?.bmi_LAB}
      </p>
      <p style={{ fontSize: "14px", color: "#555" }}>
        Avg Daily Steps: {userData?.avg_daily_steps_SW}
      </p>
    </div>
  );
};

export default HealthScore;
