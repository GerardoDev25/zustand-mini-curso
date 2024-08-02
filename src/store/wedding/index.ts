import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { createPeronSlice, PersonSlice } from './person.slice';
import { createGuestSlice, GuestSlice } from './guests.slice';
import { createDateSlice, DateSlice } from './date.slice';

type ShareState = PersonSlice & GuestSlice & DateSlice;

export const useWeddingBoundStore = create<ShareState>()(
  devtools((...a) => ({
    ...createPeronSlice(...a),
    ...createGuestSlice(...a),
    ...createDateSlice(...a),
  }))
);
