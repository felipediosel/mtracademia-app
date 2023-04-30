import {createStackNavigator} from '@react-navigation/stack';
import {Intro} from '../../screens/Intro';
import Main from '../../screens/Main';
import Settings from '../../screens/Settings';
import PersonalData from '../../screens/PersonalData';
import Preferences from '../../screens/Preferences';
import Privacy from '../../screens/Privacy';
import {RootStackParamList} from '../../types/navigation';
import useAuth from '../../contexts/auth/hooks/useAuth';

const Stack = createStackNavigator<RootStackParamList>();

const SignedStack: React.FC = () => {
  const {intro} = useAuth();

  return (
    <Stack.Navigator
      initialRouteName={intro ? 'Intro' : 'Main'}
      screenOptions={{
        header: () => null,
        animationEnabled: true,
        gestureEnabled: false,
      }}>
      <Stack.Screen
        name="Intro"
        component={Intro}
        initialParams={{reIntroduction: false}}
      />
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="PersonalData" component={PersonalData} />
      <Stack.Screen name="Preferences" component={Preferences} />
      <Stack.Screen name="Privacy" component={Privacy} />
    </Stack.Navigator>
  );
};

export default SignedStack;
