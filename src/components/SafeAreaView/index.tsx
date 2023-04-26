import {View, ViewProps} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type SafeAreaViewProps = ViewProps & {
  children: JSX.Element;
};

const SafeAreaView: React.FC<SafeAreaViewProps> = ({children, ...rest}) => {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: safeAreaInsets.top,
        paddingLeft: safeAreaInsets.left,
        paddingRight: safeAreaInsets.right,
        paddingBottom: 0,
      }}
      {...rest}>
      {children}
    </View>
  );
};

export default SafeAreaView;
