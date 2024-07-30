import { JiraTasks } from '../../components';
import { useTaskStore } from '../../store/tasks';

export const JiraPage = () => {
  const openTask = useTaskStore((store) => store.getTaskByStatus('open'));

  const pendingTask = useTaskStore((store) =>
    store.getTaskByStatus('in-progress')
  );
  const doneTask = useTaskStore((store) => store.getTaskByStatus('done'));

  return (
    <>
      <h1>Tasks</h1>
      <p>State handle with Zustand Objects</p>
      <hr />

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <JiraTasks title='Pending' status='open' tasks={openTask} />

        <JiraTasks
          title='In Progress'
          status='in-progress'
          tasks={pendingTask}
        />

        <JiraTasks title='Done' status='done' tasks={doneTask} />
      </div>
    </>
  );
};
