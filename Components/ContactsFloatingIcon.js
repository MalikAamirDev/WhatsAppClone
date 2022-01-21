import {TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import GlobalContext from '../Context/Context';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ContactsFloatingIcon = () => {
  const {
    theme: {colors},
  } = useContext(GlobalContext);
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Contacts')}
      style={{
        position: 'absolute',
        right: 10,
        bottom: 90,
        borderRadius: 60,
        width: 60,
        height: 60,
        backgroundColor: colors.secondary,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <MaterialCommunityIcons
        name="android-messages"
        size={30}
        color="white"
        style={{transform: [{scaleX: -1}]}}
      />
    </TouchableOpacity>
  );
};

export default ContactsFloatingIcon;
