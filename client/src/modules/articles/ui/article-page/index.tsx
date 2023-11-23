import React, { useEffect } from 'react';
import articlesStore from '@src/modules/articles/store';
import { observer } from 'mobx-react-lite';
import Footer from '@src/modules/home/ui/components/footer';
import * as S from '@src/modules/articles/ui/article-page/styles';
import UDText from '@src/modules/ud-ui/ud-text';
import { useNavigate, useParams } from 'react-router-dom';
import AdvList from '@src/modules/adv/ui';

function ArticlePage() {
  const { articles, getFullArticle } = articlesStore;

  const { id } = useParams();
  const navigation = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (id) {
      getFullArticle(id);
    }
  }, []);

  const article = articles?.find(item => String(item.id) === id);

  const getFormattedText = (text: string) => {
    return text.split('</br>').map((str, i) => {
      return (
        <S.FullText
          key={`p_${i}`}
          title={str}
          size={20}
          style={{ marginTop: 20, paddingLeft: '10%', paddingRight: '10%' }}
        />
      );
    });
  };

  if (article) {
    const { id, title, introText, fullText, fullImageUrl, date } = article;

    return (
      <S.Container>
        <S.BodyWrap>
          <S.GoBack onClick={() => navigation('/articles')}>
            <img src={require('@img/arrow-left.png')} alt={'arrow-left'} width={30} height={30} />
            <UDText title={'Назад'} style={{ marginLeft: 12 }} />
          </S.GoBack>

          <S.ArticleWrap key={id}>
            <S.Title
              title={title}
              weight={700}
              size={24}
              style={{ paddingLeft: '10%', paddingRight: '10%' }}
            />
            <S.IntroText
              title={introText}
              size={20}
              style={{ marginTop: 10, paddingLeft: '10%', paddingRight: '10%' }}
            />
            {fullImageUrl && <S.ArticleImg src={fullImageUrl} alt={article.title} />}
            <S.TextWrap>{fullText && getFormattedText(fullText)}</S.TextWrap>
            <S.Date
              title={date}
              weight={700}
              size={20}
              style={{
                color: '#9D9D9D',
                width: '100%',
                marginTop: 40,
                marginRight: 220,
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            />
          </S.ArticleWrap>

          <S.AdvWrap>
            <AdvList />
          </S.AdvWrap>
        </S.BodyWrap>

        <Footer />
      </S.Container>
    );
  } else {
    return (
      <UDText
        title={'ОШИБКА, СТАТЬЯ НЕ НАЙДЕНА'}
        weight={700}
        size={32}
        style={{ display: 'flex', justifyContent: 'center', marginTop: 200 }}
      />
    );
  }
}

export default observer(ArticlePage);
