import { NavigationActions, StackActions } from 'react-navigation';

let navigator;
let routers;
let navigation;

/**
 * 设置顶层路由导航
 * @param navigatorRef
 */
function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

/**
 * 设置当前路由栈和导航对象
 * @param routers
 * @param navigation
 */
function setRouters(currentRouters, currentNavigation) {
  routers = currentRouters;
  navigation = currentNavigation;
}

/**
 * 跳转到指定页面
 * @param routeName
 * @param params
 */
function navigate(routeName, params) {
  navigator.dispatch(
    NavigationActions.navigate({
      type: NavigationActions.NAVIGATE,
      routeName,
      params,
    }),
  );
}
/**
 * 返回
 */
function pop() {
  navigator.dispatch(NavigationActions.back({ type: NavigationActions.BACK }));
}

/**
 * 用指定页面替换当前页面
 * @param routeName： 指定页面名字
 * @param params：传参
 */
function replace(routeName, params) {
  navigator.dispatch(
    StackActions.replace({
      routeName,
      params,
    }),
  );
}
/**
 * 返回到顶层
 */
function popToTop() {
  navigator.dispatch(NavigationActions.popToTop());
}

/**
 * 返回第n个页面
 * @param n
 */
function popToN(n) {
  if (n <= 0) {
    return;
  }
  const len = routers.length;
  if (len < n || n === len - 1) {
    this.popToTop();
    return;
  }
  navigation.goBack(routers[len - n].key);
}

/**
 * 返回到任意页面
 * @param routeName
 */
function popToRouter(routeName) {
  if (!routeName) {
    this.goBack();
    return;
  }
  const len = routers.length;
  for (let i = 0; i < len - 1; i++) {
    const route = routers[i];
    if (routeName === route.routeName && i !== len - 1) {
      navigation.goBack(routers[i + 1].key);
      return;
    }
  }
}
const Router = {
  setTopLevelNavigator,
  setRouters,
  navigate,
  replace,
  popToRouter,
  pop,
  popToTop,
};
export default Router;
