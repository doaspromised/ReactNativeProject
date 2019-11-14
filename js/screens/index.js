/**
 * 页面注册
 * @type {{Detail: *}}
 */
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

let registeredComponent = {};
components.forEach(component => {
  registeredComponent[component.name] = component.path;
});
export default registeredComponent;
