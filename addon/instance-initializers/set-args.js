export function initialize(instance) {
  const embedded = instance.lookup('service:embedded');
  embedded.args = instance.application?.config?.args || {};
  embedded.rootElement = instance.rootElement;
  embedded.webComponent = instance.application?.config?.webComponent;
}
