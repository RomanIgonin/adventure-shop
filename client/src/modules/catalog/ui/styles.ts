import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CatalogWrap = styled.div`
  display: flex;
  width: 62%;
  flex-wrap: wrap;
  min-height: 1102px;
  margin: 60px 0;
  align-self: center;
`;

export const CatalogItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  margin-right: 40px;
  margin-bottom: 40px;
`;

export const Image = styled.img`
  height: 350px;
  object-fit: contain;
`;

export const TextWrap = styled.div`
  padding: 16px 34px;
`;
