import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'styled-components';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  House,
  Calendar,
  CurrencyDollarSimple,
  Person,
  CalendarBlank,
} from 'phosphor-react-native';
import Home from '../../screens/Home';
import Finance from '../../screens/Finance';
import Plan from '../../screens/Plan';
import MyPhysicalEvaluations from '../../screens/MyPhysicalEvaluations';
import Workout from '../../screens/Workout';
import {HeaderLeft} from '../../components/TabBar/HeaderLeft';
import {HeaderRight} from '../../components/TabBar/HeaderRight';
import {HeaderTitle} from '../../components/TabBar/HeaderTitle';
import useAuth from '../../contexts/auth/hooks/useAuth';
import * as S from '../styles';
import {View} from 'react-native';

const Tab = createBottomTabNavigator();

const SignedTab: React.FC = () => {
  const navigation = useNavigation();
  const theme = useTheme();

  const {user} = useAuth();

  const headerRight = () => {
    return (
      <HeaderRight
        onPress={() => {
          navigation.navigate('Settings');
        }}
      />
    );
  };

  const headerTitleInicio = () => {
    return (
      <HeaderTitle upTitle="Bem vindo," downTitle={user ? user.name : '---'} />
    );
  };

  const getTabBarIcon = (focused: boolean, icon: JSX.Element) => {
    return focused ? (
      <View
        style={{
          borderTopWidth: 2,
          borderColor: theme.colors.pr,
          width: '50%',
          height: '100%',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View>{icon}</View>
      </View>
    ) : (
      <View
        style={{
          height: '100%',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {icon}
      </View>
    );
  };

  return (
    <Tab.Navigator
      initialRouteName="Início"
      screenOptions={({route}) => ({
        tabBarBackground: () => <S.TabBar />,
        headerBackground: () => <S.Header />,
        tabBarActiveTintColor: theme.colors.pr,
        tabBarInactiveTintColor: theme.colors.ts,
        headerTintColor: theme.colors.tp,
        tabBarShowLabel: false,
      })}>
      <Tab.Screen
        name="Início"
        component={Home}
        options={{
          tabBarIcon: ({focused, color, size}) =>
            getTabBarIcon(focused, <House color={color} size={size} />),
          headerLeft: () => {
            return <HeaderLeft />;
          },
          headerLeftContainerStyle: {
            paddingLeft: theme.responsive.hp('3%'),
          },
          headerRight: headerRight,
          headerRightContainerStyle: {
            paddingRight: theme.responsive.hp('3%'),
          },
          headerTitle: headerTitleInicio,
          headerStatusBarHeight: 2,
          headerTitleAlign: 'left',
        }}
      />
      <Tab.Screen
        name="Plano"
        component={Plan}
        options={{
          tabBarIcon: ({focused, color, size}) =>
            getTabBarIcon(focused, <CalendarBlank size={size} color={color} />),
          headerLeft: () => {
            return <HeaderLeft />;
          },
          headerLeftContainerStyle: {
            paddingLeft: theme.responsive.hp('3%'),
          },
          headerRight: headerRight,
          headerRightContainerStyle: {
            paddingRight: theme.responsive.hp('3%'),
          },
          headerTitle: () => {
            return <HeaderTitle upTitle="Meu" downTitle="Plano" />;
          },
          headerStatusBarHeight: 2,
          headerTitleAlign: 'left',
        }}
      />
      <Tab.Screen
        name="Financeiro"
        component={Finance}
        options={{
          tabBarIcon: ({focused, color, size}) =>
            getTabBarIcon(
              focused,
              <CurrencyDollarSimple size={size} color={color} />,
            ),
          headerLeft: () => {
            return <HeaderLeft />;
          },
          headerLeftContainerStyle: {
            paddingLeft: theme.responsive.hp('3%'),
          },
          headerRight: headerRight,
          headerRightContainerStyle: {
            paddingRight: theme.responsive.hp('3%'),
          },
          headerTitle: () => {
            return <HeaderTitle upTitle="Meu" downTitle="Financeiro" />;
          },
          headerStatusBarHeight: 2,
          headerTitleAlign: 'left',
        }}
      />
      <Tab.Screen
        name="Corpo"
        component={MyPhysicalEvaluations}
        options={{
          tabBarIcon: ({focused, color, size}) =>
            getTabBarIcon(focused, <Person size={size} color={color} />),
          headerLeft: () => {
            return <HeaderLeft />;
          },
          headerLeftContainerStyle: {
            paddingLeft: theme.responsive.hp('3%'),
          },
          headerRight: headerRight,
          headerRightContainerStyle: {
            paddingRight: theme.responsive.hp('3%'),
          },
          headerTitle: () => {
            return (
              <HeaderTitle upTitle="Minhas" downTitle="Avaliações Físicas" />
            );
          },
          headerStatusBarHeight: 2,
          headerTitleAlign: 'left',
        }}
      />
    </Tab.Navigator>
  );
};

export default SignedTab;
