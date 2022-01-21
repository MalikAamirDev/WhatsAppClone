import React, {useState} from 'react';
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

const SingleChat = ({navigation}) => {
  const [value, setValue] = useState('');
  const {width} = Dimensions.get('window');
  return (
    <View style={[styles.flex1, {backgroundColor: '#effaff'}]}>
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
                source={require('../assets/profileImage/1.jpg')}
              />
            </TouchableOpacity>
            <View>
              <Text style={[styles.lightBlack, styles.fontWeightBold]}>
                Malik Aamir
              </Text>
              <Text style={[styles.fs12]}>Online</Text>
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
      <View
        style={[
          styles.Container,
          styles.elevation5,
          styles.p5,
          {backgroundColor: '#f9f9f9'},
          // {backgroundColor: '#F2D0AD'},
        ]}>
        {/* <ImageBackground
          style={[styles.bgImage, styles.mt20]}
          // source={{uri: '../assets/otherImages/wallpaper.png'}}
          source={require('../assets/otherImages/wallpaper.png')}
        /> */}
        <View>
          <View
            style={[
              // styles.bgcoralLite,
              // {backgroundColor: '#2ab355'},
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
                source={require('../assets/profileImage/1.jpg')}
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
        </View>
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
      </View>
    </View>
  );
};

export default SingleChat;
