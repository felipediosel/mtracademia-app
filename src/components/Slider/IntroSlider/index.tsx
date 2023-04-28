import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {useTheme} from 'styled-components';
import {ArrowArcRight, ArrowRight, Check} from 'phosphor-react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Slide} from '../../Slider/Slide';
import * as S from './styles';
import * as AsyncStorage from '../../../services/async-storage';
import {RootStackParamList} from '../../../types/navigation';

export type Item = {
  content: React.ReactNode;
};

type Props = {
  data: Item[];
};

export const IntroSlider: React.FC<Props> = ({data}) => {
  const navigation = useNavigation();
  const route: RouteProp<RootStackParamList, 'Intro'> = useRoute();
  const theme = useTheme();

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
    const isReIntroduction =
      !!route.params && route.params.reIntroduction
        ? route.params.reIntroduction
        : false;

    if (isReIntroduction) {
      if (navigation.canGoBack()) {
        return navigation.goBack();
      }
    }

    AsyncStorage.Intro.set();
    navigation.navigate('Main');
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
      data={data}
      dotClickEnabled={false}
    />
  );
};
