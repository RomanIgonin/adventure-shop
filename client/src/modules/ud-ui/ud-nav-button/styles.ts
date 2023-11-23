import styled from 'styled-components';
import { ColorType } from '@src/modules/ud-ui/ud-nav-button/index';

export const Container = styled.div`
  display: flex;
  position: relative;
  height: 54px;
`;

interface Props {
  fontColor: ColorType;
}
export const Button = styled.button<Props>`
  font-family: 'Ubuntu', sans-serif;
  font-size: 18px;
  font-weight: 700;
  border-width: 0;
  background-color: rgba(255, 255, 255, 0);
  line-height: 24px;
  color: ${props => {
    return props.fontColor === 'dark' ? `#303030` : `#FFFFFF`;
  }};
`;

export const UnderLine = styled.div`
  position: absolute;
  height: 6px;
  width: 100%;
  bottom: 0;
  background-color: #dbab3e;
`;
