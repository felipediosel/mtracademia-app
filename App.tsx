import {Theme} from './src/templates/theme';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes';

const App = () => {
  return (
    <Theme>
      <SafeAreaProvider>
        <NavigationContainer>
          <Routes.Navigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </Theme>
  );
};

export default App;
