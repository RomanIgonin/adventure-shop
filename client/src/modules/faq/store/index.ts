import { makeAutoObservable } from 'mobx';
import axios from 'axios';
import { Faq } from '@src/modules/faq/domain/interfaces/Faq';

const API_URL = process.env.REACT_APP_API_URL;
const PREFIX = 'faq';

class FaqStore {
  faq: Faq[] | null = null;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  getFaq = async () => {
    this.setLoading(true);
    try {
      const res = await axios.get(API_URL + `${PREFIX}`);
      if (res.status === 200) {
        this.setFaq(res.data);
      }
    } catch (e: any) {
      console.log(e.response.data.message);
    }
    this.setLoading(false);
  };

  private setFaq = (faq: Faq[] | null) => {
    this.faq = faq;
  };

  private setLoading = (bool: boolean) => {
    this.isLoading = bool;
  };
}

const faqStore = new FaqStore();
export default faqStore;
