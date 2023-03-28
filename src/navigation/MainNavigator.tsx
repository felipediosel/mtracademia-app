import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

import {useEffect, useState} from 'react';

import useGetOnboardingStatus from '../hooks/useGetOnboardingStatus';
import useAuth from '../hooks/useAuth';
import useFirebaseLink from '../hooks/useFirebaseLink';
import useStatusBar from '../hooks/useStatusBar';

import {Routes} from '../routes';
import {Loading} from '../screens/Loading';
import Login from '../screens/Login';

import {Background} from '../components/Background';
import {StatusBar} from '../components/StatusBar';
import {SafeAreaView} from '../components/SafeAreaView';
import {IntroSlider} from '../components/Slider/IntroSlider';
import {AlertEmailLinkInvalid} from '../components/Alerts/AlertEmailLinkInvalid';

const Stack = createStackNavigator();

const MainNavigator = () => {
  const navigation = useNavigation();

  const {isFirstLaunch, isLoading: isLoadingFirstLaunch} =
    useGetOnboardingStatus();

  const {isSignedIn} = useAuth();

  const [isLoading, isError] = useFirebaseLink();

  const {} = useStatusBar();

  const [showAlertEmailLinkInvalid, setShowAlertEmailLinkInvalid] =
    useState(false);

  useEffect(() => {
    setShowAlertEmailLinkInvalid(false);

    if (isError) {
      setShowAlertEmailLinkInvalid(true);
    }

    if (isLoading || isLoadingFirstLaunch) {
      return navigation.navigate('Loading');
    }

    if (isSignedIn) {
      if (isFirstLaunch) {
        return navigation.navigate('Intro');
      }

      return navigation.navigate('Routes');
    }

    return navigation.navigate('Login');
  }, [isError, isLoading, isSignedIn, isFirstLaunch, isLoadingFirstLaunch]);

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
            <Stack.Screen name="Routes" component={Routes} />
            <Stack.Screen name="RoutesIntro" component={Routes} />
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

export default MainNavigator;
