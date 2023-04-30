import {Background} from '../../components/Background';
import SafeAreaView from '../../components/SafeAreaView';
import SignedTab from '../../routes/navigation/signed-tab.routes';

const Main: React.FC = () => {
  return (
    <Background>
      <SafeAreaView>
        <SignedTab />
      </SafeAreaView>
    </Background>
  );
};

export default Main;
