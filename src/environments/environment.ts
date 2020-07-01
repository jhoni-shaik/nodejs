// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { KeycloakConfig } from 'keycloak-angular';

// Add here your keycloak setup infos
//'https://v-dev-test21.a4590.pers.state.or.us:9085/auth', -- dev1 SSO
const keycloakConfig: KeycloakConfig = {
  url: 'https://v-dev-test21.a4590.pers.state.or.us:9085/auth',
  realm: 'DEV1',
  clientId: 'epsa-web-app',
  credentials: {
    secret: 'caaeaf75-85e8-4633-bac3-723aba926f50'
  }
};

export const environment = {
  production: false,
  keycloakConfig
  };


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
