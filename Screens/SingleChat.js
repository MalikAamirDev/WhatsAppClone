import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
  ImageBackground,
} from 'react-native';
import styles from '../Styles/Styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {GiftedChat, Bubble, InputToolbar, Send} from 'react-native-gifted-chat';
import firestore from '@react-native-firebase/firestore';

const SingleChat = ({navigation, route, user}) => {
  const {name, img, lastLogin, online, uid, status} = route.params;
  const [value, setValue] = useState('');
  const {width} = Dimensions.get('window');
  // console.log(name);
  const [messages, setMessages] = useState([]);

  const getAllUsers = async () => {
    const docid = uid > user.uid ? user.uid + '-' + uid : uid + '-' + user.uid;
    const querySnap = await firestore()
      .collection('chatrooms')
      .doc(docid)
      .collection('messages')
      .orderBy('createdAt', 'desc')
      .get();

    const allMsg = querySnap.docs.map(docSnap => {
      return {
        ...docSnap.data(),
        createdAt: docSnap.data().createdAt.toDate(),
      };
    });
    setMessages(allMsg);
  };

  useEffect(() => {
    // setMessages([
    //   {
    //     _id: 1,
    //     text: 'Hello developer',
    //     createdAt: new Date(),
    //     user: {
    //       _id: 2,
    //       name: 'React Native',
    //       avatar: 'https://placeimg.com/140/140/any',
    //     },
    //   },
    // ]);
    // getAllUsers();
    const docid = uid > user.uid ? user.uid + '-' + uid : uid + '-' + user.uid;
    const messageRef = firestore()
      .collection('chatrooms')
      .doc(docid)
      .collection('messages')
      .orderBy('createdAt', 'desc');

    const unSubscriber = messageRef.onSnapshot(querySnap => {
      const allMsg = querySnap.docs.map(docSnap => {
        const data = docSnap.data();
        if (data.createdAt) {
          return {
            ...docSnap.data(),
            createdAt: docSnap.data().createdAt.toDate(),
          };
        } else {
          return {
            ...docSnap.data(),
            createdAt: new Date(),
          };
        }
      });
      // let userAvatar = user.avatar;
      setMessages(allMsg);
    });
    return () => {
      unSubscriber();
    };
  }, []);

  const onSend = messagesArray => {
    const msg = messagesArray[0];
    const myMsg = {
      ...msg,
      sendBy: user.uid,
      sendTo: uid,
      createdAt: new Date(),
    };
    setMessages(previousMessages => GiftedChat.append(previousMessages, myMsg));
    const docid = uid > user.uid ? user.uid + '-' + uid : uid + '-' + user.uid;

    firestore()
      .collection('chatrooms')
      .doc(docid)
      .collection('messages')
      .add({...myMsg, createdAt: firestore.FieldValue.serverTimestamp()});
  };

  return (
    <View style={[styles.flex1, {backgroundColor: '#effaff'}]}>
      {/* <Header> */}
      <View
        style={[
          {height: 60},
          styles.justifyContentCenter,
          styles.p10,
          {flex: 0.7},
        ]}>
        <View
          style={[styles.flexDirectionRow, styles.justifyContentSpaceBetween]}>
          <View style={[styles.flexDirectionRow]}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={[styles.iconTransparentBg]}>
              <MaterialIcons name="arrow-back-ios" size={18} color="#232323" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={[styles.chatProfileImg, styles.mr10]}
                source={{uri: img}}
              />
            </TouchableOpacity>
            <View>
              <Text style={[styles.lightBlack, styles.fontWeightBold]}>
                {name}
              </Text>
              <Text style={[styles.fs12]}>{status}</Text>
            </View>
          </View>
          <View style={[styles.flexDirectionRow]}>
            <TouchableOpacity
              style={[styles.mr10, styles.iconBg, styles.elevation5]}>
              <MaterialCommunityIcons name="video" size={20} color="#293040" />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.mr10, styles.iconBg, styles.elevation5]}>
              <FontAwesome name="phone" size={20} color="#293040" />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.mr10, styles.iconBg, styles.elevation5]}>
              <SimpleLineIcons name="options" size={20} color="#293040" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* </Header> */}
      {/* <Container> */}
      <View
        style={[
          styles.Container,
          styles.elevation5,
          styles.p5,
          {backgroundColor: '#f9f9f9'},
        ]}>
        {/* <View>
          <View
            style={[
              {backgroundColor: '#2ab355'},
              styles.flexCenter,
              styles.br10,
              styles.py5,
              {width: 120},
              styles.mt20,
              styles.alignSelf,
            ]}>
            <Text
              style={[styles.fs12, styles.white, {textTransform: 'uppercase'}]}>
              19 jan 2022
            </Text>
          </View>
          <View>
            <View style={[styles.flexDirectionRow, styles.mt20]}>
              <Image
                style={[styles.chatProfileImg, {alignSelf: 'flex-end'}]}
                source={img}
              />
              <View
                style={[
                  styles.bgcoralLite,
                  styles.p10,
                  styles.ml10,
                  {
                    width: 250,
                    borderTopEndRadius: 25,
                    borderTopLeftRadius: 25,
                    borderBottomEndRadius: 25,
                  },
                ]}>
                <Text>
                  Chatting Something For Something Chatting Something For
                  Something Chatting Something For Something
                </Text>
              </View>
            </View>
          </View>
        </View> */}
        <GiftedChat
          messages={messages}
          onSend={messages => onSend(messages)}
          user={{
            _id: user.uid,
          }}
          renderBubble={props => {
            return (
              <Bubble
                {...props}
                wrapperStyle={{
                  right: {
                    backgroundColor: '#5EBC7B',
                  },
                }}
              />
            );
          }}
          renderInputToolbar={props => {
            return (
              <InputToolbar
                {...props}
                containerStyle={[
                  {borderRadius: 25, backgroundColor: '#effaff'},
                  styles.elevation5,
                ]}
              />
            );
          }}
          renderSend={props => {
            return (
              <Send {...props}>
                <View style={[styles.sendMessage]}>
                  <Ionicons size={24} name="md-send-sharp" color="white" />
                </View>
              </Send>
            );
          }}
        />
      </View>
      {/* </Container> */}
      {/* <Bottom> */}
      {/* <View style={[styles.flex1, styles.bgOffWhite]}>
        <View style={[styles.chatInput, {width: width}]}>
          <View
            style={[
              styles.flexDirectionRow,

              styles.bgWhite,
              {elevation: 5},
              styles.br25,
              {width: width - 60},
              styles.alignItemsCenter,
            ]}>
            <TouchableOpacity style={[styles.ml10]}>
              <MaterialCommunityIcons
                size={28}
                name="emoticon-excited-outline"
                color="grey"
              />
            </TouchableOpacity>
            <TextInput
              value={value}
              onChangeText={e => setValue(e)}
              style={[
                styles.h100,
                styles.px10,
                styles.fs18,
                styles.flexGrow1,
                {width: width - 175},
              ]}
              multiline
              placeholder="Enter message..."
            />
            <TouchableOpacity style={[styles.mr10]}>
              <Ionicons size={28} name="ios-add-sharp" color="grey" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.mr20]}>
              <SimpleLineIcons size={24} name="camera" color="grey" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={[styles.sendMessage]}>
            {value.trim() ? (
              <Ionicons size={24} name="md-send-sharp" color="white" />
            ) : (
              <Feather size={24} name="mic" color="white" />
            )}
          </TouchableOpacity>
        </View>
      </View> */}
      {/* </Bottom> */}
    </View>
  );
};

export default SingleChat;
