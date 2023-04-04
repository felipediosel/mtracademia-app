import {Theme} from './src/templates/theme';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './src/navigation';

const App = () => {
  return (
    <Theme>
      <SafeAreaProvider>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </Theme>
  );
};

export default App;
