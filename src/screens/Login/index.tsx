import React, {useState} from 'react';
import {useTheme} from 'styled-components';

import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';

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
import {PaperPlaneTilt} from 'phosphor-react-native';

const Login = () => {
  const theme = useTheme();

  const [showAlertEmailInvalid, setShowAlertEmailInvalid] = useState(false);
  const [showAlertEmailNotFound, setShowAlertEmailNotFound] = useState(false);
  const [showAlertEmailSent, setShowAlertEmailSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [sentEmail, setSentEmail] = useState(false);
  const [email, setEmail] = useState('');

  const isEmailInvalid = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    return reg.test(email) === false;
  };

  const getQuerySnapshotFromEmail = async (): Promise<
    FirebaseFirestoreTypes.QuerySnapshot<FirebaseFirestoreTypes.DocumentData>
  > => {
    return firestore()
      .collection('pessoa')
      .where('email', 'in', [email, email.toLocaleLowerCase()])
      .get();
  };

  const sendEmail = async (): Promise<void> => {
    setSentEmail(true);

    await AsyncStorage.setItem('email', email);

    return auth().sendSignInLinkToEmail(email, {
      android: {packageName: 'com.mtracademiaapp'},
      handleCodeInApp: true,
      iOS: {bundleId: 'org.reactjs.native.example.MtrAcademiaApp'},
      url: 'https://mtracademiaapp.page.link/VXX6',
    });
  };

  const storagePessoas = async (
    querySnapshot: FirebaseFirestoreTypes.QuerySnapshot,
  ) => {
    const pessoas: FirebaseFirestoreTypes.DocumentData[] = [];

    querySnapshot.forEach(Document => {
      delete Document.data().versao;

      pessoas.push(Document.data());
    });

    await AsyncStorage.setItem('pessoas', JSON.stringify(pessoas));
  };

  const onSubmit = async () => {
    setIsLoading(true);

    if (isEmailInvalid()) {
      setShowAlertEmailInvalid(true);
      setIsLoading(false);
      return;
    }

    getQuerySnapshotFromEmail().then(
      (querySnapshot: FirebaseFirestoreTypes.QuerySnapshot) => {
        if (querySnapshot.size > 0) {
          sendEmail().then(() => {
            storagePessoas(querySnapshot);

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
              <TouchableOpacity
                onPress={onSubmit}
                loading={isLoading}
                disabled={isLoading}
                children={
                  <Container style={{flexDirection: 'row'}}>
                    <PaperPlaneTilt
                      size={33}
                      weight={'fill'}
                      color={theme.colors.tp}
                    />
                    <Text>Enviar</Text>
                  </Container>
                }
              />
              <TextMini>
                Ao enviar, você concorda com{'\n'} os nossos{' '}
                <TextMini
                  style={{
                    textDecorationLine: 'underline',
                    color: theme.colors.pr,
                  }}>
                  termos de uso
                </TextMini>
                .
              </TextMini>
            </Container>
          </Foreground>
        </Background>
      </KeyboardAvoidingView>
      <AlertEmailInvalid
        show={showAlertEmailInvalid}
        onCancelPressed={() => {
          setShowAlertEmailInvalid(false);
        }}
        onConfirmPressed={() => {
          setShowAlertEmailInvalid(false);
        }}
        onDismiss={() => {
          setShowAlertEmailInvalid(false);
        }}
      />
      <AlertEmailNotFound
        show={showAlertEmailNotFound}
        onCancelPressed={() => {
          setShowAlertEmailNotFound(false);
        }}
        onConfirmPressed={() => {
          setShowAlertEmailNotFound(false);
        }}
        onDismiss={() => {
          setShowAlertEmailNotFound(false);
        }}
      />
      <AlertEmailSent
        show={showAlertEmailSent}
        onCancelPressed={() => {
          setShowAlertEmailSent(false);
        }}
        onConfirmPressed={() => {
          setShowAlertEmailSent(false);
        }}
        onDismiss={() => {
          setShowAlertEmailSent(false);
        }}
      />
    </>
  );
};

export default Login;
