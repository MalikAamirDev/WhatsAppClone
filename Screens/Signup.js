import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../Styles/Styles';
import {appColors} from '../utils/AppColors';

const Signup = ({navigation, currentUser}) => {
  const [signupObj, setSignUpObj] = useState({});
  console.log(currentUser);
  const Signup = () => {
    console.log(
      `User account created ${[signupObj.Email, signupObj.Password]}`,
    );
    auth()
      .createUserWithEmailAndPassword(signupObj.Email, signupObj.Password)
      .then(() => {
        setSignUpObj({});
        navigation.navigate('Home');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
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
                  style={styles.mainInput}
                  placeholder="Full Name"
                  onChangeText={e => setSignUpObj({...signupObj, Name: e})}
                  style={[styles.bb1, styles.borderColor]}
                />
                <TextInput
                  // keyboardType="email"
                  style={styles.mainInput}
                  placeholder="Email"
                  onChangeText={e => setSignUpObj({...signupObj, Email: e})}
                  style={[styles.bb1, styles.borderColor]}
                />
                <TextInput
                  style={styles.mainInput}
                  placeholder="Password"
                  onChangeText={e => setSignUpObj({...signupObj, Password: e})}
                  secureTextEntry={true}
                  style={[styles.bb1, styles.borderColor, styles.mb10]}
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
                <TouchableOpacity onPress={Signup}>
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
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                  <Text style={styles.signUpText}>Sign In</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default Signup;
