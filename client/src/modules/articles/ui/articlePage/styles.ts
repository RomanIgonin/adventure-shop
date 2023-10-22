import styled from 'styled-components';
import UDText from '@src/modules/ud-ui/ud-text';

export const Container = styled.div``;

export const BodyWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 1102px;
  margin: 60px 200px 60px 200px;
`;

export const GoBack = styled.button`
  display: flex;
  flex-direction: row;
  height: 60px;
  width: 16%;
  align-items: center;
  justify-content: flex-end;
  border-width: 0;
  background-color: rgba(255, 255, 255, 0);
`;

export const ArticleWrap = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  max-width: 58%;
  align-items: center;
`;

export const ArticleImg = styled.img`
  width: 1100px;
  margin-top: 40px;
  border-radius: 10px;
`;

export const TextWrap = styled.div`
  margin-top: 40px;
`;

export const Title = styled(UDText)``;

export const IntroText = styled(UDText)``;

export const Date = styled(UDText)``;

export const FullText = styled(UDText)``;

export const AdvWrap = styled.div`
  width: 16%;
`;
