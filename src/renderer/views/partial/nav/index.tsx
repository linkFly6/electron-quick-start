import './style.styl';
import * as React from 'react';
import { observer } from 'mobx-react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { BaseComponent } from '@/components/base-component';

@observer
export default class App extends BaseComponent<any, any> {
  public render() {
    return (
      <nav className="app-navigation partial">
        {/* <p className="app-nav-txt no-drag">这是一段内容</p> */}
        <div className="account">
          <IconButton className="account-btn">
            <AccountCircle className="account-btn-icon" />
          </IconButton>
          <IconButton className="account-btn">
            <MoreVertIcon className="more-btn-icon" />
          </IconButton>
        </div>
      </nav>
    );
  }
}


