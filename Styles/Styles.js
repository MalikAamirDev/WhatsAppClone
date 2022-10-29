import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  // <ThemeColor>
  primary: '#5EBC7B',
  secondary: '#fff',
  white: '#fff',
  black: '#000',
  blue: '#1977F3',
  lightBg: '#EFF4F7',
  bg: '#FAFBFF',
  // </ThemeColor>
  // <CustomStyling>
  mainContainer: {
    flex: 1,
    backgroundColor: '#effaff',
    // backgroundColor: '#d4e9e2',
  },
  Header: {
    flex: 2,
  },
  Container: {
    flex: 7,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  statusImg: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderColor: '#1977F3',
    borderWidth: 2,
  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  chatProfileImg: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  iconBg: {
    backgroundColor: '#fff',
    width: 30,
    height: 30,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconTransparentBg: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  loginContainer: {
    flex: 2,
    backgroundColor: '#FAFBFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 35,
    // backgroundColor: '#edf2f4',
  },
  loginHeading: {
    color: '#5EBC7B',
    fontSize: 45,
    fontWeight: 'bold',
    marginTop: 20,
  },

  readMessages: {
    padding: 15,
    flexDirection: 'row',
  },
  newMessages: {
    width: 20,
    height: 20,
    backgroundColor: '#02d144',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    bottom: 2,
    maxHeight: 100,
    padding: 5,
  },
  sendMessage: {
    backgroundColor: '#55a86f',
    // position: 'absolute',
    // right: 0,
    // bottom: 7,
    justifyContent: 'center',
    alignItems: 'center',
    width: 45,
    height: 45,
    borderRadius: 24,
    elevation: 2,
  },
  inputContainer: {
    marginTop: 40,
  },
  Input: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    marginBottom: 5,
  },
  CheckContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  forgetPass: {
    color: '#1977F3',
    textDecorationLine: 'underline',
    fontSize: 14,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 60,
  },
  signInText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#5EBC7B',
  },
  iconContainer: {
    backgroundColor: '#5EBC7B',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    backgroundColor: '#5EBC7B',
    width: 38,
    height: 38,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  transparentIcon: {
    // backgroundColor: '#ef3f49',
    borderColor: '#fff',
    // borderWidth: 1,
    width: 38,
    height: 38,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingLeft: 5,
  },
  arrowIcon: {
    color: '#fff',
  },
  signUpText: {
    color: '#1977F3',
    textDecorationLine: 'underline',
  },
  button: {
    width: 80,
    height: 35,
    backgroundColor: '#ff7f50',
    borderRadius: 5,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#f9f9f9',
    fontSize: 18,
  },
  // </CustomStyling>
  black: {
    color: 'black',
  },
  lightBlack: {
    color: '#323232',
  },
  white: {
    color: 'white',
  },
  bgWhite: {
    backgroundColor: 'white',
  },
  bgOffWhite: {
    backgroundColor: '#f9f9f9',
  },
  coral: {
    backgroundColor: '#ff7f50',
  },
  coralMedium: {
    backgroundColor: '#ff9973',
  },
  bgcoralLite: {
    backgroundColor: '#ffbfa8',
  },

  greyBg: {
    backgroundColor: '#999999',
  },
  darkGrey: {
    color: '#808080',
  },
  width300: {
    width: 300,
  },
  w100: {
    width: '100%',
  },
  w90: {
    width: '80%',
  },
  w80: {
    width: '80%',
  },
  h100: {
    height: '100%',
  },
  h90: {
    height: '90%',
  },
  h80: {
    height: '80%',
  },
  wh100: {
    width: '100%',
    height: '100%',
  },
  height45: {
    height: 45,
  },
  height150: {
    height: 150,
  },
  bW1: {
    borderWidth: 1,
  },
  bb1: {
    borderBottomWidth: 1,
  },
  borderColor: {
    borderColor: '#d3d3d3',
  },
  flexGrow1: {
    flexGrow: 1,
  },
  flex05: {
    flex: 0.5,
  },
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  flex4: {
    flex: 4,
  },
  flex5: {
    flex: 5,
  },
  flex9: {
    flex: 9,
  },
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexDirectionRow: {
    flexDirection: 'row',
  },
  flexDirectionColumn: {
    flexDirection: 'column',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  justifyContentSpaceBetween: {
    justifyContent: 'space-between',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  alignSelf: {
    alignSelf: 'center',
  },
  width90: {
    width: '90%',
  },
  textUpperCase: {
    textTransform: 'uppercase',
  },
  fs10: {
    fontSize: 10,
  },
  fs12: {
    fontSize: 12,
  },
  fs14: {
    fontSize: 14,
  },
  fs16: {
    fontSize: 16,
  },
  fs18: {
    fontSize: 18,
  },
  fs20: {
    fontSize: 20,
  },
  fs22: {
    fontSize: 22,
  },
  fs24: {
    fontSize: 24,
  },
  fs26: {
    fontSize: 26,
  },
  fs28: {
    fontSize: 28,
  },
  fs30: {
    fontSize: 30,
  },
  fs35: {
    fontSize: 35,
  },
  ls2: {
    letterSpacing: 2,
  },
  fontWeightBold: {
    fontWeight: 'bold',
  },
  mt10: {
    marginTop: 10,
  },
  mt30: {
    marginTop: 30,
  },
  mt20: {
    marginTop: 20,
  },
  m10: {
    margin: 10,
  },
  m20: {
    margin: 20,
  },
  mb5: {
    marginBottom: 10,
  },
  mb10: {
    marginBottom: 10,
  },
  mb20: {
    marginBottom: 20,
  },
  mb30: {
    marginBottom: 30,
  },
  mb50: {
    marginBottom: 50,
  },
  mr10: {
    marginRight: 10,
  },
  mr20: {
    marginRight: 20,
  },
  ml5: {
    marginLeft: 5,
  },
  ml10: {
    marginLeft: 10,
  },
  ml20: {
    marginLeft: 20,
  },

  mx10: {
    marginHorizontal: 10,
  },
  mx20: {
    marginHorizontal: 20,
  },
  my10: {
    marginVertical: 10,
  },
  my20: {
    marginVertical: 20,
  },
  my30: {
    marginVertical: 30,
  },
  my40: {
    marginVertical: 40,
  },
  p10: {
    padding: 10,
  },
  p5: {
    padding: 5,
  },
  p20: {
    padding: 20,
  },
  px10: {
    paddingHorizontal: 10,
  },
  px20: {
    paddingHorizontal: 20,
  },
  py5: {
    paddingVertical: 5,
  },
  py10: {
    paddingVertical: 10,
  },
  py20: {
    paddingVertical: 20,
  },
  pb10: {
    paddingBottom: 10,
  },
  pb20: {
    paddingBottom: 20,
  },
  pr10: {
    paddingRight: 10,
  },
  pr20: {
    paddingRight: 20,
  },
  pl10: {
    paddingLeft: 10,
  },
  pl20: {
    paddingLeft: 20,
  },
  pt10: {
    paddingTop: 10,
  },
  pt20: {
    paddingTop: 20,
  },
  br5: {
    borderRadius: 5,
  },
  br10: {
    borderRadius: 10,
  },
  br20: {
    borderRadius: 20,
  },
  br25: {
    borderRadius: 25,
  },
  borderBottomLeftRadius: {
    borderBottomLeftRadius: 20,
  },
  borderBottomRightRadius: {
    borderBottomRightRadius: 20,
  },
  borderTopLeftRadius: {
    borderTopLeftRadius: 20,
  },
  borderTopRightRadius: {
    borderTopRightRadius: 20,
  },
  elevation5: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  elevation8: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});

export default styles;
