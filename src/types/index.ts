export type AuthStateType = {
  accessToken: string;
  isLoading: boolean;
  fetchError: string;
  user: User | null;
  shop: Shop | null;
  google_token: string | null;
};

export type User = {
  name: string;
  email: string;
  password: string;
};

export type RegisterUserInput = {
  name: string;
  email: string;
  password: string;
};

export type FetchGoogleDataResponse = {
  status: string;
  token: string;
};

export type Shop = {
  shop_logo_url: string;
  shop_name: string;
  token: string;
};

export type SubmitAuthFormInput = RegisterUserInput & {
  shop_token: string;
  google_token: string;
};

export type SubmitAuthFormResponse = {
  status: string;
  message: string;
};
