import { useState } from "react"
import PopUp from "./PopUp"
import Dots from "./icons/Dots"

const Options = ({idTask, tasks, setTasks}) => {
    const [open, setOpen] = useState(false)

    const handleOptions = (e) => {
        console.log('option');
        setOpen(current => !current)
    }

  return (
    <span
    className="relative"
    onClick={handleOptions}
    >
        <Dots />
        {
            open && <PopUp idTask={idTask} tasks={tasks} setTasks={setTasks} />
        }
    </span>
      )
}

export default Options