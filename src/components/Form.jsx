import { useState } from 'react'
import Text from './icons/Text'

const Form = ({dateM, tasks, setTasks}) => {
  const [value, setValue] = useState("")

  const handleInput = (e) => {
    e.preventDefault()

    const newTask = {
      id: crypto.randomUUID,
      date: dateM,
      tasks: value,
      done: false
    }

    setTasks([...tasks, newTask])
    setValue("")
  }


  return (
    <section className="max-w-[450px] m-auto my-3 px-4">
      <div className="border border-black rounded bg-gray04 flex items-center p-2">
        <span className="text-gray02 mr-2"><Text /></span>
        <form className="w-full" onSubmit={handleInput}>
          <input
          className='w-full bg-transparent outline-none'
          type="text"
          placeholder='Add a task...'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          />
        </form>
      </div>
    </section>
  )
}

export default Form