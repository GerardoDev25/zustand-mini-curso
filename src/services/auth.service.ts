import axios from 'axios';
import { tesloApi } from '../api/tesloApi';

export interface LoginResponse {
  id: string;
  email: string;
  fullName: string;
  isActive: boolean;
  roles: string[];
  token: string;
}

export class AuthService {
  static login = async (
    email: string,
    password: string
  ): Promise<LoginResponse> => {
    try {
      const { data } = await tesloApi.post<LoginResponse>('/auth/login', {
        email,
        password,
      });
      return data;
    } catch (error) {
      if (error instanceof axios.AxiosError) {
        console.log(error.response?.data);
        throw new Error(error.response?.data?.message);
      }
      console.log(error);
      throw new Error("Uname to log in");
      
      
    }
  };
}
