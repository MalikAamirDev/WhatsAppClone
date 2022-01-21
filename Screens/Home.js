import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import styles from '../Styles/Styles';
import auth from '@react-native-firebase/auth';
import GlobalContext from '../Context/Context';
import ContactsFloatingIcon from '../Components/ContactsFloatingIcon';
// const authForDefaultApp = firebase.auth();

const Home = ({navigation}) => {
  const {currentUser} = auth();
  // console.log(currentUser.isAnonymous);
  const {rooms, setRooms} = useContext(GlobalContext);
  // const { rooms, setRooms } = useContext(GlobalContext);
  // const ChatsQuery =
  return (
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
            <TouchableOpacity style={[styles.iconBg, styles.elevation5]}>
              <SimpleLineIcons name="options" size={18} color="#293040" />
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
            // styles.py20,
            // styles.px10,
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
            // horizontal={true}
            // keyExtractor={item => item.id}
            data={dummyMessage}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Chat')}
                key={index}
                style={styles.readMessages}>
                {/* <View style={[styles.flexDirectionRow]}> */}
                <Image
                  style={[styles.profileImg, styles.mr10]}
                  source={item.image}
                />
                <View
                  style={[
                    styles.flexGrow1,
                    styles.justifyContentSpaceBetween,
                    styles.flexDirectionRow,
                  ]}>
                  <View>
                    <Text style={[styles.black, styles.fs20]}>{item.name}</Text>
                    <Text style={item.newMessages && styles.lightBlack}>
                      {item.message}
                    </Text>
                  </View>
                  <View>
                    <Text>{item.time}</Text>
                    {item.newMessages && (
                      <View style={styles.newMessages}>
                        <Text style={[styles.fs10, styles.white]}>
                          {item.messages}
                        </Text>
                      </View>
                    )}
                  </View>
                </View>
                {/* </View> */}
              </TouchableOpacity>
            )}
          />
        </View>
        <ContactsFloatingIcon />
      </View>
      {/* <View style={[styles.p20, styles.bgcoralLite]}>
        <Text>Bottom</Text>
      </View> */}
    </View>
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
  },
  {
    id: 4,
    name: 'Arif',
    image: require('../assets/profileImage/4.jpg'),
    message: 'Hey, buddy whats going on',
    time: '2:32 pm',
    unread: false,
  },
  {
    id: 5,
    name: 'Ibrahim',
    image: require('../assets/profileImage/5.jpg'),
    message: 'what are you doing?',
    time: '11:00 pm',
    unread: false,
  },
  {
    id: 6,
    name: 'Shehzad',
    image: require('../assets/profileImage/3.jpg'),
    message: 'is every thing alright',
    time: '12:00 pm',
    unread: false,
  },
  {
    id: 7,
    name: 'Shehzad',
    image: require('../assets/profileImage/2.jpg'),
    message: 'is every thing alright',
    time: '11:30 pm',
    unread: false,
  },
];
