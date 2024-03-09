/*Armazenamento de variáveis*/

//Adc Tasks
const adcTasksDiv = document.querySelector('.adc-task')
let newTaskInput = document.getElementById('inputTaskText')

//Edit Tasks

const editTaskDiv = document.querySelector('.edit-task')
const editTaskInput = document.getElementById('inputEditTask')

//Tasks-area

let tasksContainer = document.querySelector('.tasksContainer')
let cancelButton = document.getElementById('cancelButton')

/*Funções*/
 
const createTask = (text) =>{
    let divTask = document.createElement('div')
    divTask.classList = 'task'

    let tittleTask = document.createElement('h3')
    tittleTask.innerHTML = `${text}`
    divTask.appendChild(tittleTask)

    let divTaskButtons = document.createElement('div')
    divTaskButtons.classList = 'buttons'
    
    let doneButton = document.createElement('button')
    doneButton.classList = 'button done'
    let doneButtonIcon = document.createElement('span')
    doneButtonIcon.classList = 'material-symbols-outlined'
    doneButtonIcon.innerHTML = 'done'
    doneButton.appendChild(doneButtonIcon)
    divTaskButtons.appendChild(doneButton)

    let editButton = document.createElement('button')
    editButton.classList = 'button edit'
    let editButtonIcon = document.createElement('span')
    editButtonIcon.classList = 'material-symbols-outlined'
    editButtonIcon.innerHTML = 'edit'
    editButton.appendChild(editButtonIcon)
    divTaskButtons.appendChild(editButton)

    let deleteButton = document.createElement('button')
    deleteButton.classList = 'button delete'
    let deleteButtonIcon = document.createElement('span')
    deleteButtonIcon.classList = 'material-symbols-outlined'
    deleteButtonIcon.innerHTML = 'delete'
    deleteButton.appendChild(deleteButtonIcon)
    divTaskButtons.appendChild(deleteButton)

    divTask.appendChild(divTaskButtons)
    tasksContainer.appendChild(divTask)

    newTaskInput.value = ''
    newTaskInput.focus() 
}

const doneAndDelete = (divTask, n) =>{

    if(n == 1){
        divTask.classList.toggle("doneTask")
    }

    else if(n == 2){
        divTask.remove()
   }
}

const editTask = (currentTittle) =>{
    console.log(currentTittle)
    let newTittle = editTaskInput.value

    if(newTittle == ''){
        window.alert('Preencha o novo título antes de editar a tarefa!')
    }

    else{
        currentTittle.innerHTML = newTittle
        editTaskDiv.classList.toggle('hidden')
        editTaskInput.value = ''
    }
}


/*Event listeners*/

adcTasksDiv.addEventListener('submit' , (e) =>{
    e.preventDefault()
    let text = newTaskInput.value
    if(text == ''){
        window.alert('Escreva qual é sua tarefa antes de adiciona-la!')
    }
    else{
        createTask(text)
    }
})

tasksContainer.addEventListener('click' , (e) =>{
let n;   
let divButtons = e.target.parentNode
let divTask = divButtons.parentNode 
let curentTitle;

    if(e.target.classList.contains('done')){
        n = 1
        doneAndDelete(divTask, n)  
    }

    else if(e.target.classList.contains('delete')){
        n = 2
        doneAndDelete(divTask, n)
    }

    else if(e.target.classList.contains('edit')){
        editTaskDiv.classList.toggle('hidden')
        
        cancelButton.addEventListener('click' , (e) =>{
            e.preventDefault
            curentTitle = divTask.querySelector('h3')
            editTaskDiv.classList.add('hidden')
        })

        editTaskDiv.addEventListener('submit', (e) =>{
            e.preventDefault()
            editTask(curentTitle)
        })

    }
})
