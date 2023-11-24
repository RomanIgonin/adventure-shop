import React from 'react';
import * as S from '@src/modules/faq/ui/styles';
import Footer from '@src/modules/home/ui/components/footer';
import UDText from '@src/modules/ud-ui/ud-text';
import { observer } from 'mobx-react-lite';
import faqStore from '@src/modules/faq/store';
import { useParams } from 'react-router-dom';

function FaqPage() {
  const { faq, isLoading } = faqStore;
  const { id } = useParams();

  const Info = () => {
    return (
      <UDText
        title={isLoading ? 'ОЖИДАЙТЕ' : 'ОШИБКА'}
        weight={700}
        size={32}
        style={{ display: 'flex', justifyContent: 'center', marginTop: 200 }}
      />
    );
  };

  const getFormattedText = (text: string) => {
    return text.split('</br>').map((str, i) => {
      return <UDText key={`p_${i}`} title={str} size={20} style={{ marginTop: 6 }} />;
    });
  };

  const FaqContent = () => {
    const faqContent = faq?.find(i => String(i.id) === id);
    if (faqContent) {
      return (
        <S.FaqContainer>
          <UDText title={faqContent.title} weight={700} style={{ marginBottom: 10 }} />
          {getFormattedText(faqContent.text)}
        </S.FaqContainer>
      );
    } else {
      return <Info />;
    }
  };

  return (
    <S.Container>
      <FaqContent />
      <Footer />
    </S.Container>
  );
}

export default observer(FaqPage);
