import {useMemo, useState} from 'react';
import Loading from '../screens/Loading';
import Login from '../screens/Login';
import useAuth from '../contexts/auth/hooks/useAuth';
import FirstTimeStack from '../navigation/stacks/FirstTimeStack';
import SignedInStack from '../navigation/stacks/SignedInStack';
import {AlertEmailLinkInvalid} from '../components/Alerts/AlertEmailLinkInvalid';

const Routes: React.FC = () => {
  const {loading, error, signed, user, intro} = useAuth();

  const [showAlertLinkError, setShowAlertLinkError] = useState(false);

  const Component: JSX.Element = useMemo(() => {
    console.log(loading, error, signed, user, intro);
    if (loading) {
      return <Loading />;
    }

    if (signed) {
      if (!user) {
        return <FirstTimeStack />;
      }

      return <SignedInStack />;
    }

    return <Login />;
  }, [loading, signed, user]);

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
