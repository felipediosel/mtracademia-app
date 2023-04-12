import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default {
  type: 'dark',
  responsive: {
    wp: wp,
    hp: hp,
  },
  colors: {
    tp: '#FFFFFF', //text-primary
    ts: '#767577', //text-secondary
    bg: '#101218', //background
    pr: '#E76124', //primary
    sc: '#1E1E24', //secondary
    at: '#BB4430', //attention
  },
  fonts: {
    fm: 'Montserrat', //family
    sizes: {
      mm: '8px', //mini
      sm: '10px', //small
      md: '12px', //medium
      lg: '14px', //large
      xl: '28px', //extra-large
    },
    weights: {
      df: 'bold', //default
    },
  },
  margins: {
    mh: '8px', //margin-horizontal
    mv: '24px', //margin-vertical
  },
  paddings: {
    ph: '16px', //padding-horizontal
    pv: '16px', //padding-vertical
  },
  heights: {
    sm: `${hp('6%')}px`, //small
    md: `${hp('10%')}px`, //medium
    lg: '130px', //large
  },
  widths: {
    sm: '210px', //small
    md: `${wp('70%')}px`, //medium
    lg: `${wp('90%')}px`, //large
  },
  borders: {
    sm: '10px', //small
    md: '15px', //medium
    widths: {
      md: '3px', //medium
    },
  },
  icons: {
    sizes: {
      sm: 25,
      md: 35,
      lg: 45,
      xl: 95,
      xxl: 115,
    },
  },
};
