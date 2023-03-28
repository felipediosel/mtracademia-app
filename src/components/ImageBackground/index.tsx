import * as S from './styles';

export function ImageBackground({...rest}) {
  return (
    <S.ImageBackground
      source={require('../../assets/img/back.png')}
      resizeMode="cover"
      {...rest}
    />
  );
}
