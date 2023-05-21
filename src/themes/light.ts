import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default {
  type: 'light',
  responsive: {
    wp: wp,
    hp: hp,
  },
  colors: {
    tp: '#0D0D0D', //text-primary
    ts: '#57605E', //text-secondary
    bg: '#FFFFFF', //background
    pr: '#EA723B', //primary
    sc: '#EFEFF4', //secondary
    at: '#D42424', //attention
    wa: '#60331F', //warning
  },
  fonts: {
    fm: 'Montserrat', //family
    sizes: {
      mm: '8px', //mini
      sm: '10px', //small
      md: '12px', //medium
      lg: '14px', //large
      xl: '24px', //extra-large
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
      xxl: 155,
    },
  },
};
