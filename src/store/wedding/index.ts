import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { createPeronSlice, PersonSlice } from './person.slice';
import { createGuestSlice, GuestSlice } from './guests.slice';
import { createDateSlice, DateSlice } from './date.slice';
import {
  createConfirmationSlice,
  ConfirmationSlice,
} from './confirmation.slice';

type ShareState = PersonSlice & GuestSlice & DateSlice & ConfirmationSlice;

export const useWeddingBoundStore = create<ShareState>()(
  devtools(
    (...a) => ({
      ...createPeronSlice(...a),
      ...createGuestSlice(...a),
      ...createDateSlice(...a),
      ...createConfirmationSlice(...a),
    }),
    { name: 'wedding state' }
  )
);
