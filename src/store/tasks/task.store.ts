import { create, StateCreator } from 'zustand';
import { Task, type TaskStatus } from '../../../interfaces/';

interface TaskState {
  // tasks: { [key: string]: Task };
  tasks: Record<string, Task>;

  getTaskByStatus: (status: TaskStatus) => Task[];
}

const storeApi: StateCreator<TaskState> = () => ({
  tasks: {
    'Ach 1': { id: 'Ach 1', title: 'task 1', status: 'done' },
    'Ach 2': { id: 'Ach 2', title: 'task 2', status: 'in-progress' },
    'Ach 3': { id: 'Ach 3', title: 'task 3', status: 'open' },
    'Ach 4': { id: 'Ach 4', title: 'task 4', status: 'done' },
  },

  getTaskByStatus(status:TaskStatus): Task[] {
    return Object.values(this.tasks).filter((task) => task.status === status);
  },
});

export const useTaskStore = create<TaskState>()(storeApi);
