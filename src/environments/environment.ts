import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'SMACR',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44367/',
    redirectUri: baseUrl,
    clientId: 'SMACR_App',
    responseType: 'code',
    scope: 'offline_access SMACR',
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44367',
      rootNamespace: 'HCLTech.SMACR',
    },
  },
} as Environment;
