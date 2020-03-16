import { NavigationActions, StackActions } from 'react-navigation';
// import { initialRouteName } from './app.navigator';
/**
 * navigationStack: 
 * 
 * [
 * {
 * "index": 0,
 * "isTransitioning": false,
 * "key": "id-1584355828647-4",
 * "params": {},
 *  "routeName": "Main",
 *  "routes": [[Object], [Object]]
 * },
 *  {
 * "key": "id-1584355828647-6",
 * "params": {"itemId": 99, "name": "Nick", "otherParam": "anything you want here111"},
 *  "routeName": "Login"
 * },
 * {
 * "key": "id-1584355828647-7",
 *  "params": undefined,
 * "routeName": "Identity"
 * }
 * ]
 */
let navigator;
let navigationStack = [{routeName: 'Main'}];
let oldNavStack = [];
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
 * @param currentNavigationStack
 */
function setRouters(currentNavigationStack) {
  navigationStack = currentNavigationStack;
}

function getNavigationStack() {
  return navigationStack;
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
function push(routeName, params) {
  navigator.dispatch(
    StackActions.push({
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

function replaceToN(routeName, params, n) {
  // if (!routeName || n <= 0 || navigationStack.length <= 1) {
  //   return;
  // }
  const len = navigationStack.length;
  // if (n >= (len - 1)) {
  //   return;
  // }

/**
export interface NavigationReplaceAction {
type: 'Navigation/REPLACE';
key: string;
routeName: string;
params?: NavigationParams;
action?: NavigationAction;
}
 */
let tmpRouters = [];
navigationStack.some(element => {
  if (element.routeName !== 'Login') {
    tmpRouters.push(element.routeName);
  } 
  return element.routeName === 'Login'
});
tmpRouters.push(routeName);
reset(tmpRouters.length - 1, tmpRouters);
// push(routeName, params);
// navigator.dispatch(
//   StackActions.replace({
//     routeName,
//     params,
//     key: navigationStack[len - n].key,
//   }),
// );
  // navigator.dispatch(NavigationActions.back({ 
  //   key: navigationStack[len - n].key,
  //   type: NavigationActions.BACK 
  // }));
}

function reset(index, routeNames, params) {
  navigator.dispatch(
    StackActions.reset({
      index,
      actions: routeNames.map((routeName, idx) => (
        NavigationActions.navigate({
          routeName,
          params: idx === index ? params : {}
        })
      ))
    })
  );
}
/**
 * 返回到顶层
 */
function popToTop() {
  navigator.dispatch(StackActions.popToTop());
}


/**
 * 返回前n个页面
 * @param n
 */
function popToN(n) {
  if (n <= 0 || navigationStack.length <= 1) {
    return;
  }
  const len = navigationStack.length;
  if (n >= (len - 1)) {
    this.popToTop();
    return;
  }
  navigator.dispatch(NavigationActions.back({ 
    key: navigationStack[len - n].key,
    type: NavigationActions.BACK 
  }));
}

/**
 * 返回到任意页面
 * @param routeName
 */
function popToRouter(routeName) {
  if (navigationStack.length <= 1 || !routeName) {
    return;
  }
  const len = navigationStack.length;
  for (let i = 0; i < len - 1; i++) {
    const route = navigationStack[i];
    if (routeName === route.routeName && i !== len - 1) {
      navigator.dispatch(NavigationActions.back({ 
        key: navigationStack[i + 1].key,
        type: NavigationActions.BACK 
      }));
      return;
    }
  }
}

const Router = {
  setTopLevelNavigator,
  setRouters,
  navigate,
  reset,
  push,
  replace,
  replaceToN,
  popToRouter,
  pop,
  popToTop,
  popToN,
  getNavigationStack,
};
export default Router;
