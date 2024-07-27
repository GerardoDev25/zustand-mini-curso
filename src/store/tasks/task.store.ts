import { create, StateCreator } from 'zustand';
import { Task } from '../../../interfaces/';

interface TaskState {
  // task: { [key: string]: Task };
  tasks: Record<string, Task>;
}

const storeApi: StateCreator<TaskState> = (set) => ({
  tasks: {
    'Ach 1': { id: 'Ach 1', title: 'task 1', status: 'done' },
    'Ach 2': { id: 'Ach 2', title: 'task 2', status: 'in-progress' },
    'Ach 3': { id: 'Ach 3', title: 'task 3', status: 'done' },
    'Ach 4': { id: 'Ach 4', title: 'task 4', status: 'done' },
  },
});

export const useTaskStore = create<TaskState>()(storeApi);