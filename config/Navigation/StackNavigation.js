import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState, useEffect} from 'react';
import Signup from '../../Screens/Signup';
import SignIn from '../../Screens/SignIn';
import Home from '../../Screens/Home';
import Profile from '../../Screens/Profile';
import TabNavigation from './TabNavigation';
import SingleChat from '../../Screens/SingleChat';
import Contacts from '../../Screens/Contacts';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import UserDetails from '../../Screens/UserDetails';

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  const [user, setUser] = useState('');

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(userExist => {
      if (userExist) {
        setUser(userExist);
        firestore().collection('Users').doc(userExist.uid).update({
          status: 'online',
        });
      } else setUser('');
    });

    return () => {
      subscriber();
    };
  }, []);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {user ? (
        <>
          <Stack.Screen name="Tabs">
            {props => <TabNavigation {...props} user={user} />}
          </Stack.Screen>
          <Stack.Screen name="Chat">
            {props => <SingleChat {...props} user={user} />}
          </Stack.Screen>
          <Stack.Screen name="Contacts" component={Contacts} />
          <Stack.Screen name="UserDetails" component={UserDetails} />
        </>
      ) : (
        <>
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="SignIn" component={SignIn} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigation;
