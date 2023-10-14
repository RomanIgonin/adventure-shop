import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  marg?: number;
  onClick: () => void;
}

const UDButton = (props: Props) => {
  const { title, onClick, marg = 0 } = props;

  return (
    <ButtonWrap marg={marg}>
      <Button onClick={onClick}>{title}</Button>
    </ButtonWrap>
  );
};

export default UDButton;

interface ButtonProps {
  marg: number;
}
const ButtonWrap = styled.button<ButtonProps>`
  height: 40px;
  width: 100px;
  border: 2px solid;
  border-radius: 10px;
  margin: ${props => props.marg + 'px'};
`;

const Button = styled.div`
  font-size: 14px;
`;
