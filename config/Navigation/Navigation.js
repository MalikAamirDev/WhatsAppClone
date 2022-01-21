import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './StackNavigation';

const Navigation = ({currentUser}) => {
  return (
    <>
      <NavigationContainer>
        <StackNavigation currentUser={currentUser} />
      </NavigationContainer>
    </>
  );
};

export default Navigation;
