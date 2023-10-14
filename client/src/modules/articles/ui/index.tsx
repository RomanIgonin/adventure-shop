import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Article {
  id: number;
  title: string;
  introText: string;
  fullText: string;
  cover: string;
}

function ArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await axios.get('http://localhost:8800/articles');
        setArticles(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchArticles();
  }, []);

  return (
    <div>
      {articles.map((article: Article) => (
        <div key={article.id} className={'articles'}>
          {article.cover && <img src={article.cover} alt="cover" />}
          <h2 className={'title'}>{article.title}</h2>
          <p className={'introText'}>{article.introText}</p>
        </div>
      ))}
    </div>
  );
}

export default ArticlesPage;
