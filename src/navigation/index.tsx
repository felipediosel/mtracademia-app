import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';

import useStatusBar from '../hooks/useStatusBar';
import useAuth from '../hooks/useAuth';
import useFirebaseLink from '../hooks/useFirebaseLink';

import Routes from '../routes';
import {ChooseUser} from '../screens/ChooseUser';
import {Loading} from '../screens/Loading';
import Login from '../screens/Login';

import {Background} from '../components/Background';
import {StatusBar} from '../components/StatusBar';
import {SafeAreaView} from '../components/SafeAreaView';
import {IntroSlider} from '../components/Slider/IntroSlider';
import {AlertEmailLinkInvalid} from '../components/Alerts/AlertEmailLinkInvalid';

export type RootStackParamList = {
  Loading: undefined;
  Login: undefined;
  Intro: undefined;
  ChooseUser: undefined;
  Routes: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Navigator = () => {
  const navigation = useNavigation();

  const {} = useStatusBar();
  const {isLoading: isLoadingAuth, isFirstTime, isSignedIn} = useAuth();
  const [isLoading, isError] = useFirebaseLink();

  const [showAlertEmailLinkInvalid, setShowAlertEmailLinkInvalid] =
    useState(false);

  useEffect(() => {
    setShowAlertEmailLinkInvalid(false);

    if (isError) {
      setShowAlertEmailLinkInvalid(true);
    }

    if (isLoading || isLoadingAuth) {
      return navigation.navigate('Loading');
    }

    if (isSignedIn) {
      if (isFirstTime) {
        return navigation.navigate('Intro');
      }

      return navigation.navigate('ChooseUser');
    }

    return navigation.navigate('Login');
  }, [isError, isFirstTime, isSignedIn, isLoading, isLoadingAuth]);

  return (
    <>
      <Background>
        <StatusBar />
        <SafeAreaView isSignedIn={isSignedIn}>
          <Stack.Navigator
            screenOptions={{header: () => null, animationEnabled: false}}>
            <Stack.Screen name="Loading" component={Loading} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Intro" component={IntroSlider} />
            <Stack.Screen name="ChooseUser" component={ChooseUser} />
            <Stack.Screen name="Routes" component={Routes} />
          </Stack.Navigator>
        </SafeAreaView>
      </Background>
      <AlertEmailLinkInvalid
        show={showAlertEmailLinkInvalid}
        onCancelPressed={() => {
          setShowAlertEmailLinkInvalid(false);
        }}
        onConfirmPressed={() => {
          setShowAlertEmailLinkInvalid(false);
        }}
        onDismiss={() => {
          setShowAlertEmailLinkInvalid(false);
        }}
      />
    </>
  );
};

export default Navigator;
