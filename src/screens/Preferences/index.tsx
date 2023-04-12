import {Switch} from 'react-native';
import {useState} from 'react';
import {useTheme} from 'styled-components/native';

import {
  Lamp,
  Sun,
  MoonStars,
  Bell,
  HandWaving,
  SquaresFour,
} from 'phosphor-react-native';

import SwitchSelector from 'react-native-switch-selector';

import {Background} from '../../components/Background';
import {MenuHeader} from '../../components/Menu/MenuHeader';
import {Container} from '../../components/Container';
import {MenuItem} from '../../components/Menu/MenuItem';
import {TextSmall} from '../../components/Texts/TextSmall';

const Preferences = (): JSX.Element => {
  const theme = useTheme();

  const [isEnabledNotifications, setIsEnabledNotifications] =
    useState<boolean>(true);

  const toggleSwitchNotifications = () =>
    setIsEnabledNotifications(previousState => !previousState);

  const [isEnabledWelcome, setIsEnabledWelcome] = useState<boolean>(true);

  const toggleSwitchWelcome = () =>
    setIsEnabledWelcome(previousState => !previousState);

  return (
    <>
      <Background>
        <MenuHeader upTitle="Minhas" downTitle="Preferências" />
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
              paddingRight: theme.responsive.hp('3%'),
            }}>
            <Container
              style={{
                alignItems: 'flex-start',
              }}>
              <MenuItem
                icon={
                  <Lamp color={theme.colors.pr} size={theme.icons.sizes.sm} />
                }
                title="Tema"
              />
              <SwitchSelector
                initial={1}
                onPress={(value: any) => {
                  console.log(value);
                }}
                textColor={theme.colors.ts}
                selectedColor={theme.colors.tp}
                buttonColor={theme.colors.pr}
                borderColor={theme.colors.sc}
                backgroundColor={theme.colors.sc}
                borderWidth={3}
                height={theme.responsive.hp('6%')}
                valuePadding={2}
                animationDuration={225}
                textContainerStyle={{
                  height: '100%',
                  width: '100%',
                }}
                textStyle={{
                  fontFamily: theme.fonts.fm,
                  fontSize: 12,
                  textTransform: 'uppercase',
                  fontWeight: theme.fonts.weights.df,
                }}
                selectedTextStyle={{
                  fontFamily: theme.fonts.fm,
                  fontSize: 12,
                  textTransform: 'uppercase',
                  fontWeight: theme.fonts.weights.df,
                }}
                hasPadding={true}
                options={[
                  {
                    value: 'light',
                    customIcon: (selected: boolean) => {
                      return (
                        <Sun
                          size={theme.icons.sizes.sm}
                          color={selected ? theme.colors.tp : theme.colors.ts}
                        />
                      );
                    },
                  },
                  {label: 'Auto', value: 'auto'},
                  {
                    value: 'dark',
                    customIcon: (selected: boolean) => {
                      return (
                        <MoonStars
                          size={theme.icons.sizes.sm}
                          color={selected ? theme.colors.tp : theme.colors.ts}
                        />
                      );
                    },
                  },
                ]}
              />
            </Container>
            <Container
              style={{
                alignItems: 'flex-start',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <MenuItem
                icon={
                  <Bell color={theme.colors.pr} size={theme.icons.sizes.sm} />
                }
                title="Notificações"
              />
              <Switch
                trackColor={{false: theme.colors.sc, true: theme.colors.sc}}
                thumbColor={
                  isEnabledNotifications ? theme.colors.pr : theme.colors.ts
                }
                ios_backgroundColor={theme.colors.sc}
                onValueChange={toggleSwitchNotifications}
                value={isEnabledNotifications}
              />
            </Container>
            <Container
              style={{
                alignItems: 'flex-start',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <MenuItem
                icon={
                  <HandWaving
                    color={theme.colors.pr}
                    size={theme.icons.sizes.sm}
                  />
                }
                title="Boas-vindas"
              />
              <Switch
                trackColor={{false: theme.colors.sc, true: theme.colors.sc}}
                thumbColor={
                  isEnabledWelcome ? theme.colors.pr : theme.colors.ts
                }
                ios_backgroundColor={theme.colors.sc}
                onValueChange={toggleSwitchWelcome}
                value={isEnabledWelcome}
              />
            </Container>
            <Container
              style={{
                alignItems: 'flex-start',
              }}>
              <MenuItem
                icon={
                  <SquaresFour
                    color={theme.colors.pr}
                    size={theme.icons.sizes.sm}
                  />
                }
                title="Menu Inicial"
              />
              <TextSmall
                style={{
                  color: theme.colors.ts,
                }}>
                Defina a ordem dos atalhos.
              </TextSmall>
            </Container>
          </Container>
        </Container>
      </Background>
    </>
  );
};

export default Preferences;
