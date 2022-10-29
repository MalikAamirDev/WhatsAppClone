import React, {useEffect, useState} from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import styles from '../Styles/Styles';
import firestore from '@react-native-firebase/firestore';
import {ActivityIndicator} from 'react-native-paper';

const UserInfo = ({navigation, user}) => {
  const [profile, setProfile] = useState('');
  useEffect(() => {
    firestore()
      .collection('Users')
      .doc(user.uid)
      .get()
      .then(docSnap => {
        setProfile(docSnap.data());
      });
  }, []);

  if (!profile) {
    return <ActivityIndicator size={'large'} color="#5EBC7B" />;
  }
  return (
    <>
      <View style={[styles.flex1]}>
        <View style={[styles.flex4, {width: '100%', height: '100%'}]}>
          <ImageBackground
            imageStyle={[{width: '100%', height: 400}]}
            resizeMode="cover"
            style={[styles.elevation5]}
            source={{
              uri: profile.img,
            }}></ImageBackground>
        </View>
        <View style={[styles.flex3, styles.p20, {backgroundColor: '#effaff'}]}>
          <View>
            <Text style={[styles.black, styles.fs30]}>{profile.Name}</Text>
          </View>
          <View>
            <View style={[styles.mt20]}>
              <Text style={[{color: '#696969'}]}>Email</Text>
              <View
                style={[
                  styles.flexDirectionRow,
                  styles.justifyContentSpaceBetween,
                  styles.alignItemsCenter,
                ]}>
                <Text style={[styles.fs20, {color: '#232323'}]}>
                  {profile.Email}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={[styles.button, {backgroundColor: 'white'}, styles.mt20]}>
              <Text style={[styles.fs16, {color: '#5EBC7B'}]}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default UserInfo;
