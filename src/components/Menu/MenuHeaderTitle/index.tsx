import {useTheme} from 'styled-components';
import {Text} from '../../Texts/Text';

export type MenuHeaderTitleProps = {
  upTitle: string | JSX.Element;
  downTitle: string | JSX.Element;
};

export function MenuHeaderTitle({
  upTitle,
  downTitle,
}: MenuHeaderTitleProps): JSX.Element {
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
