import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import styles from '../Styles/Styles';

const Camera = () => {
  return (
    <SafeAreaView style={[styles.flex1, styles.flexCenter]}>
      <Text style={[styles.black]}>Camera</Text>
    </SafeAreaView>
  );
};

export default Camera;
