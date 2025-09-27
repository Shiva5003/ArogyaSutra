import React, { useState } from "react";

interface InsurancePlan {
  name: string;
  basePremium: number;
  coverage: string;
  color: string;
}

interface InsurancePlansProps {
  userData: {
    bmi_LAB?: number;
    healthScore?: number;
    riskProfile?: { [key: string]: number };
  };
}

const InsurancePlans: React.FC<InsurancePlansProps> = ({ userData }) => {
  const [selectedPlan, setSelectedPlan] = useState<InsurancePlan | null>(null);

  const plans: InsurancePlan[] = [
    { name: "Basic Health Cover", basePremium: 60, coverage: "Hospitalization", color: "#b42c5c" },
    { name: "Family Health Plus", basePremium: 90, coverage: "Hospitalization + Wellness", color: "#0a1a48" },
    { name: "Critical Illness Cover", basePremium: 120, coverage: "Critical Illness, Hospitalization", color: "#0090da" },
  ];

  const computePremium = (base: number) => {
    const healthScore = userData?.healthScore ?? 50;
    const discount = healthScore > 75 ? 0.1 : healthScore > 50 ? 0.05 : 0;
    return `$${(base * (1 - discount)).toFixed(2)}/mo`;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-8 gap-8">
      <h2 className="text-4xl font-extrabold  mb-6 text-center" style={{color:"#a4ce4e", marginBottom:"20px"}}>
        Select Your Insurance Plan
      </h2>

      {selectedPlan && (
        <h3 className="mb-6  text-xl font-semibold" style={{display:"flex", justifyContent:"center"}}>
          You have selected:   <h3 style={{color:"#a4ce4e", marginLeft:"10px"}}>{selectedPlan.name}</h3>
        </h3>
      )}

      {/* Horizontal row container */}
      <div  style={{display:"flex", flexDirection:"row", gap:"50px", justifyContent:"center"}}>
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between "
            style={{
              backgroundColor: plan.color,
              width: "350px",  
              height: "450px", 
              borderRadius: "25px",
              padding: "30px",
            }}
          >
            <div className="flex flex-col justify-center flex-1 space-y-6 text-white">
              <h3 className="text-3xl font-bold">{plan.name}</h3>
              <p className="text-lg">
                Coverage: <span className="font-semibold">{plan.coverage}</span>
              </p>
              <p className="text-2xl font-bold">
                Premium: <span>{computePremium(plan.basePremium)}</span>
              </p>
            </div>

            <div style={{display:"flex", justifyContent:"center"}}>
            <button
                disabled={!!selectedPlan}
                onClick={() => setSelectedPlan(plan)}
                className={`
                    mt-6 w-full  rounded-full font-semibold text-lg transition-all 
                    flex justify-center items-center
                    ${selectedPlan 
                    ? "bg-gray-600 text-gray-300 cursor-not-allowed shadow-inner" 
                    : "bg-white text-gray-600 hover:bg-gray-100 shadow-md"
                    }
                `}
                style={{width:"200px", borderRadius:"20px", height:"40px",  border:"1px solid gray"}}
                >
                {selectedPlan ? "Selected" : "Choose"}
                </button>
</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsurancePlans;
