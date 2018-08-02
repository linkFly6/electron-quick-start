import { observable, action, runInAction } from 'mobx';

export default class BaseStore {

  @action
  public init(data: object) {
    for (const key in data) {
      if (this.hasOwnProperty(key)) {
        this[key] = data[key];
      }
    }
  }

  @action
  public update<T = object>(prop: T | string, value?: string) {
    if (typeof prop === 'string' && this.hasOwnProperty(prop) && value !== undefined) {
      this[prop] = value;
    } else if (typeof prop === 'object') {
      for (const key in prop) {
        if (this.hasOwnProperty(key)) {
          (this as any)[key] = prop[key];
        }
      }
    }
  }

  @action
  public commit<T = object>(data: T) {
    runInAction(() => {
      this.update(data);
    });
  }
}
