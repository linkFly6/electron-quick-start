import * as React from 'react';
// import { Toast } from 'antd-mobile';
// import { sweetAlert } from '@/components/SweetAlert';

export class BaseComponent<T = {}, S = {}> extends React.Component<T, S> {
  /**
   * 通用快捷提示框
   */
  protected Toast = {
    // ...Toast,
  };
  /**
   * 通用快捷对话框，封装了 Modal
   */
  // protected sweetAlert = sweetAlert;
}


