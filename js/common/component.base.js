/**
 * 继承该组件，增添四个生命周期函数：
 *
 * 页面将要出现：componentWillFocus() {}
 * 页面已经出现：componentDidFocus() {}
 * 页面将要消失：componentWillBlur() {}
 * 页面已经消失：componentDidBlur() {}
 *
 * 备注：
 * 可自行扩展
 */
import {PureComponent} from 'react';
import Router from '../router';

export default class BaseComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.componentWillFocus = this.componentWillFocus.bind(this);
    this.componentDidFocus = this.componentDidFocus.bind(this);
    this.componentWillBlur = this.componentWillBlur.bind(this);
    this.componentDidBlur = this.componentDidBlur.bind(this);
    this.willFocusSubscription = this.props.navigation.addListener(
      'willFocus',
      this.componentWillFocus,
    );
    this.didFocusSubscription = this.props.navigation.addListener(
      'didFocus',
      this.componentDidFocus,
    );
    this.willBlurSubscription = this.props.navigation.addListener(
      'willBlur',
      this.componentWillBlur,
    );
    this.didBlurSubscription = this.props.navigation.addListener(
      'didBlur',
      this.componentDidBlur,
    );
  }
  componentWillFocus() {
    this.checkAuth();
  }
  componentDidFocus() {}
  componentWillBlur() {}
  componentDidBlur() {}
  checkAuth = () => {
    storage
      .load({
        key: 'userToken',
      })
      .catch(err => {
        Router.navigate('Auth');
        global.authPage = this.props.navigation?.state?.routeName;
        global.authPageParam = this.props.navigation?.state?.params;
      });
  };
  componentWillUnmount() {
    this.willFocusSubscription.remove();
    this.didFocusSubscription.remove();
    this.willBlurSubscription.remove();
    this.didBlurSubscription.remove();
  }
}
