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
import { PureComponent } from 'react';
import Router from '../router';

export default class BaseComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.componentWillFocus = this.componentWillFocus.bind(this);
    this.componentDidFocus = this.componentDidFocus.bind(this);
    this.componentWillBlur = this.componentWillBlur.bind(this);
    this.componentDidBlur = this.componentDidBlur.bind(this);
    const { navigation } = this.props;
    this.willFocusSubscription = navigation.addListener(
      'willFocus',
      this.componentWillFocus,
    );
    this.didFocusSubscription = navigation.addListener(
      'didFocus',
      this.componentDidFocus,
    );
    this.willBlurSubscription = navigation.addListener(
      'willBlur',
      this.componentWillBlur,
    );
    this.didBlurSubscription = navigation.addListener(
      'didBlur',
      this.componentDidBlur,
    );
  }

  componentWillUnmount() {
    this.willFocusSubscription.remove();
    this.didFocusSubscription.remove();
    this.willBlurSubscription.remove();
    this.didBlurSubscription.remove();
  }

  checkAuth = () => {
    storage
      .load({
        key: 'userToken',
      })
      .catch(() => {
        Router.navigate('Auth');
        const { navigation: { state: { routeName, params } } } = this.props;
        global.authPage = routeName;
        global.authPageParam = params;
      });
  };

  componentWillFocus() {
    this.checkAuth();
  }

  componentDidFocus() {}

  componentWillBlur() {}

  componentDidBlur() {}
}
