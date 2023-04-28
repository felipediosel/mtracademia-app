import {IntroSlider, Item} from '../../components/Slider/IntroSlider';
import {Welcome} from './Slides/Welcome';
import {MyFrequency} from './Slides/MyFrequency';
import {MyPhysicalEvaluations} from './Slides/MyPhysicalEvaluations';
import {MyPlan} from './Slides/MyPlan';
import {MyFinancial} from './Slides/MyFinancial';
import {LetsGo} from './Slides/LetsGo';

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
