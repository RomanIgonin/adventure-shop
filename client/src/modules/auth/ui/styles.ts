import styled from 'styled-components';

export const Container = styled.form``;

export const ImageWrap = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
`;

export const FormWrap = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EyeWrap = styled.div<{ isLogin: boolean }>`
  position: absolute;
  display: flex;
  height: 44px;
  width: 54px;
  bottom: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const Eye = styled.img`
  width: 24px;
  height: 24px;
`;

export const Link = styled.button`
  margin-top: 12px;
  background-color: rgba(255, 255, 255, 0);
  border-width: 0;
`;

export const ImageBg = styled.img`
  width: 100%;
  height: 1102px;
  object-fit: cover;
`;
