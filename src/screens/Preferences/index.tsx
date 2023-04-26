import {ColorSchemeName, Switch} from 'react-native';
import {useContext, useEffect, useState} from 'react';
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

import useUserPreferences, {
  storeUserPreferences,
} from '../../hooks/useUserPreferences';

import {ThemeType, ThemeContext} from '../../contexts/theme';

import Loading from '../Loading';

import {Background} from '../../components/Background';
import {MenuHeader} from '../../components/Menu/MenuHeader';
import {Container} from '../../components/Container';
import {MenuItem} from '../../components/Menu/MenuItem';
import {TextSmall} from '../../components/Texts/TextSmall';

const Preferences = (): JSX.Element => {
  const theme = useTheme();

  const [isEnabledNotifications, setIsEnabledNotifications] =
    useState<boolean>(true);

  const toggleSwitchNotifications = async (value: boolean) => {
    setIsEnabledNotifications(previousState => !previousState);

    await storeUserPreferences({
      notification: value,
    });
  };

  const [isEnabledWelcome, setIsEnabledWelcome] = useState<boolean>(true);

  const toggleSwitchWelcome = async (value: boolean) => {
    setIsEnabledWelcome(previousState => !previousState);

    await storeUserPreferences({
      welcome: value,
    });
  };

  const [initialSwitchSelector, setInitialSwitchSelector] = useState<number>(1);

  const {isLoading: isUserPreferencesIsLoading, userPreferences} =
    useUserPreferences();

  const {setTheme} = useContext(ThemeContext);

  useEffect(() => {
    if (userPreferences) {
      if (userPreferences.theme) {
        setInitialSwitchSelector(
          userPreferences.theme == ThemeType.dark ? 2 : 0,
        );
      }

      if (userPreferences.notification !== undefined) {
        setIsEnabledNotifications(
          userPreferences.notification === true ? true : false,
        );
      }

      if (userPreferences.welcome !== undefined) {
        setIsEnabledWelcome(userPreferences.welcome === true ? true : false);
      }
    }
  }, [isUserPreferencesIsLoading]);

  return (
    <>
      <Background>
        <MenuHeader upTitle="Minhas" downTitle="Preferências" />
        {isUserPreferencesIsLoading ? (
          <Loading />
        ) : (
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
                  initial={initialSwitchSelector}
                  value={initialSwitchSelector}
                  onPress={async (value: ColorSchemeName) => {
                    await storeUserPreferences({
                      theme: value,
                    });

                    setTheme(value);
                  }}
                  textColor={theme.colors.ts}
                  selectedColor={theme.colors.tp}
                  buttonColor={theme.colors.pr}
                  borderColor={theme.colors.sc}
                  backgroundColor={theme.colors.sc}
                  borderWidth={2}
                  height={theme.responsive.hp('6%')}
                  valuePadding={4}
                  animationDuration={150}
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
                      value: ThemeType.light,
                      customIcon: (selected: boolean) => {
                        return (
                          <Sun
                            size={theme.icons.sizes.sm}
                            color={selected ? theme.colors.tp : theme.colors.ts}
                          />
                        );
                      },
                    },
                    {label: 'Auto', value: null},
                    {
                      value: ThemeType.dark,
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
                  style={{transform: [{scaleX: 0.8}, {scaleY: 0.8}]}}
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
                  Defina a ordem do resumo.
                </TextSmall>
              </Container>
            </Container>
          </Container>
        )}
      </Background>
    </>
  );
};

/*
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
                  style={{transform: [{scaleX: 0.8}, {scaleY: 0.8}]}}
                  trackColor={{false: theme.colors.sc, true: theme.colors.sc}}
                  thumbColor={
                    isEnabledWelcome ? theme.colors.pr : theme.colors.ts
                  }
                  ios_backgroundColor={theme.colors.sc}
                  onValueChange={toggleSwitchWelcome}
                  value={isEnabledWelcome}
                />
              </Container>
*/

export default Preferences;
