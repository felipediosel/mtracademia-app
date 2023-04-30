import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'styled-components';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  House,
  Calendar,
  CurrencyDollarSimple,
  Person,
} from 'phosphor-react-native';
import Home from '../../screens/Home';
import Finance from '../../screens/Finance';
import Plan from '../../screens/Plan';
import Body from '../../screens/Body';
import Workout from '../../screens/Workout';
import {HeaderLeft} from '../../components/TabBar/HeaderLeft';
import {HeaderRight} from '../../components/TabBar/HeaderRight';
import {HeaderTitle} from '../../components/TabBar/HeaderTitle';
import useAuth from '../../contexts/auth/hooks/useAuth';
import * as S from '../styles';

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
          tabBarIcon: ({color, size}) => <House size={size} color={color} />,
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
          tabBarIcon: ({color, size}) => <Calendar size={size} color={color} />,
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
          tabBarIcon: ({color, size}) => (
            <CurrencyDollarSimple size={size} color={color} />
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
        component={Body}
        options={{
          tabBarIcon: ({color, size}) => <Person size={size} color={color} />,
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
