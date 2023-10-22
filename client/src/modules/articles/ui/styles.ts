import styled from 'styled-components';
import UDText from '@src/modules/ud-ui/ud-text';

export const Container = styled.div``;

export const ArticlesListWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 76%;
`;

export const ArticlesWrap = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 1102px;
  margin-left: 20%;
  margin-right: 12%;
  margin-bottom: 60px;
`;

export const ArticleWrap = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 60px;
  max-width: 90%;
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

export const AdvWrap = styled.div`
  width: 20%;
  margin-top: 60px;
`;
