import type { AuthStatus, User } from '../../interfaces';
import { create, StateCreator } from 'zustand';
import { AuthService } from '../../services/auth.service';
import { devtools, persist } from 'zustand/middleware';

export interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: User;

  loginUser: (email: string, password: string) => Promise<void>;
  checkAuthStatus: () => Promise<void>;
  logout: () => void;
}

const storeApi: StateCreator<AuthState> = (set) => ({
  status: 'pending',
  token: undefined,
  user: undefined,

  loginUser: async (email, password) => {
    try {
      const { token, ...user } = await AuthService.login(email, password);
      set({ status: 'authorize', token, user });
    } catch (error) {
      set({ status: 'unauthorize', token: undefined, user: undefined });
      throw new Error('Unauthorize');
    }
  },

  checkAuthStatus: async () => {
    try {
      const { token, ...user } = await AuthService.checkStatus();
      set({ status: 'authorize', token, user });
    } catch (error) {
      set({ status: 'unauthorize', token: undefined, user: undefined });
    }
  },

  logout: () => {
    AuthService.logout();
    set({ status: 'unauthorize', token: undefined, user: undefined });
  },
});

export const useAuthStore = create<AuthState>()(
  devtools(persist(storeApi, { name: 'auth-storage' }))
);
