import * as React from 'react';
import { observer, inject } from 'mobx-react';
import './style.styl';
import UserStore from '@/store/user-store';
import { BaseComponent } from '@/components/base-component';
import { RouteProps } from 'react-router-dom';
// import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import FolderIcon from '@material-ui/icons/Folder';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Assignment from '@material-ui/icons/Assignment';
import Divider from '@material-ui/core/Divider';

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
        <List
          component="nav"
          subheader={
            <div>
              <ListSubheader component="div">Nested List Items</ListSubheader>
              <Divider />
            </div>
          }
        >
          <ListItem button>
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText inset primary="mac 笔记" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText inset primary="JavaScript" />
          </ListItem>
          <ListItem button onClick={this.handleClick}>
            <ListItemIcon>
              {this.state.open ? <FolderOpenIcon /> : <FolderIcon />}
            </ListItemIcon>
            <ListItemText inset primary="Web 相关" />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding className="inset">
              <ListItem button>
                <ListItemIcon>
                  <Assignment />
                </ListItemIcon>
                <ListItemText inset primary="性能优化" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <Assignment />
                </ListItemIcon>
                <ListItemText inset primary="很长很长很长很长很长很长很长很长很长" title="很长很长很长很长很长很长很长很长很长"/>
              </ListItem>
            </List>
          </Collapse>
        </List>
      </div>
    );
  }
}
