import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useContext, useState} from 'react';
import Context from '../Context/Context';
import styles from '../Styles/Styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import {ActivityIndicator} from 'react-native-paper';

const Profile = ({Signup, setSelectedImage, selectedImage}) => {
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    let option = {
      includeBase64: true,
      mediaType: 'photo',
      SelectionLimit: 0,
    };
    launchImageLibrary(option, res => {
      const uploadTask = storage()
        .ref()
        .child(`/userprofile/${Date.now()}`)
        .putFile(res.assets[0].uri);
      uploadTask.on(
        'state_changed', // or 'state_changed'
        snapshot => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // alert('Uploaded ');
          if (progress === 100) {
            alert('image uploaded');
            // () => {
            // Upload completed successfully, now we can get the download URL
            uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
              console.log('File available at', downloadURL);
              setSelectedImage(downloadURL);
              // setIsLoading(false);
            });
            // }
          }
        },
        error => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case 'storage/unauthorized':
              alert(`User doesn't have permission to access the object`);
              break;
            case 'storage/canceled':
              alert('Canceled');
              break;
            case 'storage/unknown':
              alert(`Unknown error occurred, inspect error.serverResponse`);
              break;
          }
        },
      );
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
          {!isLoading ? (
            <MaterialCommunityIcons
              name="camera-plus"
              size={45}
              color={colors.iconGray}
            />
          ) : !selectedImage ? (
            <ActivityIndicator size={'large'} color={'#5EBC7B'} />
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
          onPress={Signup}
          style={[styles.button, {backgroundColor: colors.secondary}]}>
          <Text style={[styles.btnText]}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
