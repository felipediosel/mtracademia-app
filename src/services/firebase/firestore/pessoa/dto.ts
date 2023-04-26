import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';

export type PessoaDTO = {
  id: number;
  nome: string;
  cpf: string;
  rg: string;
  email: string;
  celular: string;
  endereco: string;
  bairro: string;
  cidade: string;
  versao: FirebaseFirestoreTypes.DocumentReference;
};
