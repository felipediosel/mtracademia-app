import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';

export type VersaoDTO = {
  ativo: boolean;
  datahora: FirebaseFirestoreTypes.Timestamp;
};
