export type RootStackParamList = {
  Intro: {reIntroduction: boolean} | undefined;
  ChooseUser: undefined;
  SignedIn: undefined;
  Main: undefined;
  Settings: undefined;
  PersonalData: undefined;
  Preferences: undefined;
  Privacy: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
