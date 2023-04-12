import {useEffect, useState} from 'react';
import {useTheme} from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  Files,
  Wallet,
  DiamondsFour,
  PersonSimpleRun,
  Barbell,
} from 'phosphor-react-native';

import useUser from '../../hooks/useUser';

import Home from '../../screens/Home';
import Finance from '../../screens/Finance';
import Plan from '../../screens/Plan';
import Body from '../../screens/Body';
import Workout from '../../screens/Workout';

import {ActivityIndicator} from '../../components/ActivityIndicator';
import {HeaderLeft} from '../../components/TabBar/HeaderLeft';
import {HeaderRight} from '../../components/TabBar/HeaderRight';
import {HeaderTitle} from '../../components/TabBar/HeaderTitle';

import * as S from '../styles';

const Tab = createBottomTabNavigator();

const TabNavigator = (): JSX.Element => {
  const navigation = useNavigation();
  const theme = useTheme();

  const {isLoading: isUserIsLoading, userData} = useUser();

  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    if (userData) {
      setUserName(userData.nome);
    }
  }, [userData]);

  const headerRight = () => {
    return (
      <HeaderRight
        onPress={() => {
          navigation.navigate('UserSettings');
        }}
      />
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
        name="Plano"
        component={Plan}
        options={{
          tabBarIcon: ({color, size}) => <Files size={size} color={color} />,
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
          tabBarIcon: ({color, size}) => <Wallet size={size} color={color} />,
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
        name="Início"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <DiamondsFour size={size} color={color} />
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
            return (
              <HeaderTitle
                upTitle="Bem vindo,"
                downTitle={
                  <>{isUserIsLoading ? <ActivityIndicator /> : userName}</>
                }
              />
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
            <PersonSimpleRun size={size} color={color} />
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
            return <HeaderTitle upTitle="Meu" downTitle="Corpo" />;
          },
          headerStatusBarHeight: 2,
          headerTitleAlign: 'left',
        }}
      />
      <Tab.Screen
        name="Treino"
        component={Workout}
        options={{
          tabBarIcon: ({color, size}) => <Barbell size={size} color={color} />,
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
            return <HeaderTitle upTitle="Meu" downTitle="Treino" />;
          },
          headerStatusBarHeight: 2,
          headerTitleAlign: 'left',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
