import React from 'react';
import UDInput from '@src/modules/ud-ui/ud-input';

function RegistrationPage() {
  return (
    <div>
      <div>Регистрация</div>
      <UDInput type={'email'} placeholder={'email'} />
      <UDInput type={'password'} placeholder={'password'} />
    </div>
  );
}

export default RegistrationPage;
