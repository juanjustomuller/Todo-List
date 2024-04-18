export const getNameDay = (date) => {
    const numberDay = date.getDay()  //me retorna 1 dia de la semana, es decir del [0] al 6, el primer dia o el 0 seria domingo y el ultimo sabado [6] 
    const weekDays = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]

    return weekDays[numberDay]
    //queremos retornar una posicion del arreglo, de acuerdo al numberDay
    //osea si hoy es miercoles seria la posicion [3]
}