import {ColorSchemeName, Switch} from 'react-native';
import {useEffect, useState} from 'react';
import {useTheme as useThemeNative} from 'styled-components/native';
import * as AsyncStorage from '../../services/async-storage';
import {
  Lamp,
  Sun,
  MoonStars,
  Bell,
  SquaresFour,
  HandWaving,
  ArrowUpRight,
  CaretRight,
} from 'phosphor-react-native';
import SwitchSelector from 'react-native-switch-selector';
import {ThemeType} from '../../contexts/theme';
import {Background} from '../../components/Background';
import {MenuHeader} from '../../components/Menu/MenuHeader';
import {Container} from '../../components/Container';
import {MenuItem} from '../../components/Menu/MenuItem';
import {TextSmall} from '../../components/Texts/TextSmall';
import SafeAreaView from '../../components/SafeAreaView';
import useAuth from '../../contexts/auth/hooks/useAuth';
import useTheme from '../../contexts/theme/hooks/useTheme';
import {useNavigation} from '@react-navigation/native';

const Preferences: React.FC = () => {
  const navigation = useNavigation();
  const {user} = useAuth();
  const theme = useThemeNative();
  const {setTheme} = useTheme();

  const [isEnabledNotifications, setIsEnabledNotifications] =
    useState<boolean>(true);

  const toggleSwitchNotifications = async (value: boolean) => {
    setIsEnabledNotifications(previousState => !previousState);

    AsyncStorage.User.setPreferences(user, {
      notification: value,
    });
  };

  const [initialSwitchSelector, setInitialSwitchSelector] = useState<number>(1);

  useEffect(() => {
    const userPreferences = AsyncStorage.User.getPreferences(user);

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
    }
  }, []);

  return (
    <Background>
      <SafeAreaView>
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
                initial={initialSwitchSelector}
                value={initialSwitchSelector}
                onPress={async (value: ColorSchemeName) => {
                  AsyncStorage.User.setPreferences(user, {
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
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <Container
                style={{
                  alignItems: 'flex-start',
                }}>
                <MenuItem
                  icon={
                    <HandWaving
                      color={theme.colors.pr}
                      size={theme.icons.sizes.sm}
                    />
                  }
                  title="Rever introdução"
                  onPress={() => {
                    navigation.navigate('Intro', {reIntroduction: true});
                  }}
                />
                <TextSmall
                  style={{
                    color: theme.colors.ts,
                  }}>
                  Veja novamente a apresentação inicial.
                </TextSmall>
              </Container>
            </Container>
          </Container>
        </Container>
      </SafeAreaView>
    </Background>
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
