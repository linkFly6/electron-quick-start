import * as React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  withRouter,
  RouteComponentProps,
} from 'react-router-dom';
import { Router } from 'react-router';
import { store } from './store';
import history from './assets/js/history';
import { observer } from 'mobx-react';
import HomeView from './views/home';
import DemoView from './views/demo';

@observer
export default class App extends React.Component<any, any> {
  public render() {
    return (
      <BrowserRouter>
        <Router history={history}>
          <div className="app">
            <Switch>
              <Route path="/demo" component={DemoView} />
              <Route component={HomeView} />
            </Switch>
            {/* 妈蛋 preact 没有对应的 mobox-react-devtools 工具 */}
            {/* {DevTools && search<{ debug?: string }>().debug ? <DevTools /> : null} */}
          </div>
        </Router>
      </BrowserRouter>
    );
  }
}


