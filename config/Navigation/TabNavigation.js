import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styles from '../../Styles/Styles';
import React from 'react';
import Home from '../../Screens/Home';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Calls from '../../Screens/Calls';
import SingleChat from '../../Screens/SingleChat';
import Groups from '../../Screens/Groups';
import Status from '../../Screens/Status';
import Camera from '../../Screens/Camera';
import UserInfo from '../../Screens/UserInfo';

const Tab = createBottomTabNavigator();

const TabNavigation = ({user}) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
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
        component={Camera}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <>
                {focused ? (
                  <Ionicons name="camera" size={30} color={'#5EBC7B'} />
                ) : (
                  <Ionicons name="camera-outline" size={30} color={'#293040'} />
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
                    color={'#293040'}
                  />
                )}
              </>
            );
          },
          tabBarBadge: 2,
        }}>
        {props => <Home {...props} user={user} />}
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
                    color={'#293040'}
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
                  color={focused ? '#5EBC7B' : '#293040'}
                />
              </>
            );
          },
        }}
      />
      {/* <Tab.Screen
        name=""
        component={}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <>
                {focused ? (
                  
                ) : (
                  
                )}
              </>
            );
          },
        }}
      /> */}
      <Tab.Screen
        name="UserInfo"
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <>
                {focused ? (
                  <MaterialCommunityIcons
                    name="account-circle"
                    size={30}
                    color={'#5EBC7B'}
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="account-circle-outline"
                    size={30}
                    color={'#293040'}
                  />
                )}
              </>
            );
          },
        }}>
        {props => <UserInfo {...props} user={user} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigation;
