import {createStackNavigator} from '@react-navigation/stack';
import {Background} from '../../../components/Background';
import {IntroSlider} from '../../../components/Slider/IntroSlider';
import ChooseUser from '../../../screens/ChooseUser';
import SignedInStack from '../SignedInStack';
import {RootStackParamList} from '../../../types/navigation';
import useAuth from '../../../contexts/auth/hooks/useAuth';

const Stack = createStackNavigator<RootStackParamList>();

const FirstTimeStack: React.FC = () => {
  const {intro} = useAuth();

  return (
    <Background>
      <Stack.Navigator
        initialRouteName={intro ? 'Intro' : 'ChooseUser'}
        screenOptions={{
          header: () => null,
          animationEnabled: true,
          gestureEnabled: false,
        }}>
        <Stack.Screen name="Intro" component={IntroSlider} />
        <Stack.Screen name="ChooseUser" component={ChooseUser} />
        <Stack.Screen name="SignedIn" component={SignedInStack} />
      </Stack.Navigator>
    </Background>
  );
};

export default FirstTimeStack;
