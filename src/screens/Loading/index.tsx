import {Background} from '../../components/Background';
import {ActivityIndicator} from '../../components/ActivityIndicator';

const Loading = (): JSX.Element => {
  return (
    <Background style={{justifyContent: 'center'}}>
      <ActivityIndicator />
    </Background>
  );
};

export default Loading;
