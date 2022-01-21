import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styles from '../../Styles/Styles';
import React from 'react';
import Home from '../../Screens/Home';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import Calls from '../../Screens/Calls';
import SingleChat from '../../Screens/SingleChat';
import Groups from '../../Screens/Groups';
import Status from '../../Screens/Status';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: '#5EBC7B',
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          left: 30,
          right: 30,
          elevation: 0,
          backgroundColor: '#fff',
          borderRadius: 50,
          height: 60,
          paddingBottom: 5,
          ...styles.elevation8,
          backgroundColor: '#effaff',
        },
      }}>
      <Tab.Screen
        name="Camera"
        component={Calls}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <>
                {focused ? (
                  <Ionicons name="camera" size={30} color={'#5EBC7B'} />
                ) : (
                  <Ionicons name="camera-outline" size={30} color={'grey'} />
                )}
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <>
                {focused ? (
                  <Ionicons
                    name="chatbubble-ellipses-sharp"
                    size={28}
                    color={'#5EBC7B'}
                  />
                ) : (
                  <Ionicons
                    name="ios-chatbubble-ellipses-outline"
                    size={28}
                    color={'grey'}
                  />
                )}
              </>
            );
          },
        }}>
        {props => <Home {...props} />}
      </Tab.Screen>

      <Tab.Screen
        name="Groups"
        component={Groups}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <>
                {focused ? (
                  <MaterialCommunityIcons
                    name="account-group"
                    size={31}
                    color={'#5EBC7B'}
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="account-group-outline"
                    size={31}
                    color={'grey'}
                  />
                )}
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name="Status"
        component={Status}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <>
                <MaterialCommunityIcons
                  name="shape-circle-plus"
                  size={25}
                  color={focused ? '#5EBC7B' : 'grey'}
                />
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name="Calls"
        component={Calls}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <>
                {focused ? (
                  <Foundation name="telephone" size={35} color={'#5EBC7B'} />
                ) : (
                  <SimpleLineIcons name="phone" size={25} color={'grey'} />
                )}
              </>
            );
          },
        }}
      />

      {/* <Tab.Screen
        name="Setting"
        component={UserSetting}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <>
                <FontAwesome
                  name="gear"
                  size={30}
                  color={focused ? '#ef3f49' : 'grey'}
                />
              </>
            );
          },
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default TabNavigation;
