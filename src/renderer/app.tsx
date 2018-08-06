import '@/assets/css/app.styl';
import 'antd/dist/antd.css';
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
import Nav from './views/partial/nav';
import { Layout, LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

@observer
export default class App extends React.Component<any, any> {
  public render() {
    return (
      <LocaleProvider locale={zhCN}>
        <BrowserRouter>
          <Router history={history}>
            <div className="app">
              <Nav />
              <Layout className="app-body">
                <div className="app-directory">
                  <Route component={Directory} />
                </div>
                <div className="app-split-ine"></div>
                <div className="app-content">
                  <Layout>
                    <Switch>
                      <Route path="/demo" component={DemoView} />
                      <Route component={HomeView} />
                    </Switch>
                  </Layout>
                  {/* 妈蛋 preact 没有对应的 mobox-react-devtools 工具 */}
                  {/* {DevTools && search<{ debug?: string }>().debug ? <DevTools /> : null} */}
                </div>
              </Layout>
            </div>
          </Router>
        </BrowserRouter>
      </LocaleProvider>
    );
  }
}


