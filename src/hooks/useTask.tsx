import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useTaskStore } from '../store/tasks';
import { TaskStatus } from '../interfaces';

interface Options {
  status: TaskStatus;
}

export const useTask = ({ status }: Options) => {
  const isDragging = useTaskStore((store) => !!store.draggingTaskId);
  const onTaskDrop = useTaskStore((store) => store.onTaskDrop);
  const addTask = useTaskStore((store) => store.addTask);
  const [onDragOver, setOnDragOver] = useState(false);

  const handleAddTask = async () => {
    const { isConfirmed, value } = await Swal.fire({
      title: 'Add new task',
      input: 'text',
      inputLabel: 'Task Name',
      inputPlaceholder: 'Add new task',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      buttonsStyling: false,

      inputValidator: (value) => {
        if (!value) {
          return 'You need to write something!';
        }
      },
    });

    if (!isConfirmed) return;
    addTask(value, status);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setOnDragOver(true);
  };
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setOnDragOver(false);
  };
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setOnDragOver(false);
    onTaskDrop(status);
  };

  return {
    isDragging,

    handleAddTask,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    onDragOver,
  };
};
