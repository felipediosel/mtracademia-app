import {useTheme} from 'styled-components';

import {Slide1} from '../../../screens/Home/Slides/Slide1';
import {Slide2} from '../../../screens/Home/Slides/Slide2';

import {Slide} from '../../Slider/Slide';

import AppIntroSlider from 'react-native-app-intro-slider';

export function HomeSlider({...rest}): JSX.Element {
  const theme = useTheme();

  const slides = [{content: <Slide1 />}, {content: <Slide1 />}];

  const _renderItem = ({item}: any) => {
    return (
      <Slide
        content={item.content}
        style={{
          paddingLeft: theme.responsive.wp('1%'),
          paddingRight: theme.responsive.wp('1%'),
          justifyContent: 'flex-start',
          height: '100%',
          width: '100%',
        }}
      />
    );
  };

  return (
    <AppIntroSlider
      renderItem={_renderItem}
      showDoneButton={false}
      showNextButton={false}
      showPrevButton={false}
      showSkipButton={false}
      dotStyle={{backgroundColor: theme.colors.sc, width: 6, height: 6}}
      activeDotStyle={{backgroundColor: theme.colors.pr, width: 8, height: 8}}
      data={slides}
      {...rest}
      style={{
        marginTop: theme.responsive.wp('2%'),
        borderWidth: 0.1,
        borderColor: 'red',
      }}
      contentContainerStyle={{}}
    />
  );
}
