import type { AuthStatus, User } from '../../interfaces';
import { StateCreator } from 'zustand';

export interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: User;
}

// export interface AuthStore {
//   state: AuthState;
//   login: (email: string, password: string) => Promise<void>;
//   logout: () => void;
// }

export const storeApi: StateCreator<AuthState> = (set) => ({
  status: 'unauthorize',
  token:undefined,
  user:undefined,

});
