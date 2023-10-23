import React, { useCallback, useEffect } from 'react';
import articlesStore from '@src/modules/articles/store';
import { observer } from 'mobx-react-lite';
import Footer from '@src/modules/home/ui/components/footer';
import * as S from '@src/modules/articles/ui/styles';
import UDText from '@src/modules/ud-ui/ud-text';
import { useNavigate } from 'react-router-dom';
import AdvList from '@src/modules/adv/ui';

function ArticlesPage() {
  const { articles, getIntroArticles, getFullArticle } = articlesStore;

  const navigation = useNavigate();

  useEffect(() => {
    getIntroArticles();
  }, []);

  const onClickArticle = async (id: number) => {
    navigation(`/articles/${id}`);
  };

  const ArticlesList = useCallback(() => {
    if (articles) {
      return (
        <S.ArticlesListWrap>
          {articles.map(article => (
            <S.ArticleWrap key={article.id} onClick={() => onClickArticle(article.id)}>
              <S.ArticleImg src={article.introImageUrl} alt={article.title} />
              <S.TextWrap>
                <S.TopTextWrap>
                  <S.Title title={article.title} weight={700} size={24} />
                  <S.IntroText title={article.introText} size={16} style={{ marginTop: 10 }} />
                </S.TopTextWrap>
                <S.Date title={article.date} weight={700} size={16} style={{ color: '#9D9D9D' }} />
                <S.ReadMore>
                  <UDText title={'Читать далее...'} weight={700} size={16} />
                </S.ReadMore>
              </S.TextWrap>
            </S.ArticleWrap>
          ))}
        </S.ArticlesListWrap>
      );
    } else {
      return (
        <UDText
          title={'СТАТЕЙ НЕТ'}
          weight={700}
          size={32}
          style={{ display: 'flex', justifyContent: 'center', marginTop: 200 }}
        />
      );
    }
  }, [articles]);

  return (
    <S.Container>
      <S.ArticlesWrap>
        <ArticlesList />

        <S.AdvWrap>
          <AdvList />
        </S.AdvWrap>
      </S.ArticlesWrap>
      <Footer />
    </S.Container>
  );
}

export default observer(ArticlesPage);
