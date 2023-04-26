import {Background} from '../../components/Background';
import {ActivityIndicator} from '../../components/ActivityIndicator';

const Loading: React.FC = () => {
  return (
    <Background style={{justifyContent: 'center'}}>
      <ActivityIndicator />
    </Background>
  );
};

export default Loading;
