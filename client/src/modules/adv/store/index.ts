import { makeAutoObservable } from 'mobx';
import axios from 'axios';
import { Adv } from '@src/modules/adv/domain/interfaces/Adv';
import { CatalogAdv } from '@src/modules/adv/domain/interfaces/CatalogAdv';

const API_URL = 'http://localhost:8800/';
const PREFIX = 'adv';

class AdvStore {
  adv: Adv[] | null = null;
  catalogAdv: CatalogAdv[] | null = null;
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

  getCatalogAdv = async () => {
    this.setLoading(true);
    try {
      const res = await axios.get(API_URL + `${PREFIX}` + '/catalog');
      if (res.status === 200) {
        this.setCatalogAdv(res.data);
      }
    } catch (e: any) {
      console.log(e.response.data.message);
    }
    this.setLoading(false);
  };

  private setCatalogAdv = (catalogAdv: CatalogAdv[] | null) => {
    this.catalogAdv = catalogAdv;
  };

  private setLoading = (bool: boolean) => {
    this.isLoading = bool;
  };
}

const advStore = new AdvStore();
export default advStore;
