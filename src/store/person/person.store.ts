import { create } from 'zustand';

interface PersonStore {
  firstName: string;
  lastName: string;
}

interface Actions {
  setFistName: (value: string) => void;
  setLastName: (value: string) => void;
}

export const usePersonStore = create<PersonStore & Actions>()((set) => ({
  firstName: '',
  lastName: '',
  setFistName: (value: string) => set((state) => ({ firstName: value })),
  setLastName: (value: string) => set((state) => ({ lastName: value })),
}));
