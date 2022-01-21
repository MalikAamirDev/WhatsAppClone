import React, {useState} from 'react';
import Navigation from './config/Navigation/Navigation';
import ContextWrapper from './Context/ContextWrapper';
const App = () => {
  const [currentUser, setCurrentUser] = useState(false);

  return (
    <>
      <ContextWrapper>
        <Navigation currentUser={currentUser} />
      </ContextWrapper>
    </>
  );
};

export default App;
