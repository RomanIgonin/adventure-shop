import React, { useEffect } from 'react';
import advStore from '@src/modules/adv/store';
import { observer } from 'mobx-react-lite';
import * as S from '@src/modules/adv/ui/styles';

function AdvList() {
  const { adv, getAdv } = advStore;

  useEffect(() => {
    getAdv();
  }, []);

  if (adv) {
    return (
      <S.Container>
        <S.AdvList>
          {adv.map(item => (
            <S.AdvWrap key={item.id} dangerouslySetInnerHTML={{ __html: item.html }}></S.AdvWrap>
          ))}
        </S.AdvList>
      </S.Container>
    );
  } else {
    return <></>;
  }
}

export default observer(AdvList);
