import React from 'react';
import * as S from '@src/modules/home/ui/components/footer/styles';
import UDText from '@src/modules/ud-ui/ud-text';

export const Footer = () => {
  return (
    <S.FooterWrap>
      <S.DividerTop />

      <S.Footer>
        <S.LeftList>
          <S.FirstCol>
            <UDText title={'ADVENTURE SHOP'} weight={700} color={'light'} />
            <UDText title={'О компании'} color={'light'} size={16} style={{ marginTop: 26 }} />
            <UDText
              title={'Доставка и оплата'}
              color={'light'}
              size={16}
              style={{ marginTop: 8 }}
            />
            <UDText title={'Обмен и возврат'} color={'light'} size={16} style={{ marginTop: 8 }} />
          </S.FirstCol>

          <S.SecondCol>
            <UDText title={'ПАРТНЕРАМ'} weight={700} color={'light'} />
            <UDText
              title={'Оптовым клиентам'}
              color={'light'}
              size={16}
              style={{ marginTop: 26 }}
            />
          </S.SecondCol>
        </S.LeftList>

        <S.ThirdCol>
          <UDText title={'КОНТАКТЫ'} weight={700} color={'light'} />
          <UDText
            title={'+7 (996) 125-03-69'}
            color={'light'}
            size={16}
            style={{ marginTop: 26 }}
          />
          <UDText title={'igonin.r@bk.ru'} color={'light'} size={16} style={{ marginTop: 8 }} />
          <a href="https://vk.com/ra_43" target="_blank" rel="noreferrer">
            <S.IconVk src={require('@img/icon-vk.png')} alt={'vk'} />
          </a>
        </S.ThirdCol>
      </S.Footer>

      <S.DividerBottom />
    </S.FooterWrap>
  );
};

export default Footer;
