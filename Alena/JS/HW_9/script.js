"use strict";
let add = document.querySelector('input');
let list = document.querySelector('.tasks_list');
let button = document.querySelector('.button_clear')

add.addEventListener('keydown', function (event) {
    if (event.keyCode == 13) {
        let task = document.createElement('li');
        list.prepend(task);
        task.className = 'item';

        let taskInfo = document.createElement('p');
        task.append(taskInfo);
        taskInfo.innerHTML = this.value;

        let checkBox = document.createElement('input');
        task.prepend(checkBox);
        checkBox.className = 'checkbox';
        checkBox.setAttribute('type', 'checkbox');
        checkBox.setAttribute('value', this.value);

        checkBox.addEventListener('click', function () {
            if (checkBox.checked) {
                task.style.textDecoration = 'line-through';
                task.style.color = 'rgb(181, 133, 197)';
            }
            else {
                task.style.textDecoration = 'none';
                task.style.color = 'rgb(101, 26, 125)';
            }
        });

        this.value = '';

        taskInfo.addEventListener('click', function () {
            let save = taskInfo.innerHTML;
            taskInfo.innerHTML = '';
            let changeTask = document.createElement('input');
            task.append(changeTask);
            changeTask.className = 'change_task';
            changeTask.setAttribute('type', 'text');
            changeTask.setAttribute('value', save);
            changeTask.addEventListener('keydown', function (event) {
                if (event.keyCode === 13) {
                    if (changeTask.value == '') {
                        taskInfo.innerHTML = save;
                    }
                    else {
                        taskInfo.innerHTML = changeTask.value;
                    }
                    changeTask.remove();
                }
            })
        });
    }

});

button.addEventListener('click', function () {
    list.remove();
    let ul = document.createElement('ul');
    document.querySelector('.tasks_block').append(ul);
    ul.className = 'tasks_list';
    list = ul;
})



