import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StatusBar,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../Styles/Styles';
import auth from '@react-native-firebase/auth';
import GlobalContext from '../Context/Context';
import ContactsFloatingIcon from '../Components/ContactsFloatingIcon';
import firestore from '@react-native-firebase/firestore';
import moment from 'moment';

const Home = ({navigation, user}) => {
  const {rooms, setRooms} = useContext(GlobalContext);
  const [users, setUsers] = useState(null);
  // console.log(user);
  const getUsers = async () => {
    const querySnap = await firestore()
      .collection('Users')
      .where('uid', '!=', user.uid)
      .get();
    const allUsers = querySnap.docs.map(docSnap => docSnap.data());
    setUsers(allUsers);
  };
  useEffect(() => {
    getUsers();
  }, []);
  const signOut = () => {
    let date = moment().utcOffset('+05: 00').format('hh:mm a - DD/MM/Y');
    firestore()
      .collection('Users')
      .doc(user.uid)
      .update({
        status: date,
      })
      .then(() => {
        auth().signOut();
      });
  };
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#effaff" />
      <View style={[styles.mainContainer]}>
        <View style={[styles.Header]}>
          <View
            style={[
              styles.my20,
              styles.mx10,
              styles.flexDirectionRow,
              styles.justifyContentSpaceBetween,
            ]}>
            <Text
              style={[styles.fs24, styles.fontWeightBold, {color: '#5EBC7B'}]}>
              WhatsApp
            </Text>
            <View style={[styles.flexDirectionRow]}>
              <TouchableOpacity
                style={[styles.mr10, styles.iconBg, styles.elevation5]}>
                <Ionicons name="ios-moon-sharp" size={18} color="#293040" />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.mr10, styles.iconBg, styles.elevation5]}>
                <Feather name="search" size={18} color="#293040" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={signOut}
                style={[styles.iconBg, styles.elevation5]}>
                <AntDesign name="logout" size={16} color="#293040" />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <FlatList
              horizontal={true}
              // keyExtractor={item => item.id}
              data={dummyData}
              renderItem={({item, index}) => (
                <TouchableOpacity key={index} style={[styles.ml10]}>
                  <Image style={[styles.statusImg]} source={item.image} />
                  <Text style={[styles.black, styles.ml10]}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
        <View style={[styles.Container, styles.elevation5]}>
          <View
            style={[
              styles.p20,
              styles.flexDirectionRow,
              styles.justifyContentSpaceBetween,
            ]}>
            <View>
              <Text style={[styles.fs30, styles.fontWeightBold, styles.black]}>
                Messages
              </Text>
              <Text>You have two new messages</Text>
            </View>
            <TouchableOpacity style={[styles.pt10]}>
              <Feather name="archive" size={20} color="#293040" />
            </TouchableOpacity>
          </View>
          <View>
            <FlatList
              keyExtractor={item => item.uid}
              data={users}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Chat', {
                      name: item.Name,
                      img: item.img,
                      uid: item.uid,
                      status: item.status,
                      // typeof item.status == 'string'
                      //   ? item.status
                      //   : item.status.toDate().toString(),
                    })
                  }
                  style={styles.readMessages}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('UserDetails', {
                        name: item.Name,
                        email: item.Email,
                        img: item.img,
                        status: item.status,
                      })
                    }>
                    <Image
                      style={[styles.profileImg, styles.mr10]}
                      source={{uri: item.img}}
                    />
                  </TouchableOpacity>
                  <View
                    style={[
                      styles.flexGrow1,
                      styles.justifyContentSpaceBetween,
                      styles.flexDirectionRow,
                    ]}>
                    <View>
                      <Text style={[styles.black, styles.fs20]}>
                        {item.Name}
                      </Text>
                      <Text style={item.newMessages && styles.lightBlack}>
                        {item.Email}
                      </Text>
                    </View>
                    {/* <View>
                      <Text>{item.status}</Text>
                    </View> */}
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
          <ContactsFloatingIcon />
        </View>
      </View>
    </>
  );
};

export default Home;

const dummyData = [
  {
    id: 1,
    name: 'Aamir',
    image: require('../assets/profileImage/1.jpg'),
  },
  {
    id: 2,
    name: 'Rashid',
    image: require('../assets/profileImage/2.jpg'),
  },
  {
    id: 3,
    name: 'Asif',
    image: require('../assets/profileImage/3.jpg'),
  },
  {
    id: 4,
    name: 'Arif',
    image: require('../assets/profileImage/4.jpg'),
  },
  {
    id: 5,
    name: 'Ibrahim',
    image: require('../assets/profileImage/5.jpg'),
  },
  {
    id: 6,
    name: 'Shehzad',
    image: require('../assets/profileImage/3.jpg'),
  },
];
const dummyMessage = [
  {
    id: 1,
    name: 'Aamir',
    image: require('../assets/profileImage/1.jpg'),
    message: 'Im great, how about you',
    time: '6:10 pm',
    unread: false,
    online: true,
    lastLogin: 'last seen today at 10:12 am',
  },
  {
    id: 2,
    name: 'Rashid',
    image: require('../assets/profileImage/2.jpg'),
    message: 'Hey, buddy whats going on',
    time: '3:09 pm',
    unread: true,
    newMessages: true,
    messages: 9,
    online: false,
    lastLogin: 'last seen today at 11:20 am',
  },
  {
    id: 3,
    name: 'Asif',
    image: require('../assets/profileImage/3.jpg'),
    message: 'Asalam o Alaikum',
    time: '2:43 pm',
    unread: true,
    newMessages: true,
    messages: 3,
    online: false,
    lastLogin: 'last seen today at 11:45 am',
  },
  {
    id: 4,
    name: 'Arif',
    image: require('../assets/profileImage/4.jpg'),
    message: 'Hey, buddy whats going on',
    time: '2:32 pm',
    unread: false,
    online: true,
    lastLogin: '10 am',
  },
  {
    id: 5,
    name: 'Ibrahim',
    image: require('../assets/profileImage/5.jpg'),
    message: 'what are you doing?',
    time: '11:00 pm',
    unread: false,
    online: false,
    lastLogin: '2 pm',
  },
  {
    id: 6,
    name: 'Shehzad',
    image: require('../assets/profileImage/3.jpg'),
    message: 'is every thing alright',
    time: '12:00 pm',
    unread: false,
    online: true,
    lastLogin: '10 am',
  },
  {
    id: 7,
    name: 'Shehzad',
    image: require('../assets/profileImage/2.jpg'),
    message: 'is every thing alright',
    time: '11:30 pm',
    unread: false,
    online: true,
    lastLogin: '10 am',
  },
];
