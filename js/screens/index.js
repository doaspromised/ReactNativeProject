/**
 * 页面注册
 * @type {{Detail: *}}
 */
import { withMappedNavigationParams } from 'react-navigation-props-mapper';

const components = [
  {
    name: 'Detail',
    path: require('./home/details').default,
  },
  {
    name: 'Test',
    path: require('./home/details/test').default,
  },
];

const registeredComponent = {};
components.forEach((component) => {
  registeredComponent[component.name] = withMappedNavigationParams()(component.path);
});
export default registeredComponent;
