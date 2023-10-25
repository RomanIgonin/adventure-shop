import styled from 'styled-components';
import UDText from '@src/modules/ud-ui/ud-text';

export const Container = styled.div``;

export const BodyWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 60px 12%;
  min-height: 1102px;
`;

export const GuestsList = styled.div`
  width: 40%;
  margin-left: 4%;
`;

export const GuestWrap = styled.div`
  padding: 12px 28px;
  margin-bottom: 14px;
  border-radius: 10px;
  background-color: #f5f5f5;
`;

export const GuestName = styled(UDText)``;

export const GuestComment = styled(UDText)``;

export const AdvWrap = styled.div`
  width: 18%;
  margin-left: 6%;
`;
