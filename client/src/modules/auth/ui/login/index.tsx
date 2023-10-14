import React from 'react';
import UDInput from '@src/modules/ud-ui/ud-input';

function LoginPage() {
  return (
    <div>
      <div>Вход</div>
      <UDInput type={'email'} placeholder={'email'} />
      <UDInput type={'password'} placeholder={'password'} />
    </div>
  );
}

export default LoginPage;
