import { makeAutoObservable } from 'mobx';
import axios from 'axios';
import { Adv } from '@src/modules/adv/domain/interfaces/Adv';

const API_URL = 'http://localhost:8800/';
const PREFIX = 'adv';

class AdvStore {
  adv: Adv[] | null = null;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  getAdv = async () => {
    this.setLoading(true);
    try {
      const res = await axios.get(API_URL + `${PREFIX}`);
      if (res.status === 200) {
        this.setAdv(res.data);
      }
    } catch (e: any) {
      console.log(e.response.data.message);
    }
    this.setLoading(false);
  };

  private setAdv = (adv: Adv[] | null) => {
    this.adv = adv;
  };

  private setLoading = (bool: boolean) => {
    this.isLoading = bool;
  };
}

const advStore = new AdvStore();
export default advStore;
