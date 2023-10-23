import UDText from '@src/modules/ud-ui/ud-text';
import UDInput from '@src/modules/ud-ui/ud-input';
import { guestsValidator } from '@src/modules/guests/domain/helpers/guestsValidator';
import UDButton from '@src/modules/ud-ui/ud-button';
import * as S from '@src/modules/guests/ui/components/addGuestForm/styles';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { GuestData } from '@src/modules/guests/domain/interfaces/GuestData';

function AddGuestForm() {
  const methods = useForm<GuestData>();
  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  const onSubmit = handleSubmit(async (data: GuestData) => {
    // reset();
  });

  return (
    <FormProvider {...methods}>
      <S.Container onSubmit={e => e.preventDefault()} noValidate>
        <S.AddForm>
          <UDText title={'ОСТАВЬТЕ СВОЙ СЛЕД'} size={24} weight={700} />
          <div style={{ marginTop: 28 }}>
            <UDInput
              name={'name'}
              type={'text'}
              placeholder={'Имя'}
              validation={{
                required: 'Заполните обязательное поле',
                validate: {
                  matchPattern: v => guestsValidator(v) || 'Введите более 2х символов',
                },
              }}
              errMessage={errors.name?.message || ''}
            />
          </div>

          <div style={{ marginTop: 10 }}>
            <UDInput
              name={'comment'}
              type={'text'}
              multiline={true}
              placeholder={'Комментарий'}
              validation={{
                required: 'Заполните обязательное поле',
                validate: {
                  matchPattern: v => guestsValidator(v) || 'Введите более 2х символов',
                },
              }}
              errMessage={errors.comment?.message || ''}
              style={{ height: 150 }}
            />
          </div>

          <UDButton title={'ДОБАВИТЬ'} onClick={onSubmit} style={{ marginTop: 28 }} />
        </S.AddForm>
      </S.Container>
    </FormProvider>
  );
}

export default AddGuestForm;
