const toDo = {
    list: {
        'иду домой': 'In Progress',
    },

    addTask(task = 'Nothing is ', status = 'To Do') {
        this.list[task] = status;
    }, // добавляет новую задачу
    
    changeStatus(task = 'Nothing is ', status) {
        if (status === 'In Progress') {
            this.list[task] = 'In Progress'
        } else if (status === 'Done') {
            this.list[task] = 'Done'
        }

    }, // меняет статус задачи
    
    deleteTask(task) {
        delete this.list[task];
    }, // удаляет задачу

    showList() {
        for (task in this.list) {
            const arr = Object.entries(this.list);
            arr.sort()
            let arrSort = arr.reverse()
            
            for (i = 0; i < arrSort.length; i++) {
                console.log(`"${arrSort[i][0]}": ${arrSort[i][1]}`)
            }
            break
        }
        
    }
}

toDo.addTask('поесть кашу'); // добавляет новую задачу
toDo.addTask('убрать мыло');
toDo.addTask('пожарить блины');
toDo.changeStatus('иду домой', 'Done'); // меняет статус задачи
toDo.changeStatus('убрать мыло', 'In Progress');
toDo.deleteTask('убрать мыло'); // удаляет задачу
toDo.changeStatus('помыть посуду', 'In Progress')
toDo.changeStatus('пожарить блины', 'Done')
toDo.showList(); // показывает список всех задач