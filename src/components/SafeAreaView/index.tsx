import {useSafeAreaInsets} from 'react-native-safe-area-context';

import * as S from './styles';

type SafeAreaViewProps = {
  children: React.ReactNode;
  isSignedIn: boolean | undefined;
};

export function SafeAreaView({
  children,
  isSignedIn,
  ...rest
}: SafeAreaViewProps) {
  const insets = useSafeAreaInsets();

  return (
    <S.SafeAreaView
      {...rest}
      style={{
        paddingTop: isSignedIn ? insets.top : 0,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        paddingBottom: 0,
      }}>
      {children}
    </S.SafeAreaView>
  );
}
