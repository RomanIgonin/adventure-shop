import React, { useEffect } from 'react';
import AdvList from '@src/modules/adv/ui';
import guestsStore from '@src/modules/guests/store';
import * as S from '@src/modules/guests/ui/styles';
import UDText from '@src/modules/ud-ui/ud-text';
import Footer from '@src/modules/home/ui/components/footer';
import AddGuestForm from '@src/modules/guests/ui/components/addGuestForm';
import { observer } from 'mobx-react-lite';

function GuestPage() {
  const { guests, getGuests } = guestsStore;

  useEffect(() => {
    getGuests();
  }, []);

  return (
    <S.Container>
      <div style={{ minHeight: 902 }}>
        {guests ? (
          <S.BodyWrap>
            <AddGuestForm />

            <S.GuestsList>
              {guests.map(item => {
                return (
                  <S.GuestWrap key={item.id}>
                    <S.GuestName title={item.name} weight={700} />
                    <S.GuestComment title={item.comment} size={16} style={{ marginTop: 6 }} />
                  </S.GuestWrap>
                );
              })}
            </S.GuestsList>

            <S.AdvWrap>
              <AdvList />
            </S.AdvWrap>
          </S.BodyWrap>
        ) : (
          <UDText
            title={'ГОСТЕВАЯ КНИГА ПУСТА'}
            weight={700}
            size={32}
            style={{ display: 'flex', justifyContent: 'center', marginTop: 200 }}
          />
        )}
      </div>

      <Footer />
    </S.Container>
  );
}

export default observer(GuestPage);
