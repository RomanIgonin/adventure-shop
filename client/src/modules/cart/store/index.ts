import { makeAutoObservable } from 'mobx';
import axios from 'axios';
import { CartProduct } from '@src/modules/cart/domain/interfaces/CartProduct';
import authStore from '@src/modules/auth/store';

const API_URL = 'process.env.REACT_APP_API_URL';
const PREFIX = 'cart';

class CartStore {
  cart: CartProduct[] | null = null;
  totalCost = 0;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  getCartProducts = async () => {
    this.setLoading(true);
    try {
      const userId = this.getSessionUserId();
      if (userId) {
        const res = await axios.get(API_URL + `${PREFIX}` + `/${userId}`);
        if (res.status === 200) {
          this.setCartProducts(res.data);
          this.calculateTotalCost();
        }
      }
    } catch (e: any) {
      console.log(e.response.data.message);
    }
    this.setLoading(false);
  };

  putCartProduct = async (product: Omit<CartProduct, 'id'>) => {
    this.setLoading(true);
    try {
      await axios.post(API_URL + `${PREFIX}`, product);
      await this.getCartProducts();
    } catch (e: any) {
      console.log(e.response.data.message);
    }
    this.setLoading(false);
  };

  removeCartProduct = async (id: number) => {
    this.setLoading(true);
    try {
      await axios.post(API_URL + `${PREFIX}` + '/removeProduct', { id });
      await this.getCartProducts();
    } catch (e: any) {
      console.log(e.response.data.message);
    }
    this.setLoading(false);
  };

  removeAllCart = async () => {
    this.setCartProducts(null);
    this.setTotalCost(0);
    try {
      const userId = this.getSessionUserId();
      await axios.post(API_URL + `${PREFIX}` + '/removeUserProducts', { userId });
    } catch (e: any) {
      console.log(e.response.data.message);
    }
  };

  private setCartProducts = (products: CartProduct[] | null) => {
    this.cart = products;
  };

  private setLoading = (bool: boolean) => {
    this.isLoading = bool;
  };

  private setTotalCost = (cost: number) => {
    this.totalCost = cost;
  };

  private getSessionUserId = () => {
    const { session } = authStore;
    if (session) return session.user.id;
  };

  private calculateTotalCost = () => {
    if (this.cart) {
      const cost = this.cart.reduce((a, b) => a + b.price, 0);
      this.setTotalCost(cost);
    }
  };
}

const cartStore = new CartStore();
export default cartStore;
