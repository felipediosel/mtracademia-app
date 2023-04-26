import {
  Platform,
  StatusBarProps,
  StatusBar as StatusBarReactNative,
} from 'react-native';

import {useTheme} from 'styled-components/native';

const StatusBar: React.FC<StatusBarProps> = ({...rest}) => {
  const theme = useTheme();

  StatusBarReactNative.setBarStyle(
    theme.type === 'dark' ? 'light-content' : 'dark-content',
  );

  if (Platform.OS === 'android') {
    StatusBarReactNative.setBackgroundColor(theme.colors.bg);
  }

  return <StatusBarReactNative {...rest} />;
};

export default StatusBar;
