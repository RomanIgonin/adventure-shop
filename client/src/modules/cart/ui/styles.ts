import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 85vh;
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 60px 0;
  justify-content: center;
`;

export const ProductsWrap = styled.div`
  width: 60%;
`;

export const ProductsItem = styled.div`
  display: flex;
  margin-bottom: 14px;
  justify-content: space-between;
`;

export const Image = styled.img`
  height: 250px;
  width: 250px;
  object-fit: contain;
  border-radius: 10px;
`;

export const TextWrap = styled.div`
  padding: 16px 34px;
`;

export const RemoveButton = styled.button`
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: #f0f0f0;
  justify-content: center;
  align-items: center;
  margin: 16px 32px 0 0;
  border-width: 0;
`;

export const RemoveButtonImage = styled.img`
  height: 30px;
  width: 30px;
`;

export const SubmitForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 14px;
  border-radius: 14px;
  height: 100%;
  background-color: #eaeaea;
`;
