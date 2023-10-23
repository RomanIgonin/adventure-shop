import React from 'react';
import * as S from '@src/modules/ud-ui/ud-nav-button/styles';

export type ColorType = 'dark' | 'light';

interface Props {
  title: string;
  isActive: boolean;
  onClick: () => void;
  color?: ColorType;
  style?: React.CSSProperties;
}

const UDNavButton = (props: Props) => {
  const { title, isActive, onClick, color = 'dark', style = {} } = props;

  return (
    <S.Container style={style}>
      <S.Button onClick={onClick} fontColor={color}>
        {title}
      </S.Button>

      {isActive && <S.UnderLine />}
    </S.Container>
  );
};

export default UDNavButton;
