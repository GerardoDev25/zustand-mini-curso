import classnames from 'classnames';
import {
  IoCheckmarkCircleOutline,
  IoEllipsisHorizontalOutline,
} from 'react-icons/io5';

import { Task, TaskStatus } from '../../../interfaces';
import { SingleTask } from './SingleTask';
import { useTaskStore } from '../../store/tasks';

interface Props {
  title: string;
  value: TaskStatus;
  tasks: Task[];
}

export const JiraTasks = ({ value, title, tasks }: Props) => {
  const isDragging = useTaskStore((store) => !!store.draggingTaskId);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log('handleDragOver: ', value);
  };
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log('handleDragLeave: ', value);
  };
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log('handleDrop: ', value);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={classnames(
        `!text-black border-4  relative flex flex-col rounded-[20px]  bg-white bg-clip-border shadow-3xl shadow-shadow-500  w-full !p-4 3xl:p-![18px]`,
        { 'border-blue-500 border-dotted': isDragging }
      )}
    >
      {/* Task Header */}
      <div className='relative flex flex-row justify-between'>
        <div className='flex items-center justify-center'>
          <div className='flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100'>
            <span className='flex justify-center items-center h-6 w-6 text-brand-500'>
              <IoCheckmarkCircleOutline style={{ fontSize: '50px' }} />
            </span>
          </div>

          <h4 className='ml-4 text-xl font-bold text-navy-700'>{title}</h4>
        </div>

        <button>
          <IoEllipsisHorizontalOutline />
        </button>
      </div>

      {/* Task Items */}
      <div className='h-full w-full'>
        {tasks.map((task) => (
          <SingleTask key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};
