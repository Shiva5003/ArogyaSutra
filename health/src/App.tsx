import React, { useState } from 'react';
import Login from './pages/Login';
import Questionnaire, { QuestionnaireData } from './pages/Questionnaire';
import Home from './pages/Home';

const App: React.FC = () => {
  const [page, setPage] = useState<'login' | 'questionnaire' | 'home'>('login');
  const [userData, setUserData] = useState<QuestionnaireData | null>(null);

  return (
    <>
      {page === 'login' && <Login onLogin={() => setPage('questionnaire')} />}
      {page === 'questionnaire' && (
        <Questionnaire
          onComplete={(data) => {
            setUserData(data);
            setPage('home');
          }}
        />
      )}
      {page === 'home' && userData && <Home userData={userData} />}
    </>
  );
};

export default App;
