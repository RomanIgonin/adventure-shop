import { makeAutoObservable } from 'mobx';
import axios from 'axios';
import { CatalogItem } from '@src/modules/catalog/domain/interfaces/CatalogItem';

const API_URL = process.env.REACT_APP_API_URL;
const PREFIX = 'catalog';

class CatalogStore {
  catalog: CatalogItem[] | null = null;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  getCatalog = async () => {
    this.setLoading(true);
    try {
      const res = await axios.get(API_URL + `${PREFIX}`);
      if (res.status === 200) {
        this.setCatalog(res.data);
      }
    } catch (e: any) {
      console.log(e.response.data.message);
    }
    this.setLoading(false);
  };

  private setCatalog = (catalog: CatalogItem[] | null) => {
    this.catalog = catalog;
  };

  private setLoading = (bool: boolean) => {
    this.isLoading = bool;
  };
}

const catalogStore = new CatalogStore();
export default catalogStore;
