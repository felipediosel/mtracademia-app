import {Background} from '../../components/Background';
import {ActivityIndicator} from '../../components/ActivityIndicator';

export function Loading() {
  return (
    <Background style={{justifyContent: 'center'}}>
      <ActivityIndicator />
    </Background>
  );
}
