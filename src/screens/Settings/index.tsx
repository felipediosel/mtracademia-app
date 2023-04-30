import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'styled-components/native';

import {
  ShieldCheck,
  SignOut,
  SlidersHorizontal,
  UserCircle,
} from 'phosphor-react-native';

import {Background} from '../../components/Background';
import {Container} from '../../components/Container';
import {MenuItem} from '../../components/Menu/MenuItem';
import {AlertSignOut} from '../../components/Alerts/AlertSignOut';
import {MenuHeader} from '../../components/Menu/MenuHeader';
import useAuth from '../../contexts/auth/hooks/useAuth';
import SafeAreaView from '../../components/SafeAreaView';
import {User} from './components/User';
import {Version} from './components/Version';
import {LastSync} from './components/LastSync';

const Settings: React.FC = () => {
  const navigation = useNavigation();
  const theme = useTheme();

  const [showAlertSignOut, setShowAlertSignOut] = useState<boolean>(false);

  const {signOut} = useAuth();

  const handlePersonalData = () => {
    navigation.navigate('PersonalData');
  };

  const handlePreferences = () => {
    navigation.navigate('Preferences');
  };

  const handlePrivacy = () => {
    navigation.navigate('Privacy');
  };

  const handleSignOut = () => {
    setShowAlertSignOut(true);
  };

  const handleSignOutCancel = () => {
    setShowAlertSignOut(false);
  };

  const handleSignOutConfirm = () => {
    setShowAlertSignOut(false);
    signOut();
  };

  return (
    <>
      <Background>
        <SafeAreaView>
          <MenuHeader upTitle="Minha" downTitle="Conta Mtr" />
          <Container
            style={{
              justifyContent: 'flex-start',
              alignItems: 'center',
              height: '100%',
              width: '100%',
            }}>
            <User />
            <Container
              style={{
                height: '50%',
                width: '100%',
                gap: theme.responsive.hp('5%'),
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                paddingLeft: theme.responsive.hp('3%'),
              }}>
              <MenuItem
                onPress={handlePersonalData}
                icon={
                  <UserCircle
                    color={theme.colors.pr}
                    size={theme.icons.sizes.sm}
                  />
                }
                title="Dados Pessoais"
              />
              <MenuItem
                onPress={handlePreferences}
                icon={
                  <SlidersHorizontal
                    color={theme.colors.pr}
                    size={theme.icons.sizes.sm}
                  />
                }
                title="Preferências"
              />
              <MenuItem
                onPress={handlePrivacy}
                icon={
                  <ShieldCheck
                    color={theme.colors.pr}
                    size={theme.icons.sizes.sm}
                  />
                }
                title="Privacidade"
              />
              <MenuItem
                onPress={handleSignOut}
                icon={
                  <SignOut
                    color={theme.colors.pr}
                    size={theme.icons.sizes.sm}
                  />
                }
                title="Sair"
              />
            </Container>
            <Container
              style={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                width: '100%',
              }}>
              <Version />
              <LastSync />
            </Container>
          </Container>
        </SafeAreaView>
      </Background>
      <AlertSignOut
        show={showAlertSignOut}
        onCancelPressed={handleSignOutCancel}
        onConfirmPressed={handleSignOutConfirm}
      />
    </>
  );
};

export default Settings;
