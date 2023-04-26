export type RootStackParamList = {
  Intro: undefined;
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
