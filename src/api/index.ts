import axios, { AxiosResponse } from 'axios';
import {
  FetchGoogleDataResponse,
  Shop,
  SubmitAuthFormInput,
  SubmitAuthFormResponse,
} from '../types';

const client = axios.create({
  // baseURL: process.env.REACT_APP_BASE_URL,
  baseURL: 'https://vast-basin-98801.herokuapp.com',
});

const API = {
  fetchShopifyData: async (name: string) => {
    const { data } = await client.get<Shop>(`/shopify`, { params: { name } });

    return data;
  },
  fetchGoogleData: async () => {
    const { data } = await client.get<FetchGoogleDataResponse>(`/google`);

    return data.token;
  },
  register: async (payload: SubmitAuthFormInput) => {
    const { data } = await client.post<
      SubmitAuthFormInput,
      AxiosResponse<SubmitAuthFormResponse>
    >(`/register`, payload);

    return data;
  },
};

export default API;
