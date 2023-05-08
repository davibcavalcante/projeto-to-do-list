document.addEventListener('click', (e) => {
    let targetClick = e.target
    let parentTarget = targetClick.closest('div')

    if (targetClick.classList.contains('btn-done')) {
        parentTarget.classList.toggle('done')

        const taskIndex = itens.findIndex((item) => item.nome === parentTarget.querySelector('p').innerText)
        itens[taskIndex].done = parentTarget.classList.contains('done')
        localStorage.setItem('item', JSON.stringify(itens))
    }

    if (targetClick.classList.contains('btn-edit')) {
        editTask(parentTarget)
    }

    if (targetClick.classList.contains('btn-remove')) {
        let paragraphRemove = parentTarget.querySelector('p')
        const taskIndexRemove = itens.findIndex((item) => item.nome === paragraphRemove.innerText)

        itens.splice(taskIndexRemove, 1)

        localStorage.setItem('item', JSON.stringify(itens))

        parentTarget.remove()
    }
})

function editTask(divTarget) {
    let divAddTask = document.querySelector('.add-task')
    let divEditTask = document.querySelector('.edit-task')

    divAddTask.classList.add('hide')
    localTasks.classList.add('hide')
    divEditTask.classList.remove('hide')

    btnCancelEdit.addEventListener('click', () => {
        divEditTask.classList.add('hide')
        divAddTask.classList.remove('hide')
        localTasks.classList.remove('hide')
    })

    let paragraphEdit = divTarget.querySelector('p')
    inputEditTask.value = paragraphEdit.innerText
    inputEditTask.focus()

    btnEditTask.addEventListener('click', (e) => {
        e.preventDefault()

        const taskIndexEdit = itens.findIndex((item) => item.nome === paragraphEdit.innerText)
        itens[taskIndexEdit].nome = inputEditTask.value
        localStorage.setItem('item', JSON.stringify(itens))
        paragraphEdit.innerText = inputEditTask.value

        divEditTask.classList.add('hide')
        divAddTask.classList.remove('hide')
        localTasks.classList.remove('hide')
        paragraphEdit = ''
    })
}