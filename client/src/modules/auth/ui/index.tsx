import React, { useState } from 'react';
import UDInput from '@src/modules/ud-ui/ud-input';
import Footer from '@src/modules/home/ui/components/footer';
import * as S from '@src/modules/auth/ui/styles';
import UDText from '@src/modules/ud-ui/ud-text';
import UDButton from '@src/modules/ud-ui/ud-button';
import { FormProvider, useForm } from 'react-hook-form';
import { emailValidator } from '@src/modules/auth/domain/helpers/emailValidator';
import { nameValidator } from '@src/modules/auth/domain/helpers/nameValidator';
import authStore from '@src/modules/auth/store';
import { AuthData } from '@src/modules/auth/domain/interfaces/AuthData';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import navBarStore from '@src/modules/navbar/store';

function AuthPage() {
  const [isLogin, setLogin] = useState<boolean>(true);
  const [passType, setPassType] = useState<'password' | 'text'>('password');

  const navigation = useNavigate();

  const { changeActiveBtn } = navBarStore;

  const methods = useForm<AuthData>();
  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  const headerTitle = isLogin ? 'АВТОРИЗАЦИЯ' : 'РЕГИСТРАЦИЯ';
  const buttonTitle = isLogin ? 'ВХОД' : 'ЗАРЕГИСТРИРОВАТЬСЯ';
  const linkTitle = isLogin ? 'Ещё не зарегистрированы?' : 'Уже есть аккаунт?';
  const iconEye =
    passType === 'password' ? require('@img/icon-eye.png') : require('@img/icon-slash-eye.png');

  const onSubmit = handleSubmit(async (data: AuthData) => {
    if (isLogin) {
      const res = await authStore.login(data);
      if (res.status === 200) {
        reset();
        navigation('/');
        changeActiveBtn('ГЛАВНАЯ');
      }
    } else {
      const res = await authStore.registration(data);
      if (res.status === 200) {
        setLogin(true);
        reset();
      }
    }
  });

  const onClickEye = () => {
    if (passType === 'password') {
      setPassType('text');
    } else {
      setPassType('password');
    }
  };

  const onClickLink = () => {
    setLogin(!isLogin);
    reset();
    setPassType('password');
  };

  return (
    <FormProvider {...methods}>
      <S.Container onSubmit={e => e.preventDefault()} noValidate>
        <S.ImageWrap>
          <S.FormWrap>
            <UDText title={headerTitle} weight={700} size={32} style={{ marginTop: 216 }} />

            <div style={{ marginTop: 38 }}>
              <UDInput
                name={'email'}
                type={'email'}
                placeholder={'Email'}
                validation={{
                  required: 'Заполните обязательное поле',
                  validate: {
                    matchPattern: v => emailValidator(v) || 'Email введен не корректно',
                  },
                }}
                errMessage={errors.email?.message || ''}
              />
            </div>

            <div style={{ marginTop: 10, position: 'relative' }}>
              <S.EyeWrap onClick={onClickEye} isLogin={isLogin}>
                <S.Eye src={iconEye} />
              </S.EyeWrap>
              <UDInput
                name={'password'}
                type={passType}
                placeholder={'Пароль'}
                validation={{
                  required: 'Заполните обязательное поле',
                  minLength: {
                    value: 8,
                    message: 'Минимум 8 символов',
                  },
                }}
                errMessage={errors.password?.message || ''}
              />
            </div>

            {!isLogin && (
              <div>
                <div style={{ marginTop: 10 }}>
                  <UDInput
                    name={'firstName'}
                    type={'text'}
                    placeholder={'Имя'}
                    validation={{
                      required: 'Заполните обязательное поле',
                      validate: {
                        matchPattern: v => nameValidator(v) || 'Используйте только символы',
                      },
                    }}
                    errMessage={errors.firstName?.message || ''}
                  />
                </div>

                <div style={{ marginTop: 10 }}>
                  <UDInput
                    name={'lastName'}
                    type={'text'}
                    placeholder={'Фамилия'}
                    validation={{
                      required: 'Заполните обязательное поле',
                      validate: {
                        matchPattern: v => nameValidator(v) || 'Используйте только символы',
                      },
                    }}
                    errMessage={errors.lastName?.message || ''}
                  />
                </div>
              </div>
            )}

            <UDButton title={buttonTitle} onClick={onSubmit} style={{ marginTop: 28 }} />

            <S.Link onClick={() => onClickLink()}>
              <UDText
                title={linkTitle}
                weight={300}
                size={16}
                color={'light'}
                style={{ textDecorationLine: 'underline' }}
              />
            </S.Link>
          </S.FormWrap>

          <S.ImageBg src={require('@img/auth-bg.jpg')} />
        </S.ImageWrap>

        <Footer />
      </S.Container>
    </FormProvider>
  );
}

export default observer(AuthPage);
