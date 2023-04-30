import {useEffect} from 'react';
import {useTheme} from 'styled-components/native';
import {
  EnvelopeSimple,
  House,
  IdentificationCard,
  Phone,
} from 'phosphor-react-native';
import {Background} from '../../components/Background';
import {MenuHeader} from '../../components/Menu/MenuHeader';
import {Container} from '../../components/Container';
import {MenuItem} from '../../components/Menu/MenuItem';
import {TextSmall} from '../../components/Texts/TextSmall';
import {formatCpf, formatPhone} from '../../utils/regex';
import SafeAreaView from '../../components/SafeAreaView';
import * as Firestore from '../../services/firebase/firestore';
import useAuth from '../../contexts/auth/hooks/useAuth';
import {useAppSelector} from '../../redux/hooks/useAppSelector';
import {actionsUser, selectUser} from '../../redux/features/user';
import {useAppDispatch} from '../../redux/hooks/useAppDispatch';

const PersonalData: React.FC = () => {
  const theme = useTheme();
  const {user} = useAuth();
  const {data} = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      if (user) {
        const unsubscribe = await Firestore.Collections.Pessoa.onSnapshotId(
          user.id,
          data => {
            if (data) {
              const cpf = data.cpf;
              const rg = data.rg;
              const endereco = data.endereco;
              const bairro = data.bairro;
              const cidade = data.cidade;
              const celular = data.celular;
              const email = data.email;

              const cpfFormated = cpf ? formatCpf(cpf) : '---';
              const rgFormated = rg ? rg : '---';
              const enderecoFormated = endereco ? endereco : '---';
              const bairroFormated = bairro ? bairro : '---';
              const cidadeFormated = cidade ? cidade : '---';
              const celularFormated = celular ? formatPhone(celular) : '---';
              const emailFormated = email ? email : '---';

              const userData = {
                cpf: cpfFormated,
                rg: rgFormated,
                endereco: [
                  enderecoFormated,
                  bairroFormated,
                  cidadeFormated,
                ].join(', '),
                celular: celularFormated,
                email: emailFormated,
              };

              dispatch(actionsUser.setData(userData));
            } else {
              dispatch(actionsUser.setDataDefault());
            }
          },
        );

        return unsubscribe;
      }
    })();
  }, [user]);

  return (
    <Background>
      <SafeAreaView>
        <MenuHeader upTitle="Meus" downTitle="Dados pessoais" />
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
                {data.cpf}
              </TextSmall>
            </Container>
            <Container
              style={{
                alignItems: 'flex-start',
              }}>
              <MenuItem
                icon={
                  <House color={theme.colors.pr} size={theme.icons.sizes.sm} />
                }
                title="Endereço"
              />
              <TextSmall
                style={{
                  color: theme.colors.ts,
                }}>
                {data.endereco}
              </TextSmall>
            </Container>
            <Container
              style={{
                alignItems: 'flex-start',
              }}>
              <MenuItem
                icon={
                  <Phone color={theme.colors.pr} size={theme.icons.sizes.sm} />
                }
                title="Celular"
              />
              <TextSmall
                style={{
                  color: theme.colors.ts,
                }}>
                {data.celular}
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
                {data.email}
              </TextSmall>
            </Container>
          </Container>
        </Container>
      </SafeAreaView>
    </Background>
  );
};

export default PersonalData;
