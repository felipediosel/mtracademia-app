import {createStackNavigator} from '@react-navigation/stack';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import SafeAreaView from '../../../components/SafeAreaView';

import Main from '../../../screens/Main';
import Settings from '../../../screens/Settings';
import PersonalData from '../../../screens/PersonalData';
import Preferences from '../../../screens/Preferences';
import Privacy from '../../../screens/Privacy';

import {RootStackParamList} from '../../../types/navigation';
import {Background} from '../../../components/Background';

const Stack = createStackNavigator<RootStackParamList>();

const SignedInStack: React.FC = () => {
  return (
    <Background>
      <SafeAreaProvider>
        <SafeAreaView>
          <Stack.Navigator
            initialRouteName="Main"
            screenOptions={{
              header: () => null,
              animationEnabled: true,
              gestureEnabled: false,
            }}>
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="PersonalData" component={PersonalData} />
            <Stack.Screen name="Preferences" component={Preferences} />
            <Stack.Screen name="Privacy" component={Privacy} />
          </Stack.Navigator>
        </SafeAreaView>
      </SafeAreaProvider>
    </Background>
  );
};

export default SignedInStack;
