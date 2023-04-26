import {useEffect, useState} from 'react';
import {getUserPreferences} from '../../../hooks/useUserPreferences';
import useTheme from './useTheme';

const useUserTheme = () => {
  const {setTheme} = useTheme();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      const userPreferences = await getUserPreferences();

      if (userPreferences && userPreferences.theme) {
        setTheme(userPreferences.theme);
      }

      setIsLoading(false);
    })();
  });

  return {isLoading};
};

export default useUserTheme;
