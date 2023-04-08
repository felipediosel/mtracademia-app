import {useTheme} from 'styled-components';
import {Text} from '../../Texts/Text';

type HeaderTitleProps = {
  upTitle: string | JSX.Element;
  downTitle: string | JSX.Element;
};

export function HeaderTitle({
  upTitle,
  downTitle,
}: HeaderTitleProps): JSX.Element {
  const theme = useTheme();

  return (
    <Text
      style={{
        textAlign: 'left',
      }}>
      <Text style={{color: theme.colors.ts, textAlign: 'left'}}>{upTitle}</Text>
      {'\n'}
      {downTitle}
    </Text>
  );
}
