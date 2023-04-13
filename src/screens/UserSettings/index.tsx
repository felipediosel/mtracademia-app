import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'styled-components/native';

import {
  ShieldCheck,
  SignOut,
  SlidersHorizontal,
  User,
  UserCircle,
} from 'phosphor-react-native';

import useUser from '../../hooks/useUser';
import {signOut} from '../../hooks/useAuth';
import useVersion from '../../hooks/useVersion';

import {ActivityIndicator} from '../../components/ActivityIndicator';
import {Background} from '../../components/Background';
import {Container} from '../../components/Container';
import {MenuItem} from '../../components/Menu/MenuItem';
import {Text} from '../../components/Texts/Text';
import {TextSmall} from '../../components/Texts/TextSmall';
import {AlertSignOut} from '../../components/Alerts/AlertSignOut';
import {MenuHeader} from '../../components/Menu/MenuHeader';
import {formatDate} from '../../utils/date';

const UserSettings = (): JSX.Element => {
  const navigation = useNavigation();
  const theme = useTheme();

  const {isLoading: isUserIsLoading, userData} = useUser();

  const {isLoading: isVersionIsLoading, version} = useVersion();

  const [userName, setUserName] = useState<string>('');
  const [lastSync, setLastSync] = useState<string>('');

  const [showAlertSignOut, setShowAlertSignOut] = useState<boolean>(false);

  useEffect(() => {
    if (userData) {
      setUserName(userData.nome);
    }
  }, [userData]);

  useEffect(() => {
    if (version) {
      setLastSync(formatDate(version.data().datahora));
    }
  }, [version]);

  return (
    <>
      <Background>
        <MenuHeader upTitle="Minha" downTitle="Conta Mtr" />
        <Container
          style={{
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: '100%',
            width: '100%',
          }}>
          <Container
            style={{
              height: '30%',
              width: '100%',
              gap: theme.responsive.hp('1%'),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <User color={theme.colors.pr} size={theme.icons.sizes.xl} />
            {isUserIsLoading ? (
              <ActivityIndicator />
            ) : (
              <>
                <Text>{userName ? userName : '---'}</Text>
                <TextSmall style={{color: theme.colors.ts}}>Aluno</TextSmall>
              </>
            )}
          </Container>
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
              onPress={() => {
                navigation.navigate('PersonalData');
              }}
              icon={
                <UserCircle
                  color={theme.colors.pr}
                  size={theme.icons.sizes.sm}
                />
              }
              title="Dados Pessoais"
            />
            <MenuItem
              onPress={() => {
                navigation.navigate('Preferences');
              }}
              icon={
                <SlidersHorizontal
                  color={theme.colors.pr}
                  size={theme.icons.sizes.sm}
                />
              }
              title="Preferências"
            />
            <MenuItem
              onPress={() => {
                navigation.navigate('Privacy');
              }}
              icon={
                <ShieldCheck
                  color={theme.colors.pr}
                  size={theme.icons.sizes.sm}
                />
              }
              title="Privacidade"
            />
            <MenuItem
              onPress={() => {
                setShowAlertSignOut(true);
              }}
              icon={
                <SignOut color={theme.colors.pr} size={theme.icons.sizes.sm} />
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
            <TextSmall style={{color: theme.colors.ts}}>Versão 1.0.0</TextSmall>
            {isUserIsLoading ? (
              <ActivityIndicator />
            ) : (
              <>
                <TextSmall style={{color: theme.colors.ts}}>
                  Última sincronização:{'\n'}
                  {lastSync ? lastSync : '---'}
                </TextSmall>
              </>
            )}
          </Container>
        </Container>
      </Background>
      <AlertSignOut
        show={showAlertSignOut}
        onCancelPressed={() => {
          setShowAlertSignOut(false);
        }}
        onConfirmPressed={() => {
          setShowAlertSignOut(false);
          signOut();
        }}
      />
    </>
  );
};

export default UserSettings;
