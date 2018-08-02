import { observable, computed } from 'mobx';
import BaseStore from './base-store';

export default class UserStore extends BaseStore {
  @observable public name = '';
  @observable public code = '';
}
