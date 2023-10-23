import { makeAutoObservable } from 'mobx';

class NavBarStore {
  activeBtn = 'ГЛАВНАЯ';

  constructor() {
    makeAutoObservable(this);
  }

  changeActiveBtn = (btnName: string) => {
    this.setActiveNavBtn(btnName);
  };

  private setActiveNavBtn = (btnName: string) => {
    this.activeBtn = btnName;
  };
}

const navBarStore = new NavBarStore();
export default navBarStore;
