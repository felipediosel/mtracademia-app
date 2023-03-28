import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from 'styled-components';

const Tab = createBottomTabNavigator();

import {Home} from '../screens/Home';
import {Finance} from '../screens/Finance';
import {Plan} from '../screens/Plan';
import {Body} from '../screens/Body';
import {Workout} from '../screens/Workout';

import * as S from './styles';

import useUser from '../hooks/useUser';

import {
  SquaresFour,
  CurrencyDollar,
  Receipt,
  Person,
  Barbell,
  UserList,
} from 'phosphor-react-native';
import {Image} from 'react-native';
import {Text} from '../components/Texts/Text';

export function TabRoutes() {
  const theme = useTheme();

  const {user} = useUser();

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
        name="Plano"
        component={Plan}
        options={{
          tabBarIcon: ({color, size}) => (
            <Receipt weight="fill" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Financeiro"
        component={Finance}
        options={{
          tabBarIcon: ({color, size}) => (
            <CurrencyDollar weight="bold" size={size} color={color} />
          ),
          headerLeft: () => {
            return (
              <Image
                source={require('../assets/img/mtr-logo-dark.png')}
                style={{
                  width: 45,
                  height: 41,
                }}
              />
            );
          },
          headerLeftContainerStyle: {
            paddingLeft: theme.responsive.hp('3%'),
          },
          headerRight: () => {
            return <UserList weight="bold" size={25} color={theme.colors.ts} />;
          },
          headerRightContainerStyle: {
            paddingRight: theme.responsive.hp('3%'),
          },
          headerTitle: () => {
            return (
              <Text
                style={{
                  textAlign: 'left',
                }}>
                <Text style={{color: theme.colors.ts, textAlign: 'left'}}>
                  Meu
                </Text>
                {'\n'}Financeiro
              </Text>
            );
          },
          headerStatusBarHeight: 2,
          headerTitleAlign: 'left',
        }}
      />
      <Tab.Screen
        name="Início"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <SquaresFour weight="fill" size={size} color={color} />
          ),
          headerLeft: () => {
            return (
              <Image
                source={require('../assets/img/mtr-logo-dark.png')}
                style={{
                  width: 45,
                  height: 41,
                }}
              />
            );
          },
          headerLeftContainerStyle: {
            paddingLeft: theme.responsive.hp('3%'),
          },
          headerRight: () => {
            return <UserList weight="bold" size={25} color={theme.colors.ts} />;
          },
          headerRightContainerStyle: {
            paddingRight: theme.responsive.hp('3%'),
          },
          headerTitle: () => {
            return (
              <Text
                style={{
                  textAlign: 'left',
                }}>
                <Text style={{color: theme.colors.ts, textAlign: 'left'}}>
                  Bem vindo,
                </Text>
                {'\n'}
                {user ? user.nome : ''}
              </Text>
            );
          },
          headerStatusBarHeight: 2,
          headerTitleAlign: 'left',
        }}
      />
      <Tab.Screen
        name="Corpo"
        component={Body}
        options={{
          tabBarIcon: ({color, size}) => (
            <Person weight="fill" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Treino"
        component={Workout}
        options={{
          tabBarIcon: ({color, size}) => (
            <Barbell weight="fill" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
