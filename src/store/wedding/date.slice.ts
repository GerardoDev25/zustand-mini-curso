import { StateCreator } from 'zustand';

export interface DateSlice {
  eventDate: Date;
  eventYYYYMMDD: () => string;
  eventHHMM: () => string;

  setEventDate: (partialDate: string) => void;
  setEventTime: (partialTime: string) => void;
}

export const createDateSlice: StateCreator<DateSlice> = (set, get) => ({
  eventDate: new Date(),
  eventYYYYMMDD: () => {
    return get().eventDate.toISOString().split('T')[0];
  },
  eventHHMM: () => {
    const hours = get().eventDate.getHours().toString().padStart(2, '0');
    const minutes = get().eventDate.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  },

  setEventDate: (partialDate: string) => {
    const date = new Date(partialDate);

    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate() + 1;
    const newDate = new Date(get().eventDate);
    newDate.setFullYear(year, month, day);

    set({ eventDate: newDate });
  },
  
  setEventTime: (partialTime: string) => {
    const [hours, minutes] = partialTime.split(':');
    const newDate = new Date(get().eventDate);
    newDate.setHours(parseInt(hours));
    newDate.setMinutes(parseInt(minutes));
    set({ eventDate: newDate });
  },
});
