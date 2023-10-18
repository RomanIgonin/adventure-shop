import React from 'react';
import * as S from '@src/modules/home/ui/components/header/styles';
import UDNavButton from '@src/modules/ud-ui/ud-nav-button';
import { useNavigate } from 'react-router-dom';

interface Props {
  activeBtn: string;
  setActiveBtn: (nameBtn: string) => void;
}
const Header = (props: Props) => {
  const { activeBtn, setActiveBtn } = props;
  const navigation = useNavigate();

  const onClickBtn = (btnName: string, route: string) => {
    setActiveBtn(btnName);
    navigation(route);
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
        <UDNavButton
          title={'ВХОД'}
          isActive={activeBtn === 'ВХОД'}
          onClick={() => onClickBtn('ВХОД', '/auth')}
        />
      </S.LoginWrap>
    </S.Container>
  );
};

export default Header;
