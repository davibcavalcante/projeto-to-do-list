// SELECT ELEMENTS - ADD TASK
const inputAddTask = document.querySelector('#input-add-task')
const btnAddTask = document.querySelector('#btn-add-task')

// SELECT ELEMENTS - EDIT TASK
const inputEditTask = document.querySelector('#input-edit-task')
const btnEditTask = document.querySelector('#btn-edit-task')
const btnCancelEdit = document.querySelector('#btn-cancel-edit')

// SELECT ELEMENTS - TOOLBAR
const inputSearchTask = document.querySelector('#input-search')
const selectFilterTask = document.querySelector('#select-filter')

// SELECT ELEMENTS - TO DO
const localTasks = document.querySelector('#tasks')

const itens = JSON.parse(localStorage.getItem('item')) || []
itens.forEach((item) => {
    createDiv(item)
})

btnAddTask.addEventListener('click', (e) => {
    e.preventDefault()

    if (inputAddTask.value.length > 0) {
        const novoItem = {
            nome: inputAddTask.value,
            done: false
        }
    
        itens.push(novoItem)
        createDiv(novoItem)
    }

    inputAddTask.value = null
    inputAddTask.focus()
})

function createDiv(item) {
    let divTask = document.createElement('div')
    divTask.classList.add('todo')

    divTask.appendChild(createParagraph(item.nome))
    divTask.appendChild(createButton('button', 'btn-done', '&check;'))
    divTask.appendChild(createButton('button', 'btn-edit', '&#9999;'))
    divTask.appendChild(createButton('button', 'btn-remove', '&Chi;'))

    if (item.done) {
        divTask.classList.add('done');
    }

    localTasks.appendChild(divTask)
    localStorage.setItem('item', JSON.stringify(itens))
}

function createParagraph(text) {
    let paragraphTask = document.createElement('p')
    paragraphTask.innerText = text

    return paragraphTask
}

function createButton(element, classBtn, textBtn) {
    let btn = document.createElement(element)
    btn.innerHTML = textBtn
    btn.classList.add(classBtn)

    return btn
}
