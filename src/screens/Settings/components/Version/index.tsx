import {useTheme} from 'styled-components/native';
import {TextSmall} from '../../../../components/Texts/TextSmall';

export const Version: React.FC = () => {
  const theme = useTheme();
  const pjson = require('../../../../../package.json');

  return (
    <TextSmall style={{color: theme.colors.ts}}>
      Versão {pjson.version}
    </TextSmall>
  );
};
