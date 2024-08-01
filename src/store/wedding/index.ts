import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { createPeronSlice, PersonSlice } from './person.slice';
import { createGuestSlice, GuestSlice } from './guests.slice';

type ShareState = PersonSlice & GuestSlice;

export const useWeddingBoundStore = create<ShareState>()(
  devtools((...a) => ({
    ...createPeronSlice(...a),
    ...createGuestSlice(...a),
  }))
);
