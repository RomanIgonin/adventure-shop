import { makeAutoObservable } from 'mobx';
import { Article } from '@src/modules/articles/domain/interfaces/Article';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const PREFIX = 'articles';

class ArticlesStore {
  articles: Article[] | null = null;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  getIntroArticles = async () => {
    this.setLoading(true);
    try {
      const res = await axios.get(API_URL + `${PREFIX}`);
      if (res.status === 200) {
        this.setArticles(res.data);
      }
    } catch (e: any) {
      console.log(e.response.data.message);
    }
    this.setLoading(false);
  };

  getFullArticle = async (id: string) => {
    this.setLoading(true);
    try {
      const res = await axios.get(API_URL + `${PREFIX}/${id}`);
      if (res.status === 200) {
        this.updateArticle(res.data[0]);
      }
    } catch (e: any) {
      console.log(e.response.data.message);
    }
    this.setLoading(false);
  };

  private updateArticle = (article: Article) => {
    if (this.articles) {
      const index = this.articles.findIndex(item => article.id === item.id);
      this.articles.splice(index, 1, article);
    } else {
      this.setArticles([article]);
    }
  };

  private setArticles = (articles: Article[] | null) => {
    this.articles = articles;
  };

  private setLoading = (bool: boolean) => {
    this.isLoading = bool;
  };
}

const articlesStore = new ArticlesStore();
export default articlesStore;
