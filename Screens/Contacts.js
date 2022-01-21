import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../Styles/Styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Contacts = ({navigation}) => {
  return (
    <View style={[styles.flex1, {backgroundColor: '#effaff'}]}>
      <View style={[{height: 60}, styles.p10]}>
        <View style={[{alignItems: 'flex-start'}, styles.flexDirectionRow]}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[styles.iconTransparentBg]}>
            <MaterialIcons name="arrow-back-ios" size={18} color="#5EBC7B" />
          </TouchableOpacity>
          <Text style={[styles.fs18, {color: '#5EBC7B', marginTop: 3}]}>
            Select Contacts
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.Container,
          styles.elevation5,
          styles.p5,
          {backgroundColor: '#f9f9f9'},
        ]}>
        <Text>Content</Text>
      </View>
    </View>
  );
};

export default Contacts;
