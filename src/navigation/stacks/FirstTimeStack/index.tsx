import {createStackNavigator} from '@react-navigation/stack';
import ChooseUser from '../../../screens/ChooseUser';
import SignedInStack from '../SignedInStack';
import {RootStackParamList} from '../../../types/navigation';

const Stack = createStackNavigator<RootStackParamList>();

const FirstTimeStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={'ChooseUser'}
      screenOptions={{
        header: () => null,
        animationEnabled: true,
        gestureEnabled: false,
      }}>
      <Stack.Screen name="ChooseUser" component={ChooseUser} />
      <Stack.Screen name="SignedIn" component={SignedInStack} />
    </Stack.Navigator>
  );
};

export default FirstTimeStack;
