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

export const RightContentWrap = styled.div`
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

export const IconCartWrap = styled.div`
  display: flex;
  margin: 0 30px 0 0;
`;

export const IconCart = styled.img`
  align-self: center;
`;

export const CartCounter = styled.div`
  display: flex;
  position: absolute;
  width: 24px;
  height: 24px;
  background-color: #e63d3d;
  border-radius: 12px;
  left: 32px;
  justify-content: center;
  align-items: center;
`;

export const IconUser = styled.img`
  margin: 0 20px 0 0;
  align-self: center;
`;
