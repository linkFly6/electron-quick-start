import DemoStore from './demo-store';
import UserStore from './user-store';

export default class RootStore {
  public demo: DemoStore;
  public user: UserStore;

  constructor() {
    this.demo = new DemoStore();
    this.user = new UserStore();
  }
}

/**
 * 可以在多个地方使用，不局限于 tsx
 */
export const store = new RootStore();
