import React, {useState} from 'react';

import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';

import {useTheme} from 'styled-components';

import {getPessoaQuerySnapshotFromEmail} from '../../db/Pessoa';

import {sendSignInLinkToEmail} from '../../hooks/useAuth';
import {storeUsers, UserProps} from '../../hooks/useUser';

import {isEmailInvalid} from '../../utils/regex';

import {KeyboardAvoidingView} from '../../components/KeyboardAvoidingView';
import {Background} from '../../components/Background';
import {Foreground} from '../../components/Foreground';
import {TextInput} from '../../components/TextInput';
import {ImageBackground} from '../../components/ImageBackground';
import {TouchableOpacity} from '../../components/TouchableOpacity';
import {Text} from '../../components/Texts/Text';
import {TextMini} from '../../components/Texts/TextMini';
import {Container} from '../../components/Container';
import {AlertEmailInvalid} from '../../components/Alerts/AlertEmailInvalid';
import {AlertEmailNotFound} from '../../components/Alerts/AlertEmailNotFound';
import {AlertEmailSent} from '../../components/Alerts/AlertEmailSent';

const Login = () => {
  const theme = useTheme();

  const [showAlertEmailInvalid, setShowAlertEmailInvalid] = useState(false);
  const [showAlertEmailNotFound, setShowAlertEmailNotFound] = useState(false);
  const [showAlertEmailSent, setShowAlertEmailSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');

  const onSubmit = async () => {
    setIsLoading(true);

    if (isEmailInvalid(email)) {
      setShowAlertEmailInvalid(true);
      setIsLoading(false);
      return;
    }

    getPessoaQuerySnapshotFromEmail(email).then(
      (querySnapshot: FirebaseFirestoreTypes.QuerySnapshot) => {
        if (querySnapshot.size > 0) {
          sendSignInLinkToEmail(email).then(() => {
            const users: UserProps[] = [];

            querySnapshot.forEach(Document => {
              const {id, nome} = Document.data();

              users.push({
                id: id,
                nome: nome,
              });
            });

            storeUsers(users);

            setShowAlertEmailSent(true);
            setIsLoading(false);
          });
        } else {
          setShowAlertEmailNotFound(true);
          setIsLoading(false);
        }
      },
    );
  };

  return (
    <>
      <KeyboardAvoidingView>
        <Background>
          <ImageBackground />
          <Foreground>
            <TextInput
              placeholder={'SEU E-MAIL'}
              placeholderTextColor={theme.colors.ts}
              onChangeText={(text: string) => setEmail(text)}
            />
            <Container>
              <TextMini>
                Ao entrar, você concorda com os nossos{' '}
                <TextMini
                  style={{
                    textDecorationLine: 'underline',
                    color: theme.colors.pr,
                  }}>
                  termos de uso
                </TextMini>
                .
              </TextMini>
              <TouchableOpacity
                onPress={onSubmit}
                loading={isLoading}
                disabled={isLoading}
                children={
                  <Container style={{flexDirection: 'row'}}>
                    <Text>Entrar</Text>
                  </Container>
                }
              />
            </Container>
          </Foreground>
        </Background>
      </KeyboardAvoidingView>
      <AlertEmailInvalid
        show={showAlertEmailInvalid}
        onConfirmPressed={() => {
          setShowAlertEmailInvalid(false);
        }}
      />
      <AlertEmailNotFound
        show={showAlertEmailNotFound}
        onConfirmPressed={() => {
          setShowAlertEmailNotFound(false);
        }}
      />
      <AlertEmailSent
        show={showAlertEmailSent}
        onConfirmPressed={() => {
          setShowAlertEmailSent(false);
        }}
      />
    </>
  );
};

export default Login;
