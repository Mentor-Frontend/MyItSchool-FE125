

// creating elements

let header = document.createElement('header')
let main = document.createElement('main')
let footer = document.createElement('footer')
let app = document.createElement('div')
let appName = document.createElement('div')
let appForm = document.createElement('form')
let inputField = document.createElement('div')
let taskList = document.createElement('div')
let buttons = document.createElement('div')
let appNameText = document.createElement('h2')
let inputFieldString = document.createElement('input')
let inputFieldText = document.createElement('h4')
let buttonEnter = document.createElement('button')
let buttonClear = document.createElement('button')

// inheritance

document.body.appendChild(header)
document.body.appendChild(main)
document.body.appendChild(footer)
main.appendChild(app)
app.appendChild(appName)
app.appendChild(appForm)
app.appendChild(buttons)
appName.appendChild(appNameText)
appForm.appendChild(inputField)
appForm.appendChild(taskList)
inputField.appendChild(inputFieldString)
taskList.appendChild(inputFieldText)
buttons.appendChild(buttonEnter)
buttons.appendChild(buttonClear)

// assigning classes

header.classList.add('header')
main.classList.add('main')
footer.classList.add('footer')
app.classList.add('app')
appName.classList.add('app_name')
appForm.classList.add('app_form')
buttons.classList.add('buttons')
appNameText.classList.add('input_text')
inputField.classList.add('input_field')
taskList.classList.add('task_list')
inputFieldString.classList.add('input_app')
inputFieldText.classList.add('task_name')
buttonEnter.classList.add('button', 'button_enter')
buttonClear.classList.add('button', 'button_clear')

appName.innerHTML = 'ToDo List'
buttonEnter.innerHTML = 'Enter'
buttonClear.innerHTML = 'Clear'
inputFieldString.placeholder = 'Type your task...'



document.querySelector('.button_enter').addEventListener('click', function() {
    let inputFieldCheckBox = document.createElement('input')
    inputFieldCheckBox.type = 'checkbox'
    taskList.appendChild(inputFieldCheckBox)
    inputFieldCheckBox.classList.add('checkbox')


    let inputFieldAdd = document.createElement('input')
    inputFieldAdd.value = inputFieldString.value
    inputFieldAdd.classList.add('input_task')
    taskList.appendChild(inputFieldAdd)
    inputFieldAdd.readOnly = true

    let inputFieldButtonEdit = document.createElement('button')
    taskList.appendChild(inputFieldButtonEdit)
    inputFieldButtonEdit.innerHTML = 'Edit'
    inputFieldButtonEdit.classList.add('button', 'button_edit')

    let inputFieldButtonDelete = document.createElement('button')
    taskList.appendChild(inputFieldButtonDelete)
    inputFieldButtonDelete.innerHTML = 'Delete'
    inputFieldButtonDelete.classList.add('button', 'button_delete')
    
    inputFieldCheckBox.addEventListener('click', function(){
        if (inputFieldCheckBox.checked){
            inputFieldAdd.disabled = true
            inputFieldAdd.style.textDecoration = 'line-through'
        } else {
            inputFieldAdd.disabled = false
            inputFieldAdd.style.textDecoration = 'none'
        }
    })

    inputFieldButtonEdit.addEventListener('click', function(){
        if (inputFieldButtonEdit.click){
            inputFieldAdd.readOnly = false
        } 
    })

    inputFieldButtonDelete.addEventListener('click', function(){
        if (inputFieldButtonDelete.click){
            inputFieldAdd.remove()
            inputFieldCheckBox.remove()
            inputFieldButtonEdit.remove()
            inputFieldButtonDelete.remove()
        }
    })

    inputFieldButtonDelete.addEventListener('click', function(){
        if (inputFieldButtonDelete.click){
            inputFieldAdd.remove()
            inputFieldCheckBox.remove()
            inputFieldButtonEdit.remove()
            inputFieldButtonDelete.remove()
        }
    })
 })

 document.querySelector('.button_clear').addEventListener('click', function(){
    let deleteButton = taskList.querySelectorAll('button');
  for (let i = 0; i < deleteButton.length; i++) {
    deleteButton[i].remove();
  }
  let deleteInput = taskList.querySelectorAll('input');
  for (let i = 0; i < deleteInput.length; i++) {
    deleteInput[i].remove();
  }
 })

// styles

let style = document.createElement('style')
style.innerHTML = `
.app {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #000000;
    border-radius: 3px;
    max-width: 405px;
    max-height: 600px;
    box-shadow: 3px 3px 3px 3px #EBEBEB;
    overflow: auto;
}
.app_name {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    background-color: #3F8FD2;
    width: 100%;
    color: #FFFFFF;
}
.input_app {
    width: 380px;
    height: 30px;
    border: solid 1px #D7D7D7;
    margin-top: 10px;
    text-decoration: 
}
.input_task {
    border: none;
    width: 45%;
    height: 30px;
    font-size: 28px;
    margin: 20px 20px;
}
.button {
    width: 50px;
    height: 30px;
}
.button_edit {
    margin: auto 20px;
}
.buttons {
    display: flex;
    justify-content: space-between;
    width: 360px;
    margin: 20px auto;
}
.button_enter, .button_clear {
    width: 100px;
}
.input: disabled {
    color: #D7D7D7;
    background-color: #A2A2A2;
}
`
document.head.appendChild(style)

