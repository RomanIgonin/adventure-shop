import React, { useState } from 'react';
import * as S from '@src/modules/cart/ui/styles';
import Footer from '@src/modules/home/ui/components/footer';
import UDText from '@src/modules/ud-ui/ud-text';
import UDButton from '@src/modules/ud-ui/ud-button';
import cartStore from '@src/modules/cart/store';
import { CartProduct } from '@src/modules/cart/domain/interfaces/CartProduct';
import { observer } from 'mobx-react-lite';

function CartPage() {
  const { cart, removeCartProduct, totalCost, removeAllCart } = cartStore;
  const [isOrderCreate, setOrderCreate] = useState(false);

  const onClickProduct = (item: CartProduct) => {
    // todo: Доделать
    console.log('onClickProduct');
  };

  const onClickRemove = async (id: number) => {
    await removeCartProduct(id);
  };

  const onSubmit = async () => {
    await removeAllCart();
    setOrderCreate(true);
    setTimeout(() => {
      setOrderCreate(false);
    }, 2000);
  };

  const ErrorInfo = () => {
    return (
      <UDText
        title={isOrderCreate ? 'СПАСИБО ЗА ПОКУПКУ' : 'КОРЗИНА ПУСТА'}
        weight={700}
        size={32}
        style={{ display: 'flex', justifyContent: 'center', marginTop: 200 }}
      />
    );
  };

  const Products = () => {
    if (cart && cart.length > 0) {
      return (
        <S.ProductsContainer>
          <S.ProductsWrap>
            {cart.map(item => {
              return (
                <S.ProductsItem key={item.id}>
                  <div
                    style={{ display: 'flex', flexDirection: 'row' }}
                    onClick={() => onClickProduct(item)}>
                    <S.Image src={item.imageUrl} alt={item.name} />
                    <S.TextWrap>
                      <UDText title={item.name} />
                      <UDText
                        title={String(item.price + ' руб')}
                        weight={700}
                        style={{ marginTop: 8 }}
                      />
                    </S.TextWrap>
                  </div>

                  <S.RemoveButton onClick={() => onClickRemove(item.id)}>
                    <S.RemoveButtonImage
                      src={require('@img/icon-delete.png')}
                      alt={'icon-delete'}
                    />
                  </S.RemoveButton>
                </S.ProductsItem>
              );
            })}
          </S.ProductsWrap>

          <S.SubmitForm>
            <UDText title={`К оплате ${totalCost} руб`} weight={700} />
            <UDButton
              title={'Оформить заказ'}
              onClick={() => onSubmit()}
              style={{ width: 300, marginTop: 14 }}
            />
          </S.SubmitForm>
        </S.ProductsContainer>
      );
    } else {
      return <ErrorInfo />;
    }
  };

  return (
    <S.Container>
      <Products />
      <Footer />
    </S.Container>
  );
}

export default observer(CartPage);
