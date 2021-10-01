import {StyleSheet} from 'react-native';
import {theme, FONTS} from '../../utils';
//Theme
const {COLORS, SIZES} = theme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  viewImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  viewTxt: {
    position: 'absolute',
    bottom: '10%',
    left: 40,
    right: 40,
  },
  txtTitle: {
    ...FONTS.h1,
    color: COLORS.gray,
    textAlign: 'center',
  },
  txtDes: {
    ...FONTS.body3,
    color: COLORS.gray,
    marginTop: SIZES.base,
    textAlign: 'center',
  },

  dotRootContainer: {
    position: 'absolute',
    bottom: SIZES.height > 700 ? '26%' : '20%',
  },

  dotContainer: {
    flexDirection: 'row',
    height: SIZES.padding,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dots: {
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.blue,
    marginHorizontal: SIZES.radius / 2,
    width: 17,
    height: 17,
    // marginBottom: '10%',
  },
  btnSkip: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 150,
    height: 60,
    paddingLeft: 20,
    justifyContent: 'center',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: COLORS.blue,
  },
  txtSkip: {
    ...FONTS.h1,
    color: COLORS.white,
  },
});

export default styles;
