import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BodyWrap = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 1102px;
`;

export const GoBack = styled.button`
  display: flex;
  flex-direction: row;
  height: 140px;
  width: 16%;
  align-items: center;
  justify-content: flex-end;
  border-width: 0;
  background-color: rgba(255, 255, 255, 0);
`;

export const ProductWrap = styled.div`
  margin: 60px;
  width: 68%;
`;

export const TopContent = styled.div`
  display: flex;
`;

export const LeftContent = styled.div`
  flex: 1;
`;

export const RightContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 500px;
  object-fit: contain;
`;
