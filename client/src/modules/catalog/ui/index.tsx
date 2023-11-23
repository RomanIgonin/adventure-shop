import React, { useEffect, useMemo } from 'react';
import catalogStore from '@src/modules/catalog/store';
import * as S from '@src/modules/catalog/ui/styles';
import Footer from '@src/modules/home/ui/components/footer';
import UDText from '@src/modules/ud-ui/ud-text';
import navBarStore from '@src/modules/navbar/store';
import { observer } from 'mobx-react-lite';
import advStore from '@src/modules/adv/store';
import { CatalogItem } from '@src/modules/catalog/domain/interfaces/CatalogItem';
import { useNavigate } from 'react-router-dom';

function CatalogPage() {
  const { catalog, getCatalog, isLoading } = catalogStore;
  const { activeBtn } = navBarStore;
  const { catalogAdv, getCatalogAdv } = advStore;

  const navigation = useNavigate();

  const catalogType = useMemo(
    () =>
      activeBtn === 'ОДЕЖДА'
        ? 'clothes'
        : activeBtn === 'ОБУВЬ'
        ? 'boots'
        : activeBtn === 'ПАЛАТКИ'
        ? 'tents'
        : activeBtn === 'СПАЛЬНИКИ'
        ? 'sleepbags'
        : 'backpacks',
    [activeBtn],
  );

  const catalogSection = useMemo(
    () => catalog?.filter(item => item.type === catalogType),
    [catalog, catalogType],
  );

  useEffect(() => {
    getCatalog();
    getCatalogAdv();
  }, []);

  const onClickItem = (item: CatalogItem) => {
    navigation(`/catalog/${item.id}`);
  };

  return (
    <S.Container>
      <S.BodyWrap>
        {catalogSection ? (
          <>
            <S.CatalogWrap>
              {catalogSection.map(item => {
                return (
                  <S.CatalogItem key={item.id} onClick={() => onClickItem(item)}>
                    <S.Image src={item.imageUrl} alt={item.name} />
                    <S.TextWrap>
                      <UDText title={String(item.price + ' руб')} weight={700} />
                      <UDText title={item.name} style={{ marginTop: 8 }} />
                    </S.TextWrap>
                  </S.CatalogItem>
                );
              })}
            </S.CatalogWrap>

            {catalogAdv && (
              <S.AdvWrap>
                {catalogAdv.map(item => {
                  return (
                    <S.CatalogItem key={item.id}>
                      <S.Image src={item.imageUrl} alt={item.title} />
                      <S.TextWrap>
                        <UDText title={item.title} weight={700} />
                        <UDText title={item.desc} style={{ marginTop: 8 }} />
                      </S.TextWrap>
                    </S.CatalogItem>
                  );
                })}
              </S.AdvWrap>
            )}
          </>
        ) : (
          <UDText
            title={isLoading ? 'ОЖИДАЙТЕ' : 'ТОВАРЫ ОТСУТСТВУЮТ'}
            weight={700}
            size={32}
            style={{ display: 'flex', justifyContent: 'center', marginTop: 200 }}
          />
        )}
      </S.BodyWrap>

      <Footer />
    </S.Container>
  );
}

export default observer(CatalogPage);
