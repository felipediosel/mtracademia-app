import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'styled-components';

import {Slide1} from '../../../screens/Slides/Slide1';
import {Slide2} from '../../../screens/Slides/Slide2';
import {Slide3} from '../../../screens/Slides/Slide3';
import {Slide4} from '../../../screens/Slides/Slide4';
import {Slide5} from '../../../screens/Slides/Slide5';
import {Slide} from '../../Slider/Slide';

import {ArrowRight, Check} from 'phosphor-react-native';

import AppIntroSlider from 'react-native-app-intro-slider';

import * as S from './styles';

export function IntroSlider({...rest}): JSX.Element {
  const navigation = useNavigation();
  const theme = useTheme();

  const slides = [
    {content: <Slide1 />},
    {content: <Slide2 />},
    {content: <Slide3 />},
    {content: <Slide4 />},
    {content: <Slide5 />},
  ];

  const _renderItem = ({item}: any) => {
    return <Slide content={item.content} />;
  };

  const _renderNextButton = () => {
    return (
      <S.ButtonCircle>
        <ArrowRight size={25} weight={'bold'} color={theme.colors.pr} />
      </S.ButtonCircle>
    );
  };

  const _renderDoneButton = () => {
    return (
      <S.ButtonCirclePrimary>
        <Check size={25} weight={'bold'} color={theme.colors.tp} />
      </S.ButtonCirclePrimary>
    );
  };

  const _done = () => {
    navigation.navigate('ChooseUser');
  };

  return (
    <AppIntroSlider
      renderItem={_renderItem}
      renderDoneButton={_renderDoneButton}
      renderNextButton={_renderNextButton}
      onDone={_done}
      dotStyle={{backgroundColor: theme.colors.sc}}
      activeDotStyle={{backgroundColor: theme.colors.pr}}
      data={slides}
      {...rest}
    />
  );
}
