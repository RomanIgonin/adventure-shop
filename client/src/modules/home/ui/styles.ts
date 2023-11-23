import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const ImageWrap = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 58vh;
`;

export const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Tagline = styled.img`
  position: absolute;
  width: 940px;
`;
