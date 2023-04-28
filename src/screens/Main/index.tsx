import {Background} from '../../components/Background';
import SafeAreaView from '../../components/SafeAreaView';
import TabNavigator from '../../navigation/tabs';

const Main: React.FC = () => {
  return (
    <Background>
      <SafeAreaView>
        <TabNavigator />
      </SafeAreaView>
    </Background>
  );
};

export default Main;
