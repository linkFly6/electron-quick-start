import '@/assets/css/app.styl';
import * as React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import { Router } from 'react-router';
import history from './assets/js/history';
import { observer } from 'mobx-react';
import HomeView from './views/home';
import DemoView from './views/demo';
import Directory from './views/partial/directory';


@observer
export default class App extends React.Component<any, any> {
  public render() {
    return (
      <BrowserRouter>
        <Router history={history}>
          <div className="app">
            <div className="app-directory">
              <Route component={Directory} />
            </div>
            <div className="app-content">
              <Switch>
                <Route path="/demo" component={DemoView} />
                <Route component={HomeView} />
              </Switch>
              {/* 妈蛋 preact 没有对应的 mobox-react-devtools 工具 */}
              {/* {DevTools && search<{ debug?: string }>().debug ? <DevTools /> : null} */}
            </div>
          </div>
        </Router>
      </BrowserRouter>
    );
  }
}


