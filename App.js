import React, {useState} from 'react';
import Navigation from './config/Navigation/Navigation';
import ContextWrapper from './Context/ContextWrapper';
const App = () => {
  return (
    <>
      <ContextWrapper>
        <Navigation />
      </ContextWrapper>
    </>
  );
};

export default App;
