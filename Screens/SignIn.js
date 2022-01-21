import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../Styles/Styles';
import {appColors} from '../utils/AppColors';

const SignIn = ({navigation}) => {
  const [signInObj, setSignInObj] = useState({});
  const [loading, setLoading] = useState(false);
  const Signup = () => {
    // console.log(signInObj);
    // console.log(
    //   `User account created ${[signInObj.Email, signInObj.Password]}`,
    // );
    setLoading(true);
    auth()
      .signInWithEmailAndPassword(signInObj.Email, signInObj.Password)
      .then(() => {
        setSignInObj({});
        navigation.navigate('Tabs', {screen: 'Home'});
        setLoading(false);
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
      {loading ? (
        <View
          style={[
            styles.flexCenter,
            styles.wh100,
            {backgroundColor: '#d4e9e2'},
          ]}>
          <ActivityIndicator size="large" color={'#5EBC7B'} />
          {/* <Text>LoOoding.....</Text> */}
        </View>
      ) : (
        <>
          <View style={{flex: 1, backgroundColor: '#5EBC7B'}}>
            <View style={{flex: 1}}></View>
            <View style={styles.loginContainer}>
              <ScrollView>
                <View>
                  <Text style={[styles.loginHeading]}>Welcome Back</Text>
                </View>

                <View>
                  <View style={styles.inputContainer}>
                    <TextInput
                      style={styles.mainInput}
                      placeholder="Email"
                      onChangeText={e => setSignInObj({...signInObj, Email: e})}
                      style={[styles.bb1, styles.borderColor]}
                    />
                    <TextInput
                      style={styles.mainInput}
                      placeholder="Password"
                      onChangeText={e =>
                        setSignInObj({...signInObj, Password: e})
                      }
                      secureTextEntry={true}
                      style={[styles.bb1, styles.borderColor, styles.mb10]}
                    />
                  </View>
                  <View style={styles.CheckContainer}>
                    <BouncyCheckbox
                      size={14}
                      fillColor="#5EBC7B"
                      text="Remember me"
                      textStyle={{fontSize: 13, textDecorationLine: 'none'}}
                      iconStyle={{borderColor: '#5EBC7B'}}
                    />
                    <TouchableOpacity>
                      <Text style={styles.forgetPass}>Forgot password</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View>
                  <View style={styles.bottomContainer}>
                    <Text style={styles.signInText}>Sign In</Text>
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
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Signup')}>
                      <Text style={[styles.signUpText]}>Sign Up</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </>
      )}
    </>
  );
};

export default SignIn;
