import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';

import useStatusBar from '../../hooks/useStatusBar';
import useAuth from '../../hooks/useAuth';
import useFirebaseLink from '../../hooks/useFirebaseLink';
import useChooseUser from '../../hooks/useChooseUser';

import TabNavigator from './tab.routes';

import Loading from '../../screens/Loading';
import Login from '../../screens/Login';
import ChooseUser from '../../screens/ChooseUser';
import UserSettings from '../../screens/UserSettings';
import PersonalData from '../../screens/PersonalData';

import {Background} from '../../components/Background';
import {StatusBar} from '../../components/StatusBar';
import {SafeAreaView} from '../../components/SafeAreaView';
import {IntroSlider} from '../../components/Slider/IntroSlider';
import {AlertEmailLinkInvalid} from '../../components/Alerts/AlertEmailLinkInvalid';

export type RootStackParamList = {
  Loading: undefined;
  Login: undefined;
  Intro: undefined;
  ChooseUser: undefined;
  Home: undefined;
  UserSettings: undefined;
  PersonalData: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Navigator = (): JSX.Element => {
  const navigation = useNavigation();

  const {} = useStatusBar();

  const {isLoading: isLoadingAuth, isFirstTime, isSignedIn} = useAuth();
  const [isLoading, isError] = useFirebaseLink();
  const {isChooseUser, isLoading: isChooseUserIsLoading} = useChooseUser();

  const [showAlertEmailLinkInvalid, setShowAlertEmailLinkInvalid] =
    useState(false);

  useEffect(() => {
    setShowAlertEmailLinkInvalid(false);

    if (isError) {
      setShowAlertEmailLinkInvalid(true);
    }

    if (isLoading || isLoadingAuth || isChooseUserIsLoading) {
      return navigation.navigate('Loading');
    }

    if (isSignedIn) {
      if (isFirstTime) {
        return navigation.navigate('Intro');
      }

      if (isChooseUser) {
        return navigation.navigate('ChooseUser');
      }

      return navigation.navigate('Home');
    }

    return navigation.navigate('Login');
  }, [isLoading, isLoadingAuth, isChooseUserIsLoading, isSignedIn]);

  return (
    <>
      <Background>
        <StatusBar />
        <SafeAreaView isSignedIn={isSignedIn}>
          <Stack.Navigator
            screenOptions={{
              header: () => null,
              animationEnabled: true,
              gestureEnabled: false,
            }}>
            <Stack.Screen name="Loading" component={Loading} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Intro" component={IntroSlider} />
            <Stack.Screen name="ChooseUser" component={ChooseUser} />
            <Stack.Screen name="Home" component={TabNavigator} />
            <Stack.Screen name="UserSettings" component={UserSettings} />
            <Stack.Screen name="PersonalData" component={PersonalData} />
          </Stack.Navigator>
        </SafeAreaView>
      </Background>
      <AlertEmailLinkInvalid
        show={showAlertEmailLinkInvalid}
        onConfirmPressed={() => {
          setShowAlertEmailLinkInvalid(false);
        }}
      />
    </>
  );
};

export default Navigator;
