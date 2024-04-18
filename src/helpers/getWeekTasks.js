import { getMonthName } from "./getMonthName";
import { getNameDay } from "./getNameDay";

export const getWeekTasks = (tasks) => {
  let weekDays = [];
  let today = new Date(); //fecha actual en la q etamos
  const oneDay = 24 * 60 * 60 * 1000; //(24 hs * 60 minutos * 60 seg * 1000 milisegundos)

  let numWeek = today.getDay(); //recuperamos el numero del dia (ej, si es jueves y la semana arranca del domingo, deberia ser 4)
  let timeDay = today.getTime();
  let weekOne = new Date(timeDay - numWeek * oneDay); //calcular el dia uno de la semana
  //al timeday le resto la multiplicion de 4 (en este caso) * el tiempo de un dia, por lo tanto le estariamos restando 4 dias en este caso
  //por lo tanto me da un resultado de 4 dias atras, que seria el inicio de la semana

  for (let i = 0; i < 7; i++) {
    const newDate = new Date(weekOne.getTime() + i * oneDay);
    const dateString = new Date(weekOne.getTime() + i * oneDay).toUTCString();
    console.log(dateString);

    const day = {
      id: crypto.randomUUID(),
      date: dateString,
      day: getNameDay(newDate),
      month: getMonthName(newDate),
      numDay: newDate.getDate(),
      tasks: [],
    };

    weekDays.push(day);
  }
  //console.log(weekDays);

  for (let j = 0; j < weekDays.length; j++) {
    for (let k = 0; k < tasks.length; k++) {
      const date1 = new Date(weekDays[j].date).setHours(0, 0, 0, 0);
      const date2 = new Date(tasks[k].date).setHours(0, 0, 0, 0);

      if (date1 === date2) {
        weekDays[j].tasks.push(tasks[k]);
      }
    }
  }
  return weekDays;
};
