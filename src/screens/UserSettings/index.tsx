import {useEffect, useState} from 'react';
import {useTheme} from 'styled-components/native';
import auth from '@react-native-firebase/auth';

import {
  ShieldCheck,
  SignOut,
  SlidersHorizontal,
  User,
  UserCircle,
} from 'phosphor-react-native';

import useUser from '../../hooks/useUser';

import {ActivityIndicator} from '../../components/ActivityIndicator';
import {Background} from '../../components/Background';
import {Container} from '../../components/Container';
import {MenuItem} from '../../components/Menu/MenuItem';
import {Text} from '../../components/Texts/Text';
import {TextSmall} from '../../components/Texts/TextSmall';
import {AlertSignOut} from '../../components/Alerts/AlertSignOut';
import {MenuHeader} from '../../components/Menu/MenuHeader';

const UserSettings = (): JSX.Element => {
  const theme = useTheme();

  const {isLoading: isUserIsLoading, user, signOut, formatCpf} = useUser();

  const [userName, setUserName] = useState<string>('');
  const [userCpf, setUserCpf] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [showAlertSignOut, setShowAlertSignOut] = useState<boolean>(false);

  useEffect(() => {
    if (user) {
      setUserName(user.nome);
      setUserEmail(user.email);

      if (user.cpf) {
        setUserCpf(formatCpf(user.cpf));
      }
    }
  }, [user]);
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
                <Text>{userName}</Text>
                <TextSmall style={{color: theme.colors.ts}}>
                  {userCpf ? userCpf : '---'}
                </TextSmall>
                <TextSmall
                  style={{color: theme.colors.ts, textTransform: 'lowercase'}}>
                  {userEmail ? userEmail : '---'}
                </TextSmall>
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
              icon={
                <UserCircle
                  color={theme.colors.pr}
                  size={theme.icons.sizes.sm}
                />
              }
              title="Dados Pessoais"></MenuItem>
            <MenuItem
              icon={
                <SlidersHorizontal
                  color={theme.colors.pr}
                  size={theme.icons.sizes.sm}
                />
              }
              title="Preferências"></MenuItem>
            <MenuItem
              icon={
                <ShieldCheck
                  color={theme.colors.pr}
                  size={theme.icons.sizes.sm}
                />
              }
              title="Privacidade"></MenuItem>
            <MenuItem
              onPress={() => {
                setShowAlertSignOut(true);
              }}
              icon={
                <SignOut color={theme.colors.pr} size={theme.icons.sizes.sm} />
              }
              title="Sair"></MenuItem>
          </Container>
          <Container
            style={{
              justifyContent: 'flex-start',
              alignItems: 'center',
              width: '100%',
            }}>
            <TextSmall style={{color: theme.colors.ts}}>Versão 1.0.0</TextSmall>
            <TextSmall style={{color: theme.colors.ts}}>
              Última sincronização:{'\n'} 10/04/2022 às 13:05
            </TextSmall>
          </Container>
        </Container>
      </Background>
      <AlertSignOut
        show={showAlertSignOut}
        onCancelPressed={() => {
          setShowAlertSignOut(false);
        }}
        onConfirmPressed={() => {
          auth()
            .signOut()
            .then(() => {
              signOut();
            });
        }}
      />
    </>
  );
};

export default UserSettings;
