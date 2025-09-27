import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface QuestionnaireData {
  [key: string]: string; 
}

const questions: { label: string; name: string; type?: string }[] = [
  { label: "Age", name: "age_HR", type: "number" },
  { label: "Gender", name: "gender_HR", type: "text" },
  { label: "Family History of Diabetes", name: "family_history_diabetes_HR", type: "text" },
  { label: "Family History of CVD", name: "family_history_cvd_HR", type: "text" },
  { label: "Smoking Status", name: "smoking_status_HR", type: "text" },
  { label: "Past Claims Count", name: "past_claims_count_HR", type: "number" },
  { label: "Medication for Blood Pressure", name: "medication_for_bp_HR", type: "text" },
  { label: "Medication for Diabetes", name: "medication_for_diabetes_HR", type: "text" },
  { label: "BMI", name: "bmi_LAB", type: "number" },
  { label: "Systolic BP", name: "systolic_bp_LAB", type: "number" },
  { label: "Diastolic BP", name: "diastolic_bp_LAB", type: "number" },
  { label: "Cholesterol (mg/dL)", name: "cholesterol_mg_dl_LAB", type: "number" },
  { label: "Fasting Glucose (mg/dL)", name: "fasting_glucose_mg_dl_LAB", type: "number" },
  { label: "HbA1c (%)", name: "hba1c_percent_LAB", type: "number" },
  { label: "Average Daily Steps", name: "avg_daily_steps_SW", type: "number" },
  { label: "Weekly Active Minutes", name: "weekly_active_minutes_SW", type: "number" },
  { label: "Average Resting Heart Rate", name: "avg_resting_hr_SW", type: "number" },
  { label: "Average Sleep Hours", name: "avg_sleep_hours_SW", type: "number" },
];

const Questionnaire: React.FC = () => {
  const navigate = useNavigate();
  const initialData: QuestionnaireData = {};
  questions.forEach((q) => (initialData[q.name] = ""));
  const [formData, setFormData] = useState<QuestionnaireData>(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    for (const key in formData) {
      if (!formData[key]) {
        alert("Please fill all fields before submitting!");
        return;
      }
    }

    navigate("/home", { state: formData });
  };

  return (
    <div className="container d-flex justify-content-center mt-5 mb-5">
      <div className="card p-4 shadow w-75">
        <h3 className="card-title text-center mb-3">Health Questionnaire</h3>
        {questions.map((q) => (
          <div key={q.name} className="mb-3">
            <label className="form-label">{q.label}</label>
            <input
              type={q.type || "text"}
              name={q.name}
              value={formData[q.name]}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        ))}
        <button className="btn btn-success w-100 mt-2" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Questionnaire;
