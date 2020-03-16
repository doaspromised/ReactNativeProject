/**
 * 页面注册
 * @type {{Detail: *}}
 */
import { withMappedNavigationParams } from 'react-navigation-props-mapper';

const components = [
  {
    name: 'Home',
    path: require('./home').default,
  },
  {
    name: 'Mine',
    path: require('./mine').default,
  },
  {
    name: 'Detail',
    path: require('./home/details').default,
  },
  {
    name: 'Test',
    path: require('./home/details/test').default,
  },
  {
    name: 'Login',
    path: require('./login').default,
  },
  {
    name: 'Identity',
    path: require('./login/identity').default,
  },
];

const registeredComponent = {};
components.forEach((component) => {
  registeredComponent[component.name] = withMappedNavigationParams()(component.path);
});
export default registeredComponent;
