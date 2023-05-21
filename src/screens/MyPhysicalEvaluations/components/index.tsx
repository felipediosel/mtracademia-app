import {LineChart} from 'react-native-chart-kit';
import {useTheme} from 'styled-components/native';

const EvaluationsChart: React.FC = () => {
  const theme = useTheme();

  const data = {
    labels: [],
    datasets: [
      {
        data: [80, 82, 83, 83, 85, 86, 86, 87],
        color: (opacity = 1) => theme.colors.pr, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: [], // optional
  };

  const chartConfig = {
    backgroundGradientFrom: theme.colors.sc,
    backgroundGradientTo: theme.colors.bg,
    color: (opacity = 1) => theme.colors.ts,
    labelColor: (opacity = 1) => theme.colors.tp,
    useShadowColorFromDataset: true, // optional
    propsForDots: {
      r: '5',
      strokeWidth: '2',
      stroke: theme.colors.wa,
    },
    propsForLabels: {
      fontFamily: theme.fonts.fm,
      fontSize: theme.fonts.sizes.sm,
      fontWeight: theme.fonts.weights.df,
    },
  };

  return (
    <LineChart
      style={{
        borderRadius: 15,
      }}
      onDataPointClick={data => {
        console.log(data);
      }}
      data={data}
      width={theme.responsive.wp('85%')}
      height={theme.responsive.hp('35%')}
      verticalLabelRotation={0}
      chartConfig={chartConfig}
      bezier
      renderDotContent={({x, y, index, indexData}) => {
        console.log(index);
      }}
    />
  );
};

export default EvaluationsChart;
