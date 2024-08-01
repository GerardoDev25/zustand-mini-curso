import { StateCreator } from 'zustand';

export interface PersonSlice {
  firstName: string;
  lastName: string;

  setFistName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
}

export const createPeronSlice: StateCreator<PersonSlice> = (set) => ({
  firstName: '',
  lastName: '',

  setFistName: (firstName: string) => set({ firstName }),
  setLastName: (lastName: string) => set({ lastName }),
});
