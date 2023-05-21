import {ClipboardText, Fingerprint, Ruler} from 'phosphor-react-native';
import {useTheme} from 'styled-components/native';
import {Background} from '../../components/Background';
import {Container} from '../../components/Container';
import {MenuItem} from '../../components/Menu/MenuItem';
import {TextSmall} from '../../components/Texts/TextSmall';
import Loading from '../Loading';
import EvaluationsChart from './components';
import {Dropdown} from 'react-native-element-dropdown';

const MyPhysicalEvaluations: React.FC = () => {
  const theme = useTheme();

  const data = [
    {label: 'Peso (Kg)', value: '1'},
    {label: 'Item 2', value: '2'},
    {label: 'Item 3', value: '3'},
    {label: 'Item 4', value: '4'},
    {label: 'Item 5', value: '5'},
    {label: 'Item 6', value: '6'},
    {label: 'Item 7', value: '7'},
    {label: 'Item 8', value: '8'},
  ];

  return (
    <Background>
      <Container
        style={{
          justifyContent: 'flex-start',
          alignItems: 'center',
          height: '100%',
          width: '100%',
        }}>
        <Container
          style={{
            height: '5%',
          }}></Container>
        <Container
          style={{
            justifyContent: 'flex-start',
            height: '10%',
            borderWidth: 0,
            paddingLeft: theme.responsive.hp('3%'),
            paddingRight: theme.responsive.hp('3%'),
          }}>
          <Container
            style={{
              alignItems: 'flex-start',
              width: '100%',
            }}>
            <Dropdown
              flatListProps={{
                style: {
                  backgroundColor: theme.colors.bg,
                },
              }}
              mode={'modal'}
              visibleSelectedItem={false}
              selectedStyle={{
                backgroundColor: theme.colors.bg,
              }}
              style={{
                width: theme.responsive.wp('60%'),
                margin: 16,
                height: 50,
                borderWidth: 2,
                borderColor: theme.colors.ts,
                borderRadius: 10,
                padding: 15,
                backgroundColor: theme.colors.bg,
              }}
              placeholderStyle={{
                color: theme.colors.ts,
              }}
              selectedTextStyle={{
                color: theme.colors.tp,
                fontFamily: theme.fonts.fm,
                fontWeight: theme.fonts.weights.df,
                fontSize: 12,
                textTransform: 'uppercase',
                backgroundColor: theme.colors.bg,
              }}
              inputSearchStyle={{
                height: 40,
                fontFamily: theme.fonts.fm,
                fontWeight: theme.fonts.weights.df,
                fontSize: 12,
                backgroundColor: theme.colors.bg,
              }}
              itemContainerStyle={{
                backgroundColor: theme.colors.bg,
                fontFamily: theme.fonts.fm,
                fontWeight: theme.fonts.weights.df,
                fontSize: 12,
                color: theme.colors.tp,
              }}
              itemTextStyle={{
                textTransform: 'uppercase',
                backgroundColor: theme.colors.bg,
                fontFamily: theme.fonts.fm,
                fontWeight: theme.fonts.weights.df,
                fontSize: 12,
                color: theme.colors.tp,
              }}
              iconStyle={{}}
              data={data}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Select item"
              searchPlaceholder="Buscar..."
              value={{label: '', value: '1'}}
              onChange={item => {}}
              renderLeftIcon={() => (
                <ClipboardText
                  style={{
                    marginRight: 10,
                  }}
                  color={theme.colors.pr}
                  size={theme.icons.sizes.sm}
                />
              )}
            />
          </Container>
        </Container>
        <Container style={{justifyContent: 'center', borderWidth: 0}}>
          <EvaluationsChart />
        </Container>
      </Container>
    </Background>
  );
};

export default MyPhysicalEvaluations;
