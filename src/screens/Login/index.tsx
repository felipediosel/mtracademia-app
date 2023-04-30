import React, {useState} from 'react';
import {useTheme} from 'styled-components';
import {isEmailInvalid} from '../../utils/regex';
import {KeyboardAvoidingView} from '../../components/KeyboardAvoidingView';
import {Background} from '../../components/Background';
import {Foreground} from '../../components/Foreground';
import {TextInput} from '../../components/TextInput';
import {ImageBackground} from '../../components/ImageBackground';
import {TouchableOpacity} from '../../components/TouchableOpacity';
import {Text} from '../../components/Texts/Text';
import {Container} from '../../components/Container';
import {AlertEmailInvalid} from '../../components/Alerts/AlertEmailInvalid';
import {AlertEmailNotFound} from '../../components/Alerts/AlertEmailNotFound';
import {AlertEmailSent} from '../../components/Alerts/AlertEmailSent';
import {sendSignInLink} from '../../services/firebase/auth/email';

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
    } else {
      const emailSended = await sendSignInLink(email);

      if (emailSended) {
        setShowAlertEmailSent(true);
      } else {
        setShowAlertEmailNotFound(true);
      }
    }

    setIsLoading(false);
  };

  return (
    <>
      <KeyboardAvoidingView>
        <Background>
          <ImageBackground />
          <Foreground>
            <TextInput
              placeholder={'DIGITE SEU E-MAIL'}
              placeholderTextColor={theme.colors.ts}
              onChangeText={(text: string) => setEmail(text)}
            />
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
