import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import * as S from '@src/modules/navbar/ui/styles';
import UDButton from '@src/modules/ud-ui/ud-button';

function Navbar() {
  const navigation = useNavigate();

  return (
    <S.Container>
      <S.NavbarWrap>
        <S.NavbarLeft>
          <UDButton title={'Главная'} marg={20} onClick={() => navigation('/home')} />
          <UDButton title={'Статьи'} marg={20} onClick={() => navigation('/articles')} />
          <UDButton title={'Гостевая книга'} marg={20} onClick={() => navigation('/guests')} />
        </S.NavbarLeft>
        <S.NavbarRight>
          <UDButton title={'Вход'} marg={20} onClick={() => navigation('/login')} />
          <UDButton title={'Регистрация'} marg={20} onClick={() => navigation('/registration')} />
        </S.NavbarRight>
      </S.NavbarWrap>

      <div id="outlet">
        <Outlet />
      </div>
    </S.Container>
  );
}

export default Navbar;
