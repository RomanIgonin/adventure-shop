import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  height: 142px;
  align-items: center;
  margin: 0 8%;
  justify-content: space-between;
`;

export const HomeWrap = styled.div``;
export const LogoWrap = styled.div`
  display: flex;
  position: absolute;
  z-index: -1;
  width: 100%;
  justify-content: center;
`;

export const LoginWrap = styled.div`
  display: flex;
  position: relative;
`;

export const EmailWrap = styled.div`
  display: flex;
  height: 54px;
  align-items: center;
  justify-content: flex-end;
`;

export const Logout = styled.button`
  border-width: 0;
  background-color: rgba(255, 255, 255, 0);
  position: absolute;
  top: 48px;
`;

export const IconUser = styled.img`
  margin: 0 20px 0 0;
  align-self: center;
`;
