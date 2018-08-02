import * as React from 'react';
import { observer, inject } from 'mobx-react';
import './style.styl';
import UserStore from '@/store/user-store';
import { BaseComponent } from '@/components/base-component';
interface IProps {
  userStore: UserStore;
  match: any;
}

@inject((allStores: any) => ({
  userStore: allStores.store.userStore,
}))
@observer
export default class Home extends BaseComponent<IProps, any> {
  public render() {
    return (
      <div className={'home-view'}>
        <div className="view-home__content">
          This is demo page.
        </div>
      </div>
    );
  }
}
