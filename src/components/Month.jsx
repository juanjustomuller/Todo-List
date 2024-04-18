import { getMonthTasks } from "../helpers/getMonthTasks";

const Month = ({ tasks }) => {
  const months = getMonthTasks(tasks);

  return (
    <section className="p-4">
      {months.map((item) => (
        <div key={item.id} className="border border-black rounded bg-gray04 p-2 text-left mb-2 flex justify-between gap-2">
          <div className="bg-gray05 p-1 rounded min-w-[98px] text-center h-fit">
            <span className="text-4xl">{item.month}</span>

            <span
              className="text-xs font-medium"
              style={{ writingMode: "vertical-lr" }}
            >
              {item.year}
            </span>
          </div>

          <div className="flex flex-wrap gap-1 justify-end">
            {item.tasks.map((task) => (
              <span key={task.id} className="border border-black px-2 rounded bg-gray03 inline-block h-fit">
                {task.tasks}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Month;

//<span className='text-4xl'>14</span>
