import {Button} from 'react-native';
import auth from '@react-native-firebase/auth';

import useUser from '../../hooks/useUser';

export function Plan() {
  const {signOut} = useUser();

  return (
    <Button
      title="Sair"
      onPress={() => {
        auth()
          .signOut()
          .then(() => {
            signOut();
          });
      }}
    />
  );
}
