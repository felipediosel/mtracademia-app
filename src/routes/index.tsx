import {useMemo, useState} from 'react';
import useAuth from '../contexts/auth/hooks/useAuth';
import Loading from '../screens/Loading';
import ChooseUser from '../screens/ChooseUser';
import Login from '../screens/Login';
import {AlertEmailLinkInvalid} from '../components/Alerts/AlertEmailLinkInvalid';
import SignedStack from './navigation/signed-stack.routes';

const Routes: React.FC = () => {
  const {loading, error, signed, users} = useAuth();

  const [showAlertLinkError, setShowAlertLinkError] = useState(false);

  const Component: React.ReactNode = useMemo(() => {
    if (loading) {
      return <Loading />;
    }

    if (signed) {
      return <SignedStack />;
    }

    if (users && users.length > 1) {
      return <ChooseUser />;
    }

    return <Login />;
  }, [loading, signed, users]);

  useMemo(() => {
    setShowAlertLinkError(error ? true : false);
  }, [error]);

  return (
    <>
      {Component}
      <AlertEmailLinkInvalid
        show={showAlertLinkError}
        onConfirmPressed={() => {
          setShowAlertLinkError(false);
        }}
      />
    </>
  );
};

export default Routes;
