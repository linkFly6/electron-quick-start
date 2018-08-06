import * as React from 'react';
import { observer, inject } from 'mobx-react';
import './style.styl';
import UserStore from '@/store/user-store';
import { BaseComponent } from '@/components/base-component';
import { RouteProps } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

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
  public state = { open: true };

  public handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  }
  public render() {
    return (
      <div className={'partial-directory'}>
        <Sider
          collapsible
        // collapsed={this.state.collapsed}
        // onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="folder" />
              <span>内容很长内容很长内容很长内容很长内容很长内容很长内容很长内容很长</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="folder" />
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="folder" /><span>HTML</span></span>}
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="folder" /><span>JavaScript</span></span>}
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">内容很长内容很长内容很长内容很长内容很长内容很长内容很长内容很长内容很长</Menu.Item>
            </SubMenu>
            {/* <Menu.Item key="9">
              <Icon type="folder" />
              <span>Option 2</span>
            </Menu.Item>
            <Menu.Item key="10">
              <Icon type="folder" />
              <span>Option 2</span>
            </Menu.Item>
            <Menu.Item key="11">
              <Icon type="folder" />
              <span>Option 2</span>
            </Menu.Item>
            <Menu.Item key="12">
              <Icon type="folder" />
              <span>Option 2</span>
            </Menu.Item>
            <Menu.Item key="13">
              <Icon type="folder" />
              <span>Option 2</span>
            </Menu.Item>
            <Menu.Item key="14">
              <Icon type="folder" />
              <span>Option 2</span>
            </Menu.Item>
            <Menu.Item key="15">
              <Icon type="folder" />
              <span>Option 2</span>
            </Menu.Item>
            <Menu.Item key="16">
              <Icon type="folder" />
              <span>Option 2</span>
            </Menu.Item>
            <Menu.Item key="17">
              <Icon type="folder" />
              <span>Option 2</span>
            </Menu.Item>
            <Menu.Item key="18">
              <Icon type="folder" />
              <span>Option 2</span>
            </Menu.Item> */}
          </Menu>
        </Sider>
      </div>
    );
  }
}
