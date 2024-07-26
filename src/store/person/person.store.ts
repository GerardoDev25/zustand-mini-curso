import { create, type StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';
import { customSessionStorage } from '../../storage';

interface PersonState {
  firstName: string;
  lastName: string;
}

interface Actions {
  setFistName: (value: string) => void;
  setLastName: (value: string) => void;
}

const storeApi: StateCreator<PersonState & Actions> = (set) => ({
  firstName: '',
  lastName: '',
  setFistName: (value: string) => set(() => ({ firstName: value })),
  setLastName: (value: string) => set(() => ({ lastName: value })),
});

export const usePersonStore = create<PersonState & Actions>()(
  persist(storeApi, {
    name: 'person-storage',
    storage: customSessionStorage,
  })
);
