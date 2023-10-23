import React from 'react';
import * as S from '@src/modules/home/ui/styles';
import Footer from '@src/modules/home/ui/components/footer';

function HomePage() {
  return (
    <S.Container>
      <S.ImageWrap>
        <S.Tagline src={require('@img/tagline.png')} alt={'tagline'} />
        <S.ImageBg src={require('@img/home-bg.jpg')} alt={'header'} />
      </S.ImageWrap>

      <Footer />
    </S.Container>
  );
}

export default HomePage;
