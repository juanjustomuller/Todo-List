import React from 'react'
import ArrowR from './icons/ArrowR'
import ArrowL from './icons/ArrowL'
import { getNameDay } from '../helpers/getNameDay'
import { getDate } from '../helpers/getDate'

const Day = ({ dateM, setDateM }) => {

  const addDays = (date) => { //recibe un date de parametro
    let addDate = new Date(dateM)  
    addDate.setDate(date.getDate() + 1) //del date (dia del mes) que me llega como parametro le sumo 1
    return addDate;
  }

  const restDays = (date) => { 
    let restDate = new Date(dateM)  
    restDate.setDate(date.getDate() - 1) //del date (dia del mes) que me llega como parametro le resto 1
    return restDate;
  }

const handleRight = () => {
console.log('right');
setDateM(addDays(dateM))
}

const handleLeft = () => {
  console.log('left');
  setDateM(restDays(dateM))
}
  
  return (
    <section className='flex justify-center items-center gap-8 my-20 [&>p]:text-gray02'>
      <p className="cursor-pointer" onClick={() =>handleLeft()}>
        <ArrowL />
      </p>
      <div className="w-[155px]">
        <h4 className="text-4xl font-medium">{getNameDay(dateM)}</h4>
        <p className="text-gray02">{getDate(dateM)}</p>
      </div>
      <p className="cursor-pointer" onClick={() =>handleRight()}>
        <ArrowR />
      </p>
    </section>
  )
}

export default Day