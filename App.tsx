import {NavigationContainer as NavigationProvider} from '@react-navigation/native';
import ThemeProvider from './src/contexts/theme/provider';
import AuthProvider from './src/contexts/auth/provider';
import StatusBar from './src/components/StatusBar';
import Routes from './src/routes';

const App: React.FC = () => {
  return (
    <NavigationProvider>
      <AuthProvider>
        <ThemeProvider>
          <StatusBar />
          <Routes />
        </ThemeProvider>
      </AuthProvider>
    </NavigationProvider>
  );
};

export default App;
