import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'styled-components';
import {ArrowArcRight, ArrowRight, Check} from 'phosphor-react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Slide} from '../../Slider/Slide';
import {Welcome} from '../../../screens/IntroSlides/Welcome';
import {MyFrequency} from '../../../screens/IntroSlides/MyFrequency';
import {MyPhysicalEvaluations} from '../../../screens/IntroSlides/MyPhysicalEvaluations';
import {MyPlan} from '../../../screens/IntroSlides/MyPlan';
import {MyFinancial} from '../../../screens/IntroSlides/MyFinancial';
import {LetsGo} from '../../../screens/IntroSlides/LetsGo';
import * as S from './styles';
import useChooseUser from '../../../hooks/useChooseUser';
import * as AsyncStorage from '../../../services/async-storage';

export function IntroSlider({...rest}): JSX.Element {
  const navigation = useNavigation();
  const theme = useTheme();

  const {isChooseUser} = useChooseUser();

  const slides = [
    {content: <Welcome />},
    {content: <MyFrequency />},
    {content: <MyPhysicalEvaluations />},
    {content: <MyPlan />},
    {content: <MyFinancial />},
    {content: <LetsGo />},
  ];

  const _renderItem = ({item}: any) => {
    return <Slide content={item.content} />;
  };

  const _renderNextButton = () => {
    return (
      <S.ButtonCircle>
        <ArrowRight size={theme.icons.sizes.sm} color={theme.colors.pr} />
      </S.ButtonCircle>
    );
  };

  const _renderDoneButton = () => {
    return (
      <S.ButtonCirclePrimary>
        <Check size={theme.icons.sizes.sm} color={theme.colors.tp} />
      </S.ButtonCirclePrimary>
    );
  };

  const _renderSkipButton = () => {
    return (
      <S.ButtonCircle>
        <ArrowArcRight size={theme.icons.sizes.sm} color={theme.colors.pr} />
      </S.ButtonCircle>
    );
  };

  const _done = () => {
    AsyncStorage.Intro.set();

    return navigation.navigate('Main');
  };

  return (
    <AppIntroSlider
      renderItem={_renderItem}
      renderDoneButton={_renderDoneButton}
      renderNextButton={_renderNextButton}
      renderSkipButton={_renderSkipButton}
      showSkipButton={true}
      onDone={_done}
      dotStyle={{backgroundColor: theme.colors.sc, width: 8, height: 8}}
      activeDotStyle={{backgroundColor: theme.colors.pr, width: 25, height: 8}}
      data={slides}
      dotClickEnabled={false}
      {...rest}
    />
  );
}
