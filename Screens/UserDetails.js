import React, {useState} from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import styles from '../Styles/Styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const UserDetails = ({route, navigation}) => {
  const {name, img, email, status} = route.params;
  return (
    <>
      <View style={[styles.flex1]}>
        <View
          style={[
            styles.flex4,
            {width: '100%', height: '100%'},
            styles.elevation5,
          ]}>
          <ImageBackground
            imageStyle={[{width: '100%', height: 400}]}
            resizeMode="cover"
            style={[styles.elevation5]}
            source={{
              uri: img,
            }}>
            <View
              style={[
                styles.flexDirectionRow,
                styles.justifyContentSpaceBetween,
                styles.p20,
              ]}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <View style={[styles.backIcon, {backgroundColor: 'white'}]}>
                  <MaterialIcons
                    // style={styles.arrowIcon}
                    name="keyboard-arrow-left"
                    size={24}
                    color="#5EBC7B"
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.transparentIcon]}>
                <SimpleLineIcons
                  style={[styles.arrowIcon, styles.elevation5]}
                  name="options-vertical"
                  size={20}
                  color={'white'}
                />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
        <View style={[styles.flex3, styles.p20, {backgroundColor: '#effaff'}]}>
          <View>
            <Text
              style={[
                styles.black,
                styles.fs30,
                // {color: '#55a86f'},
              ]}>
              {name}
            </Text>
            <View style={[styles.flexDirectionRow, styles.alignItemsCenter]}>
              <View
                style={[
                  {width: 10, height: 10, backgroundColor: '#5EBC7B'},
                  styles.br10,
                ]}></View>
              <Text style={[, styles.fs12, styles.ml5, {color: '#696969'}]}>
                {status}
              </Text>
            </View>
          </View>
          <View>
            <View style={[styles.mt30]}>
              <Text style={[{color: '#696969'}]}>Email</Text>
              <View
                style={[
                  styles.flexDirectionRow,
                  styles.justifyContentSpaceBetween,
                  styles.alignItemsCenter,
                ]}>
                <Text style={[styles.fs20, {color: '#232323'}]}>{email}</Text>
                <View
                  style={[
                    {width: 80},
                    styles.flexDirectionRow,
                    styles.justifyContentSpaceBetween,
                  ]}>
                  <TouchableOpacity
                    style={[styles.mr10, styles.iconBg, styles.elevation5]}>
                    <MaterialCommunityIcons
                      name="video"
                      size={20}
                      color="#5EBC7B"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.mr10, styles.iconBg, styles.elevation5]}>
                    <FontAwesome name="phone" size={20} color="#5EBC7B" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default UserDetails;
