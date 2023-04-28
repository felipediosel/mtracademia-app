import {useMemo, useState} from 'react';
import Loading from '../screens/Loading';
import Login from '../screens/Login';
import useAuth from '../contexts/auth/hooks/useAuth';
import FirstTimeStack from '../navigation/stacks/FirstTimeStack';
import SignedInStack from '../navigation/stacks/SignedInStack';
import {AlertEmailLinkInvalid} from '../components/Alerts/AlertEmailLinkInvalid';

const Routes: React.FC = () => {
  const {loading, error, signed, user, users} = useAuth();

  const [showAlertLinkError, setShowAlertLinkError] = useState(false);

  const Component: React.ReactNode = useMemo(() => {
    console.log(loading, error, signed, user, users);
    if (loading) {
      return <Loading />;
    }

    if (signed) {
      return <SignedInStack />;
    }

    if (users && users.length > 1) {
      return <FirstTimeStack />;
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
