import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Day from './components/Day'
import Form from './components/Form'
import ListTasks from './components/ListTasks'
import Week from './components/Week'
import Month from './components/Month'
import Year from './components/Year'

function App() {

  const data = JSON.parse(localStorage.getItem('tasks')) //recupero la info del localStorage, pasandole el nombre que puse como primer parametro en el useEffect

  const [dateM, setDateM] = useState(new Date()) //estado global, va a  ser igual al useState con la fecha actual 
  const [tab, setTab] = useState('day')  //estado para saber en que seccion estoy, si en dia, semana, mes o año
  const [tasks, setTasks] = useState(data?data:[]) //estado para la lista de tareas. si data ya existe quiero que inicialices con data, sino con un [] vacio

  //console.log(tasks);
  
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))  //primero le paso el nombre con el que quiero que se guarde, y dsp como segundo parametro el objeto que queremos guardar
  }, [tasks]) //cada vez q cambie el task, se monta el useEffect(en este caso no monta el componente sino q lo monta al localStorage)

  return (
    <main>
      
      <div className='bg-gray03 text-white rounded max-w-[600px] m-auto'>
        <Header tab={tab} setTab={setTab}/>
        {
          tab === 'day' && <>
        <Day dateM={dateM} setDateM={setDateM}/>
        <Form dateM={dateM} tasks={tasks} setTasks={setTasks} />
        <ListTasks dateM={dateM} tasks={tasks} setTasks={setTasks} />
          </>
        }

        {tab === 'week' && <Week  tasks={tasks} />}

        {tab === 'month' && <Month tasks={tasks} />}

        {tab === 'year' && <Year tasks={tasks} />}

      </div>
    </main>
  )
}

export default App
