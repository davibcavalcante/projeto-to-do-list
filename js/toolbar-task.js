function filterTask() {
    const allTasks = document.querySelectorAll('.todo')
    for (let pos = 0; pos < allTasks.length; pos++) {
            let allTasksPos = allTasks[pos]

            if (selectFilterTask.value === 'done') {
                allTasksPos.classList.remove('hide')
                if (!(allTasksPos.classList.contains('done'))) {
                    allTasksPos.classList.add('hide')
                }
            } else if (selectFilterTask.value === 'todo') {
                allTasksPos.classList.remove('hide')
                if (allTasksPos.classList.contains('done')) {
                    allTasksPos.classList.add('hide')
                }
            } else {
                allTasksPos.classList.remove('hide')
            }
    }
}

inputSearchTask.addEventListener('input', () => {
    let allTasksSearch = document.querySelectorAll('.todo')
    for (let pos = 0; pos < allTasksSearch.length; pos++) {
        let taskSearch = allTasksSearch[pos]
        let paragraphSearch = taskSearch.querySelector('p').innerText

        if (inputSearchTask.value.length > 0) {
            let comparavel = paragraphSearch.substring(0, inputSearchTask.value.length)
            let comparavelMin = comparavel.toLowerCase()
            let inputMin = inputSearchTask.value.toLowerCase()
            if (comparavelMin != inputMin) {
                taskSearch.classList.add('hide')
            } else {
                taskSearch.classList.remove('hide')
            }
        } else {
            taskSearch.classList.remove('hide')
        }
    }
    
})