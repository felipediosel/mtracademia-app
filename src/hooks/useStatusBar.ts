import {Platform, StatusBar as StatusBarNative} from 'react-native';
import {useTheme} from 'styled-components';
import {useEffect} from 'react';

const useStatusBar = () => {
  const theme = useTheme();

  useEffect(() => {
    StatusBarNative.setBarStyle(
      theme.type === 'dark' ? 'light-content' : 'dark-content',
    );

    if (Platform.OS === 'android') {
      StatusBarNative.setBackgroundColor(theme.colors.bg);
    }
  }, []);

  return {StatusBarNative};
};

export default useStatusBar;
