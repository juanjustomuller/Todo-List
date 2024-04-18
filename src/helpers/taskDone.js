export const taskDone = (id, tasks) => { //recibe el id de las tareas y las tareas
    const newTasks = tasks.map(item => {
        const idTask = item.id
        let task = Object.assign({}, item) //variable auxiliar, el metodo Object se usa para copiar objetos pero lo vamos a usar para hacer una copia de nuestro estado actual que en esta funcion seria item
        if(id === idTask){  //si el id es igual al idtask, quiero que el atributo done cambie, si esta en false a true y visceversa
            task.done = !item.done
        }

        return task  //creamos una copia y modificamos el atributo done de esa copia y la hemos retornado para que se cree el nuevo arreglo con los valores modificados
    })

    return newTasks
}