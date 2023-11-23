import React, { useEffect } from 'react';
import * as S from '@src/modules/catalog/ui/product-card/styles';
import Footer from '@src/modules/home/ui/components/footer';
import { observer } from 'mobx-react-lite';
import { useNavigate, useParams } from 'react-router-dom';
import catalogStore from '@src/modules/catalog/store';
import UDText from '@src/modules/ud-ui/ud-text';
import UDButton from '@src/modules/ud-ui/ud-button';

function ProductCardPage() {
  const { catalog } = catalogStore;

  const { id } = useParams();
  const navigation = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product = catalog?.find(item => String(item.id) === id);

  const ErrorInfo = () => {
    return (
      <UDText
        title={'ОШИБКА, ТОВАР НЕ НАЙДЕН'}
        weight={700}
        size={32}
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: 200,
          width: '68%',
        }}
      />
    );
  };

  const onClickAddToCart = () => {
    console.log('q');
  };

  const Product = () => {
    if (product) {
      const { id, desc, name, imageUrl, price } = product;
      return (
        <S.ProductWrap>
          <S.TopContent>
            <S.LeftContent>
              <UDText title={name} weight={700} size={24} />
              <UDText title={'Код товара: ' + id} style={{ marginTop: 14 }} />
              <S.Image src={imageUrl} alt={name} style={{ marginTop: 14 }} />
            </S.LeftContent>

            <S.RightContent>
              <UDText title={price + 'руб'} weight={700} size={24} />
              <UDButton
                title={'Добавить в корзину'}
                onClick={onClickAddToCart}
                style={{ width: 300, marginTop: 14 }}
              />
            </S.RightContent>
          </S.TopContent>

          <UDText title={'Описание: ' + desc} style={{ marginTop: 24 }} />
        </S.ProductWrap>
      );
    } else {
      return <ErrorInfo />;
    }
  };

  return (
    <S.Container>
      <S.BodyWrap>
        <S.GoBack onClick={() => navigation('/catalog')}>
          <img src={require('@img/arrow-left.png')} alt={'arrow-left'} width={30} height={30} />
          <UDText title={'Назад'} style={{ marginLeft: 12 }} />
        </S.GoBack>

        <Product />
      </S.BodyWrap>

      <Footer />
    </S.Container>
  );
}

export default observer(ProductCardPage);
