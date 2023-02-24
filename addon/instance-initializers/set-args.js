export function initialize(instance) {
  const embedded = instance.lookup('service:embedded');
  embedded.args = instance.application?.config?.args || {};
  embedded.properties = instance.application?.config?.properties || {};
  embedded.rootElement = instance.rootElement;
}
