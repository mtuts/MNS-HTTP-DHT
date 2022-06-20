import { API } from 'homebridge';

import { PLATFORM_NAME } from './settings';
import { MNS_HTML_DHT_Platform } from './platform';

/**
 * This method registers the platform with Homebridge
 */
export = (api: API) => {
  api.registerPlatform(PLATFORM_NAME, MNS_HTML_DHT_Platform);
};
