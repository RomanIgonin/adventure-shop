import React, { useEffect, useMemo } from 'react';
import catalogStore from '@src/modules/catalog/store';
import * as S from '@src/modules/catalog/ui/styles';
import Footer from '@src/modules/home/ui/components/footer';
import UDText from '@src/modules/ud-ui/ud-text';
import navBarStore from '@src/modules/navbar/store';
import { observer } from 'mobx-react-lite';

function CatalogPage() {
  const { catalog, getCatalog } = catalogStore;
  const { activeBtn } = navBarStore;

  const catalogType =
    activeBtn === 'ОДЕЖДА'
      ? 'clothes'
      : activeBtn === 'ОБУВЬ'
      ? 'boots'
      : activeBtn === 'ПАЛАТКИ'
      ? 'tents'
      : activeBtn === 'СПАЛЬНИКИ'
      ? 'sleepbags'
      : 'backpacks';

  const catalogSection = useMemo(
    () => catalog?.filter(item => item.type === catalogType),
    [catalog],
  );

  useEffect(() => {
    getCatalog();
  });

  return (
    <S.Container>
      <S.CatalogWrap>
        {catalogSection ? (
          catalogSection.map(item => {
            return (
              <S.CatalogItem key={item.id}>
                <S.Image src={item.imageUrl} alt={item.name} />
                <S.TextWrap>
                  <UDText title={String(item.price)} weight={700} />
                  <UDText title={item.name} style={{ marginTop: 8 }} />
                </S.TextWrap>
              </S.CatalogItem>
            );
          })
        ) : (
          <UDText
            title={'ТОВАРЫ ОТСУТСТВУЮТ'}
            weight={700}
            size={32}
            style={{ display: 'flex', justifyContent: 'center', marginTop: 200 }}
          />
        )}
      </S.CatalogWrap>

      <Footer />
    </S.Container>
  );
}

export default observer(CatalogPage);
