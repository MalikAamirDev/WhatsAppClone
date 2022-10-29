import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import styles from '../Styles/Styles';

const Calls = () => {
  const [allUsers, setAllUsers] = useState([]);
  // const getUsers = () => {
  //   const users = firestore()
  //     .collection('Users')
  //     .get()
  //     .then(querySnapshot => {
  //       console.log('total users', querySnapshot.Size);
  //     });
  //   console.log(users);
  // };

  const getUsers = () => {
    const users = firestore()
      .collection('Users')
      .get()
      .then(querySnapshot => {
        console.log('total users', querySnapshot.size);
        querySnapshot.forEach(documentSnapshot => {
          // console.log(
          //   'User ID: ',
          //   documentSnapshot.id,
          //   documentSnapshot.data(),
          // );
          setAllUsers(documentSnapshot.data());
          console.log(allUsers);
        });
      });
    console.log(users);
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <SafeAreaView style={[styles.flex1, styles.flexCenter]}>
      <Text style={[styles.black]}>Calls</Text>
    </SafeAreaView>
  );
};

export default Calls;
