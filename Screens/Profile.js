import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useContext, useState} from 'react';
import Context from '../Context/Context';
import styles from '../Styles/Styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Profile = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const {
    theme: {colors},
  } = useContext(Context);

  const openCamera = () => {
    let option = {
      includeBase64: true,
      mediaType: 'photo',
    };
    launchCamera(option, res => {
      // const source = {uri: 'data:image/jpeg;base64,' + res.data};
      setSelectedImage(res.assets[0].uri);
      // console.log(res);
    });
  };
  const openGallery = () => {
    let option = {
      includeBase64: true,
      mediaType: 'photo',
      SelectionLimit: 0,
    };
    launchImageLibrary(option, res => {
      // const libraryImg = {uri: res.uri};
      // const source = {uri: 'data:image/jpeg;base64,' + res.data};
      // const source = {uri: res.uri};
      setSelectedImage(res.assets[0].uri);
    });
  };

  return (
    <View style={[styles.flex1, styles.alignItemsCenter, styles.bgWhite]}>
      <View style={[styles.flex3, styles.flexCenter]}>
        <View style={[styles.flexCenter]}>
          <Text style={[styles.fs22, {color: colors.primary}]}>
            Profile Info
          </Text>
          <Text style={[styles.fs14, {color: colors.text}]}>
            Please provide profile photo
          </Text>
        </View>
        <TouchableOpacity
          onPress={openCamera}
          style={[
            {backgroundColor: colors.backgroundSmokeWhite},
            {width: 120, height: 120, borderRadius: 120},
            styles.flexCenter,
            styles.mt30,
          ]}>
          {!selectedImage ? (
            <MaterialCommunityIcons
              name="camera-plus"
              size={45}
              color={colors.iconGray}
            />
          ) : (
            <Image
              // source={require('../assets/profileImage/1.jpg')}
              source={{uri: selectedImage}}
              style={[
                styles.wh100,
                // {resizeMode: 'contain'},
                {borderRadius: 120},
              ]}
              // Source={require('../assets/profileImage/1.jpg')}
              // style={[{width: 500, height: 500, borderRadius: 120}]}
            />
          )}
        </TouchableOpacity>
        <View style={[styles.flexDirectionRow, styles.mt20]}>
          <TouchableOpacity
            onPress={openGallery}
            style={[
              styles.button,
              {backgroundColor: '#f0f0f0'},
              styles.mr10,
              styles.flexDirectionRow,
              styles.flexCenter,
            ]}>
            <Feather name="upload" size={18} color="#808080" />
            <Text
              style={[
                styles.darkGrey,
                styles.fs14,
                {marginLeft: 2, marginTop: 5},
              ]}>
              Upload
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.flex2, {justifyContent: 'flex-end'}, styles.mb20]}>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: colors.secondary}]}>
          <Text style={[styles.btnText]}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
