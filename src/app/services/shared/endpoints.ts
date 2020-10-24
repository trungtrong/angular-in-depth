import {environment} from './../../../environments/environment';

export const API_URL = !!environment.baseUrl ? `${environment.baseUrl}` : `${window.location.origin}`;

export const API_ENDPOINT = {
  //
  // Base
  Auth: `api/authentication`,
};
