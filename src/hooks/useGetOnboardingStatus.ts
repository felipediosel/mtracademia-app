import {useState, useEffect} from 'react';

import useUser from '../hooks/useUser';

const useGetOnboardingStatus = () => {
  const {user, isLoading: isUserIsLoading} = useUser();
  const [isFirstLaunch, setIsFirstLaunch] = useState(true);

  useEffect(() => {
    if (user) {
      setIsFirstLaunch(false);
    }
  }, [user]);

  return {
    isFirstLaunch,
    isLoading: isUserIsLoading,
  };
};

export default useGetOnboardingStatus;
