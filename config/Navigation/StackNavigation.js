import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Signup from '../../Screens/Signup';
import SignIn from '../../Screens/SignIn';
import Home from '../../Screens/Home';
// import ChatScreen from '../../Screens/ChatScreen';
import Profile from '../../Screens/Profile';
import TabNavigation from './TabNavigation';
import SingleChat from '../../Screens/SingleChat';
import Contacts from '../../Screens/Contacts';
const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Tabs" component={TabNavigation} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Chat" component={SingleChat} />
      <Stack.Screen name="Contacts" component={Contacts} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
