import * as React from 'react';
import { observer, inject } from 'mobx-react';
import './style.styl';
import UserStore from '@/store/user-store';
import { BaseComponent } from '@/components/base-component';
import { Link, RouteProps, LinkProps } from 'react-router-dom';
interface IProps {
  userStore: UserStore;
  match: any;
}

@inject((allStores: any) => ({
  userStore: allStores.store.userStore,
}))
@observer
export default class Home extends BaseComponent<IProps & RouteProps, any> {
  public render() {
    const { match } = this.props;
    return (
      <div className={'home-view'}>
        <div className="view-home__content">
          This is home page.
        </div>
        <Link to={{
          pathname: '/demo',
          search: this.props.location!.search,
        }} replace className="btn">
          去 demo 页面
          </Link>
      </div>
    );
  }
}
