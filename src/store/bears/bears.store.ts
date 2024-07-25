import { create } from 'zustand';

interface BearState {
  blackBears: number;
  polarBears: number;
  pandaBears: number;

  increaseBlackBears: (by: number) => void;
  increasePolarBears: (by: number) => void;
  increasePandaBears: (by: number) => void;
}

export const useBearStore = create<BearState>()((set) => ({
  blackBears: 10,
  polarBears: 5,
  pandaBears: 1,

  increaseBlackBears: (by: number) => {
    return set((state) => ({ blackBears: state.blackBears + by }));
  },

  increasePolarBears: (by: number) => {
    return set((state) => ({ polarBears: state.polarBears + by }));
  },

  increasePandaBears: (by: number) => {
    return set((state) => ({ pandaBears: state.pandaBears + by }));
  },
}));
