import styled from 'styled-components';
import UDText from '@src/modules/ud-ui/ud-text';

export const Container = styled.div``;

export const ArticlesWrap = styled.div`
  min-height: 1102px;
  margin-left: 16%;
  margin-bottom: 60px;
`;

export const ArticleWrap = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 60px;
  max-width: 50%;
`;

export const ArticleImg = styled.img`
  border-radius: 10px;
`;

export const TextWrap = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 32px;
`;

export const TopTextWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled(UDText)``;

export const IntroText = styled(UDText)``;

export const Date = styled(UDText)``;

export const ReadMore = styled.div`
  position: absolute;
  bottom: 16px;
  right: 32px;
`;
