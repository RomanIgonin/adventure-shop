import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import * as S from '@src/modules/navbar/ui/styles';
import UDNavButton from '@src/modules/ud-ui/ud-nav-button';
import Header from '@src/modules/home/ui/components/header';
import { observer } from 'mobx-react-lite';
import navBarStore from '@src/modules/navbar/store';

function Navbar() {
  const navigation = useNavigate();
  const { activeBtn, changeActiveBtn } = navBarStore;

  const onClickBtn = (btnName: string, route: string) => {
    changeActiveBtn(btnName);
    navigation(route);
  };

  return (
    <S.Container>
      <Header />
      <S.NavbarWrap>
        <S.NavbarLeft>
          <UDNavButton
            title={'ОДЕЖДА'}
            color={'light'}
            isActive={activeBtn === 'ОДЕЖДА'}
            onClick={() => onClickBtn('ОДЕЖДА', '/catalog')}
          />
          <UDNavButton
            title={'ОБУВЬ'}
            color={'light'}
            isActive={activeBtn === 'ОБУВЬ'}
            onClick={() => onClickBtn('ОБУВЬ', '/catalog')}
            style={{ marginLeft: 50 }}
          />
          <UDNavButton
            title={'ПАЛАТКИ'}
            color={'light'}
            isActive={activeBtn === 'ПАЛАТКИ'}
            onClick={() => onClickBtn('ПАЛАТКИ', '/catalog')}
            style={{ marginLeft: 50 }}
          />
          <UDNavButton
            title={'СПАЛЬНИКИ'}
            color={'light'}
            isActive={activeBtn === 'СПАЛЬНИКИ'}
            onClick={() => onClickBtn('СПАЛЬНИКИ', '/catalog')}
            style={{ marginLeft: 50 }}
          />
          <UDNavButton
            title={'РЮКЗАКИ'}
            color={'light'}
            isActive={activeBtn === 'РЮКЗАКИ'}
            onClick={() => onClickBtn('РЮКЗАКИ', '/catalog')}
            style={{ marginLeft: 50 }}
          />
        </S.NavbarLeft>
        <S.NavbarRight>
          <UDNavButton
            title={'СТАТЬИ'}
            color={'light'}
            isActive={activeBtn === 'СТАТЬИ'}
            onClick={() => onClickBtn('СТАТЬИ', '/articles')}
          />
          <UDNavButton
            title={'ГОСТЕВАЯ КНИГА'}
            color={'light'}
            isActive={activeBtn === 'ГОСТЕВАЯ КНИГА'}
            onClick={() => onClickBtn('ГОСТЕВАЯ КНИГА', '/guests')}
            style={{ marginLeft: 50 }}
          />
        </S.NavbarRight>
      </S.NavbarWrap>

      <div id="outlet">
        <Outlet />
      </div>
    </S.Container>
  );
}

export default observer(Navbar);
