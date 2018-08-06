import * as React from 'react';
import { observer, inject } from 'mobx-react';
import './tool-bar.styl';
import UserStore from '@/store/user-store';
import { BaseComponent } from '@/components/base-component';
import { RouteProps } from 'react-router-dom';

export interface IProps {
  userStore: UserStore;
  match: any;
}

interface IState {
  open: boolean;
}

@inject((allStores: any) => ({
  userStore: allStores.store.userStore,
}))
@observer
export default class Home extends BaseComponent<IProps & RouteProps, IState> {
  public render() {
    return (
      <div className="view note-index">
      </div>
    );
  }
}
