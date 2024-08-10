import { create, StateCreator } from 'zustand';
import { v4 as uuidv4 } from 'uuid';
import { devtools, persist } from 'zustand/middleware';
// import { produce } from 'immer';

import { Task, type TaskStatus } from '../../interfaces';
import { immer } from 'zustand/middleware/immer';

interface TaskState {
  // tasks: { [key: string]: Task };
  tasks: Record<string, Task>;
  draggingTaskId?: string;

  getTaskByStatus: (status: TaskStatus) => Task[];
  addTask: (title: string, status: TaskStatus) => void;
  setDraggingTaskId: (taskId: string) => void;
  removeDraggingTaskId: () => void;
  changeTaskStatus: (taskId: string, status: TaskStatus) => void;
  onTaskDrop: (status: TaskStatus) => void;
  totalTasksCount: () => number;
}

const storeApi: StateCreator<
  TaskState,
  [['zustand/devtools', never], ['zustand/immer', never]]
> = (set, get) => ({
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

  addTask: (title: string, status: TaskStatus) => {
    const newTask: Task = { id: uuidv4(), title, status };

    set((state) => {
      state.tasks[newTask.id] = newTask;
    });

    // ? this the native zustand wey
    // set((state) => ({ tasks: { ...state.tasks, [newTask.id]: newTask } }));
    // ? this method require a trey  party library
    // set(
    //   produce((state: TaskState) => {
    //     state.tasks[newTask.id] = newTask;
    //   })
    // );
  },

  setDraggingTaskId: (taskId: string) => {
    set({ draggingTaskId: taskId });
  },

  removeDraggingTaskId: () => {
    set({ draggingTaskId: undefined });
  },

  changeTaskStatus: (taskId: string, status: TaskStatus) => {
    // const task = get().tasks[taskId];
    // task.status = status;
    // set((state) => ({ tasks: { ...state.tasks, [taskId]: task } }));
    set((state) => {
      state.tasks[taskId].status = status;
    });
  },

  onTaskDrop: (status: TaskStatus) => {
    const taskId = get().draggingTaskId;
    if (!taskId) return;
    get().changeTaskStatus(taskId, status);
    get().removeDraggingTaskId();
  },

  totalTasksCount: () => {
    return Object.keys(get().tasks).length;
  },
  
});

export const useTaskStore = create<TaskState>()(
  devtools(persist(immer(storeApi), { name: 'tasks-storage' }), {
    name: 'tasks',
  })
);
