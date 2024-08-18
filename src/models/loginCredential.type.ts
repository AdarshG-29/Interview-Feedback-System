export interface ILoginCredentials {
  username: string;
  password: string;
}
export interface ILoginResponse {
  token: string;
  error: string;
}

export interface ISignUpResponse {
  message: string;
  error: string;
}
