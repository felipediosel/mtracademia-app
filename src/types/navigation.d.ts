import {RootStackParamList} from '../routes/navigation/stack.routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
