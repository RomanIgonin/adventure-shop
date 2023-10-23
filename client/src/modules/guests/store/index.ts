import { makeAutoObservable } from 'mobx';
import axios from 'axios';
import { Guest } from '@src/modules/guests/domain/interfaces/Guest';
import { GuestData } from '@src/modules/guests/domain/interfaces/GuestData';

const API_URL = 'http://localhost:8800/';
const PREFIX = 'guests';

class GuestsStore {
  guests: Guest[] | null = null;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  getGuests = async () => {
    this.setLoading(true);
    try {
      const res = await axios.get(API_URL + `${PREFIX}`);
      if (res.status === 200) {
        this.setGuests(res.data);
      }
    } catch (e: any) {
      console.log(e.response.data.message);
    }
    this.setLoading(false);
  };

  createGuest = async (guest: GuestData) => {
    this.setLoading(true);
    try {
      await axios.post(API_URL + `${PREFIX}`, guest);
      await this.getGuests();
    } catch (e: any) {
      console.log(e.response.data.message);
    }
    this.setLoading(false);
  };

  private setGuests = (guests: Guest[] | null) => {
    this.guests = guests;
  };

  private setLoading = (bool: boolean) => {
    this.isLoading = bool;
  };
}

const guestsStore = new GuestsStore();
export default guestsStore;
