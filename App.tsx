import {NavigationContainer as NavigationProvider} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as ReduxProvider} from 'react-redux';
import ThemeProvider from './src/contexts/theme/provider';
import AuthProvider from './src/contexts/auth/provider';
import StatusBar from './src/components/StatusBar';
import Routes from './src/routes';
import {store} from './src/redux/store';

const App: React.FC = () => {
  return (
    <NavigationProvider>
      <SafeAreaProvider>
        <ReduxProvider store={store}>
          <AuthProvider>
            <ThemeProvider>
              <StatusBar />
              <Routes />
            </ThemeProvider>
          </AuthProvider>
        </ReduxProvider>
      </SafeAreaProvider>
    </NavigationProvider>
  );
};

export default App;
