import React from 'react';
import {ViewProps} from 'react-native';

import {useTheme} from 'styled-components';

import {Background} from '../../Background';
import {Container} from '../../Container';

export type SlideProps = ViewProps & {
  content: JSX.Element;
};

export function Slide({content, ...rest}: SlideProps) {
  const theme = useTheme();

  return (
    <Background style={{justifyContent: 'center'}}>
      <Container
        style={{
          gap: theme.responsive.hp('2%'),
          padding: theme.responsive.wp('20%'),
        }}
        {...rest}>
        {content}
      </Container>
    </Background>
  );
}
