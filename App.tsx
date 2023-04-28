import {NavigationContainer as NavigationProvider} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ThemeProvider from './src/contexts/theme/provider';
import AuthProvider from './src/contexts/auth/provider';
import StatusBar from './src/components/StatusBar';
import Routes from './src/routes';

const App: React.FC = () => {
  return (
    <NavigationProvider>
      <SafeAreaProvider>
        <AuthProvider>
          <ThemeProvider>
            <StatusBar />
            <Routes />
          </ThemeProvider>
        </AuthProvider>
      </SafeAreaProvider>
    </NavigationProvider>
  );
};

export default App;
