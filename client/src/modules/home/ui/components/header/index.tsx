import React from 'react';
import * as S from '@src/modules/home/ui/components/header/styles';
import UDNavButton from '@src/modules/ud-ui/ud-nav-button';
import { observer } from 'mobx-react-lite';
import navBarStore from '@src/modules/navbar/store';
import authStore from '@src/modules/auth/store';
import UDText from '@src/modules/ud-ui/ud-text';
import cartStore from '@src/modules/cart/store';

interface Props {
  onClickBtn: (btnName: string, route: string) => void;
}
const Header = (props: Props) => {
  const { activeBtn } = navBarStore;
  const { session, logout } = authStore;
  const { cart, removeAllCart } = cartStore;

  const { onClickBtn } = props;
  const showCounter = cart && cart.length > 0;

  const onClickLogout = async () => {
    await logout();
    await removeAllCart();
  };

  const SessionBtn = () => {
    if (session) {
      return (
        <S.EmailWrap>
          <UDText title={session.user.email} weight={700} />
          <S.Logout onClick={onClickLogout}>
            <UDText title={'ВЫХОД'} weight={700} size={14} style={{ color: '#DBAB3E' }} />
          </S.Logout>
        </S.EmailWrap>
      );
    } else {
      return (
        <UDNavButton
          title={'ВХОД'}
          isActive={activeBtn === 'ВХОД'}
          onClick={() => onClickBtn('ВХОД', '/auth')}
        />
      );
    }
  };

  const IconCart = () => {
    return (
      <S.IconCartWrap onClick={() => onClickBtn('КОРЗИНА', '/cart')}>
        <S.IconCart src={require('@img/icon-cart.png')} height={42} alt={'icon-cart'} />
        {showCounter && (
          <S.CartCounter>
            <UDText title={String(cart.length)} weight={700} size={12} color={'light'} />
          </S.CartCounter>
        )}
      </S.IconCartWrap>
    );
  };

  return (
    <S.Container>
      <S.HomeWrap>
        <UDNavButton
          title={'ГЛАВНАЯ'}
          isActive={activeBtn === 'ГЛАВНАЯ'}
          onClick={() => onClickBtn('ГЛАВНАЯ', '/')}
        />
      </S.HomeWrap>

      <S.LogoWrap>
        <img src={require('@img/logo.png')} width={280} alt={'logo'} />
      </S.LogoWrap>

      <S.RightContentWrap>
        <IconCart />
        <S.IconUser src={require('@img/icon-user.png')} height={42} alt={'icon-user'} />
        <SessionBtn />
      </S.RightContentWrap>
    </S.Container>
  );
};

export default observer(Header);
