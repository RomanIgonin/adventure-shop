import { action, makeObservable, observable } from 'mobx';
import { User } from '@src/modules/auth/domain/interfaces/User';

class AuthStore {
  currUser = {};
  isAuth = false;

  constructor() {
    makeObservable(this, {
      currUser: observable,
      isAuth: observable,
      setCurrUser: action,
    });
  }

  setCurrUser = (user: User) => {
    this.currUser = user;
  };
}
export default AuthStore;
