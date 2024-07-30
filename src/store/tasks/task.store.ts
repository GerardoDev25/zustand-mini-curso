import { create, StateCreator } from 'zustand';
import { Task, type TaskStatus } from '../../../interfaces/';
import { devtools } from 'zustand/middleware';

interface TaskState {
  // tasks: { [key: string]: Task };
  tasks: Record<string, Task>;
  draggingTaskId?: string;

  getTaskByStatus: (status: TaskStatus) => Task[];
  setDraggingTaskId: (taskId: string) => void;
  removeDraggingTaskId: () => void;
}

const storeApi: StateCreator<TaskState> = (set, get) => ({
  draggingTaskId: undefined,
  tasks: {
    'Ach 1': { id: 'Ach 1', title: 'task 1', status: 'done' },
    'Ach 2': { id: 'Ach 2', title: 'task 2', status: 'in-progress' },
    'Ach 3': { id: 'Ach 3', title: 'task 3', status: 'open' },
    'Ach 4': { id: 'Ach 4', title: 'task 4', status: 'done' },
  },

  getTaskByStatus: (status: TaskStatus): Task[] => {
    const tasks = get().tasks;
    return Object.values(tasks).filter(
      (task) => task.status === status
    ) as Task[];
  },

  setDraggingTaskId: (taskId: string) => {
    set({ draggingTaskId: taskId });
  },

  removeDraggingTaskId: () => {
    set({ draggingTaskId: undefined });
  },
});

export const useTaskStore = create<TaskState>()(
  devtools(storeApi, { name: 'tasks' })
);
