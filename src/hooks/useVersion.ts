import {useState, useEffect} from 'react';

import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import {getLastVersion} from '../data/Versao';

const useVersion = () => {
  const [isVersionIsLoading, setIsVersionIsLoading] = useState<boolean>(true);
  const [version, setVersion] =
    useState<FirebaseFirestoreTypes.DocumentData | null>(null);

  useEffect(() => {
    getLastVersion().then(
      (version: FirebaseFirestoreTypes.DocumentData | null) => {
        setVersion(version);
        setIsVersionIsLoading(false);
      },
    );
  }, []);

  return {
    isLoading: isVersionIsLoading,
    version,
  };
};

export default useVersion;
