import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useGetOnboardingStatus = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);
  const [isFirstLaunchIsLoading, setIsFirstLaunchIsLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('user')
      .then(hasFirstLaunched => {
        if (hasFirstLaunched === null) {
          setIsFirstLaunch(true);
        }
      })
      .finally(() => {
        setIsFirstLaunchIsLoading(false);
      });
  }, [isFirstLaunch]);

  return {
    isFirstLaunch: isFirstLaunch,
    isLoading: isFirstLaunchIsLoading,
  };
};

export default useGetOnboardingStatus;
