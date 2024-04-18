import { taskDone } from '../helpers/taskDone';
import Options from './Options';

const Task = ({item, tasks, setTasks}) => {

  const handleDone = () => {
    setTasks(taskDone(item.id, tasks))
  }

  return (
    <div className="flex justify-between gap-4 items-center my-4">
      <span className="cursor-pointer flex items-center">
        <input
        type="checkbox" 
        className="checkbox"
        onClick={(e)=> handleDone(e)}
        defaultChecked={item.done}
        />
      </span>
      <p className="grow text-left">{item.tasks}</p>
      <span className="cursor-pointer">
        <Options idTask={item.id} tasks={tasks} setTasks={setTasks}/>
      </span>
    </div>
  );
};

export default Task;
