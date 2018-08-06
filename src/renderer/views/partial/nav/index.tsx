import './style.styl';
import * as React from 'react';
import { observer } from 'mobx-react';
import { BaseComponent } from '@/components/base-component';
import { Avatar, Button } from 'antd';

@observer
export default class App extends BaseComponent<any, any> {
  public render() {
    return (
      <nav className="app-navigation partial">
        {/* <p className="app-nav-txt no-drag">这是一段内容</p> */}
        <div className="account">
          <Button type="primary" shape="circle" icon="user" />
          <span className="split-line" />
          <Button type="primary" shape="circle" icon="setting" />
        </div>
      </nav>
    );
  }
}


