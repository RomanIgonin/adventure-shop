import React from 'react';
import * as S from '@src/modules/home/ui/components/footer/styles';
import UDText from '@src/modules/ud-ui/ud-text';
import { useNavigate } from 'react-router-dom';
import faqStore from '@src/modules/faq/store';
import { observer } from 'mobx-react-lite';

export const Footer = () => {
  const { faq } = faqStore;
  const navigation = useNavigate();

  return (
    <S.FooterWrap>
      <S.DividerTop />

      <S.Footer>
        <S.LeftList>
          <S.Col>
            <UDText title={'ADVENTURE SHOP'} weight={700} color={'light'} />

            {faq && (
              <>
                <S.Button onClick={() => navigation('/faq/1')}>
                  <UDText
                    title={faq[0].title}
                    color={'light'}
                    size={16}
                    style={{ marginTop: 26 }}
                  />
                </S.Button>

                <S.Button onClick={() => navigation('/faq/2')}>
                  <UDText title={faq[1].title} color={'light'} size={16} style={{ marginTop: 8 }} />
                </S.Button>

                <S.Button onClick={() => navigation('/faq/3')}>
                  <UDText title={faq[2].title} color={'light'} size={16} style={{ marginTop: 8 }} />
                </S.Button>
              </>
            )}
          </S.Col>

          <S.Col>
            <UDText title={'ПАРТНЕРАМ'} weight={700} color={'light'} />

            {faq && (
              <S.Button onClick={() => navigation('/faq/4')}>
                <UDText title={faq[3].title} color={'light'} size={16} style={{ marginTop: 26 }} />
              </S.Button>
            )}
          </S.Col>
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

export default observer(Footer);
