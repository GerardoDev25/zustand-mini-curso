import { createJSONStorage, StateStorage } from 'zustand/middleware';

const firebaseUrl =
  'https://zustand-storage-mini-course-fr-default-rtdb.firebaseio.com/zustand';

const storageApi: StateStorage = {
  getItem: async function (name: string): Promise<string | null> {
    try {
      const data = await fetch(`${firebaseUrl}/${name}.json`).then((res) =>
        res.json()
      );
      return JSON.stringify(data);
    } catch (error) {
      throw new Error(`${error}`);
    }
  },
  setItem: async function (name: string, value: string): Promise<void> {
    await fetch(`${firebaseUrl}/${name}.json`, {
      body: value,
      method: 'PUT',
    }).then((res) => res.json());
    return;
  },
  removeItem: function (name: string): unknown | Promise<unknown> {
    sessionStorage.removeItem(name);
    return;
  },
};

export const firebaseStorage = createJSONStorage(() => storageApi);
