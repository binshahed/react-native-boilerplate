export interface LoginCredentials {
  user: string;
  pwd: string;
  [key: string]: unknown;
}

export interface LoginResponse {
  message: {
    data: {
      access_token: string;
      refresh_token: string;
      [key: string]: unknown;
    };
    [key: string]: unknown;
  };
  [key: string]: unknown;
}

export interface User {
  name: string;
  full_name: string;
  email: string;
  [key: string]: unknown;
}
