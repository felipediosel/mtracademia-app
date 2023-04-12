import {useEffect, useState} from 'react';
import {useTheme} from 'styled-components/native';
import {
  EnvelopeSimple,
  House,
  IdentificationBadge,
  IdentificationCard,
  Phone,
} from 'phosphor-react-native';

import useUser from '../../hooks/useUser';

import {Background} from '../../components/Background';
import {MenuHeader} from '../../components/Menu/MenuHeader';
import {Container} from '../../components/Container';
import {MenuItem} from '../../components/Menu/MenuItem';
import {TextSmall} from '../../components/Texts/TextSmall';
import Loading from '../Loading';
import {formatCpf, formatPhone} from '../../utils/regex';

const PersonalData = (): JSX.Element => {
  const theme = useTheme();

  const {isLoading: isUserIsLoading, userData} = useUser();

  const [userRg, setUserRg] = useState<string>('');
  const [userCpf, setUserCpf] = useState<string>('');
  const [userEndereco, setUserEndereco] = useState<string>('');
  const [userBairro, setUserBairro] = useState<string>('');
  const [userCidade, setUserCidade] = useState<string>('');
  const [userCelular, setUserCelular] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');

  useEffect(() => {
    if (userData) {
      setUserRg(userData.rg);
      setUserEndereco(userData.endereco);
      setUserBairro(userData.bairro);
      setUserCidade(userData.cidade);
      setUserEmail(userData.email);

      if (userData.cpf) {
        setUserCpf(formatCpf(userData.cpf));
      }

      if (userData.celular) {
        setUserCelular(formatPhone(userData.celular));
      }
    }
  }, [userData]);

  return (
    <>
      <Background>
        <MenuHeader upTitle="Meus" downTitle="Dados pessoais" />
        {isUserIsLoading ? (
          <Loading />
        ) : (
          <>
            <Container
              style={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                height: '100%',
                width: '100%',
              }}>
              <Container
                style={{
                  height: '5%',
                }}></Container>
              <Container
                style={{
                  height: '50%',
                  width: '100%',
                  gap: theme.responsive.hp('5%'),
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  paddingLeft: theme.responsive.hp('3%'),
                }}>
                <Container
                  style={{
                    alignItems: 'flex-start',
                  }}>
                  <MenuItem
                    icon={
                      <IdentificationCard
                        color={theme.colors.pr}
                        size={theme.icons.sizes.sm}
                      />
                    }
                    title="CPF"
                  />
                  <TextSmall
                    style={{
                      color: theme.colors.ts,
                    }}>
                    {userCpf ? userCpf : '---'}
                  </TextSmall>
                </Container>
                <Container
                  style={{
                    alignItems: 'flex-start',
                  }}>
                  <MenuItem
                    icon={
                      <House
                        color={theme.colors.pr}
                        size={theme.icons.sizes.sm}
                      />
                    }
                    title="Endereço"
                  />
                  <TextSmall
                    style={{
                      color: theme.colors.ts,
                    }}>
                    {userEndereco || userBairro || userCidade
                      ? [userEndereco, userBairro, userCidade].join(', ')
                      : '---'}
                  </TextSmall>
                </Container>
                <Container
                  style={{
                    alignItems: 'flex-start',
                  }}>
                  <MenuItem
                    icon={
                      <Phone
                        color={theme.colors.pr}
                        size={theme.icons.sizes.sm}
                      />
                    }
                    title="Celular"
                  />
                  <TextSmall
                    style={{
                      color: theme.colors.ts,
                    }}>
                    {userCelular ? userCelular : '---'}
                  </TextSmall>
                </Container>
                <Container
                  style={{
                    alignItems: 'flex-start',
                  }}>
                  <MenuItem
                    icon={
                      <EnvelopeSimple
                        color={theme.colors.pr}
                        size={theme.icons.sizes.sm}
                      />
                    }
                    title="E-mail"
                  />
                  <TextSmall
                    style={{
                      color: theme.colors.ts,
                    }}>
                    {userEmail ? userEmail : '---'}
                  </TextSmall>
                </Container>
              </Container>
            </Container>
          </>
        )}
      </Background>
    </>
  );
};

export default PersonalData;
