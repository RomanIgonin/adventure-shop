import React from 'react';
import * as S from '@src/modules/home/ui/components/header/styles';
import UDNavButton from '@src/modules/ud-ui/ud-nav-button';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import navBarStore from '@src/modules/navbar/store';
import authStore from '@src/modules/auth/store';
import UDText from '@src/modules/ud-ui/ud-text';

const Header = () => {
  const navigation = useNavigate();
  const { activeBtn, changeActiveBtn } = navBarStore;
  const { session, logout } = authStore;

  const onClickBtn = (btnName: string, route: string) => {
    changeActiveBtn(btnName);
    navigation(route);
  };

  const SessionBtn = () => {
    if (session) {
      return (
        <S.EmailWrap>
          <UDText title={session.user.email} weight={700} />
          <S.Logout onClick={() => logout()}>
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
        <img src={require('@img/logo.png')} width={450} height={90} alt={'logo'} />
      </S.LogoWrap>

      <S.LoginWrap>
        <S.IconUser src={require('@img/icon-user.png')} height={42} alt={'icon-user'} />
        <SessionBtn />
      </S.LoginWrap>
    </S.Container>
  );
};

export default observer(Header);
