import {IntroSlider, Item} from '../../components/Slider/IntroSlider';
import {Welcome} from './components/Welcome';
import {MyFrequency} from './components/MyFrequency';
import {MyPhysicalEvaluations} from './components/MyPhysicalEvaluations';
import {MyPlan} from './components/MyPlan';
import {MyFinancial} from './components/MyFinancial';
import {LetsGo} from './components/LetsGo';

export const Intro: React.FC = () => {
  const data: Item[] = [
    {content: <Welcome />},
    {content: <MyFrequency />},
    {content: <MyPhysicalEvaluations />},
    {content: <MyPlan />},
    {content: <MyFinancial />},
    {content: <LetsGo />},
  ];

  return <IntroSlider data={data} />;
};
