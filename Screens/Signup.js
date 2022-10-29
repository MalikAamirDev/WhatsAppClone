import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StatusBar,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../Styles/Styles';
import {appColors} from '../utils/AppColors';
import Profile from './Profile';
import firestore from '@react-native-firebase/firestore';
const Signup = ({navigation, currentUser}) => {
  const [signupObj, setSignUpObj] = useState({});
  const [showNext, setShowNext] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  if (loading) {
    return (
      <View
        style={[styles.flexCenter, styles.wh100, {backgroundColor: '#d4e9e2'}]}>
        <ActivityIndicator size="large" color={'#5EBC7B'} />
      </View>
    );
  }
  const nextScreen = () => {
    if (!signupObj.Name || !signupObj.Email || !signupObj.Password) {
      console.log(alert('Please fill all fields'));
      return;
    }
    setShowNext(true);
  };
  const Signup = async () => {
    if (
      !signupObj.Name ||
      !signupObj.Email ||
      !signupObj.Password ||
      !selectedImage
    ) {
      console.log(alert('Please fill all fields'));
      return;
    }
    try {
      const result = await auth().createUserWithEmailAndPassword(
        signupObj.Email,
        signupObj.Password,
      );
      let obj = signupObj;
      obj = {
        ...obj,
        uid: result.user.uid,
        img: selectedImage,
        status: 'online',
      };
      console.log(obj);
      firestore().collection('Users').doc(result.user.uid).set(obj);
      setSignUpObj({});
      setLoading(false);
      // navigation.navigate('Home');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    }
  };
  // const testingFunction = () => {
  //   let obj = signupObj;
  //   obj = {
  //     ...obj,
  //     uid: 'testing',
  //     img: 'link',
  //   };
  //   console.log(obj);
  // };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#5EBC7B" />
      {/* <KeyboardAvoidingView behavior="position"> */}
      {!showNext ? (
        <>
          <View style={{flex: 1, backgroundColor: '#5EBC7B'}}>
            <View style={{flex: 1}}></View>
            <View style={styles.loginContainer}>
              <ScrollView>
                <View>
                  <Text style={[styles.loginHeading]}>Create Account</Text>
                </View>

                <View>
                  <View style={styles.inputContainer}>
                    <TextInput
                      // style={}
                      placeholder="Full Name"
                      onChangeText={e => setSignUpObj({...signupObj, Name: e})}
                      style={[styles.mainInput, styles.bb1, styles.borderColor]}
                    />
                    <TextInput
                      keyboardType="email-address"
                      // style={}
                      placeholder="Email"
                      onChangeText={e => setSignUpObj({...signupObj, Email: e})}
                      style={[styles.mainInput, styles.bb1, styles.borderColor]}
                    />
                    <TextInput
                      // style={}
                      placeholder="Password"
                      onChangeText={e =>
                        setSignUpObj({...signupObj, Password: e})
                      }
                      secureTextEntry={true}
                      style={[
                        styles.mainInput,
                        styles.bb1,
                        styles.borderColor,
                        styles.mb10,
                      ]}
                    />
                  </View>
                  <View style={styles.CheckContainer}>
                    <BouncyCheckbox
                      size={14}
                      fillColor="#5EBC7B"
                      text="I agree to the Terms of Service & Privacy Policy"
                      textStyle={{fontSize: 13, textDecorationLine: 'none'}}
                      iconStyle={{borderColor: '#5EBC7B'}}
                    />
                  </View>
                </View>
                <View>
                  <View style={styles.bottomContainer}>
                    <Text style={styles.signInText}>Sign Up</Text>
                    <TouchableOpacity onPress={nextScreen}>
                      <View style={styles.iconContainer}>
                        <AntDesign
                          style={styles.arrowIcon}
                          name="arrowright"
                          size={20}
                          color="#5EBC7B"
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('SignIn')}>
                      <Text style={styles.signUpText}>Sign In</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </>
      ) : (
        <Profile
          Signup={Signup}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}

      {/* </KeyboardAvoidingView> */}
    </>
  );
};

export default Signup;
