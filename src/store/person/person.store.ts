import { create, type StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { useWeddingBoundStore } from '../wedding';
// import { firebaseStorage } from '../storage';
// import { logger } from '../middlewares';

interface PersonState {
  firstName: string;
  lastName: string;
}

interface Actions {
  setFistName: (value: string) => void;
  setLastName: (value: string) => void;
}

const storeApi: StateCreator<
  PersonState & Actions,
  [['zustand/devtools', never]]
> = (set) => ({
  firstName: '',
  lastName: '',
  setFistName: (value: string) =>
    set({ firstName: value }, false, 'setFistName'),
  setLastName: (value: string) =>
    set({ lastName: value }, false, 'setLastName'),
});

export const usePersonStore = create<PersonState & Actions>()(
  devtools(
    persist(storeApi, {
      name: 'person-storage',
      // storage: customSessionStorage,
      // storage: firebaseStorage,
    }),
    { name: 'person-state' }
  )
);

usePersonStore.subscribe((nextState /*prevState*/) => {
  // console.log({ nextState, prevState });
  useWeddingBoundStore.getState().setFistName(nextState.firstName);
  useWeddingBoundStore.getState().setLastName(nextState.lastName);
});
