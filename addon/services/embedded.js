import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class EmbeddedService extends Service {
  rootElement;
  webComponent;
  @tracked args = {};
  /**
   * The host name of our origin server, where the embedded app itself is hosted
   *
   * @property originHost
   * @type string
   * @public
   */
  get originHost() {
    let scriptTag = document.querySelector('script[src$="/embed.js"]');

    return scriptTag
      ? scriptTag.src.replace(/(https?:\/\/.*?)\/.*/g, '$1')
      : undefined;
  }
}
