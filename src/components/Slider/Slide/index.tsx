import React from 'react';
import {Background} from '../../Background';
import {Container} from '../../Container';
import {useTheme} from 'styled-components';

export type SlideProps = {
  content: JSX.Element;
};

export function Slide({content}: SlideProps) {
  const theme = useTheme();

  return (
    <Background style={{justifyContent: 'center'}}>
      <Container
        style={{
          gap: theme.responsive.hp('2%'),
          padding: theme.responsive.wp('20%'),
        }}>
        {content}
      </Container>
    </Background>
  );
}
