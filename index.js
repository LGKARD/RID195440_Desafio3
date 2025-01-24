//seeleção de elementos
const todoForm = document.getElementById("create-todo-form");
const todoInput = document.querySelector("#description");
const todoTag = document.querySelector("#tag");
const todoList = document.querySelector(".todo-list-section");

//funções
const saveTodo = (task, tag) => {
    const todoListSection = document.createElement('div')
    todoListSection.classList.add('todo-item')

    const icon = document.createElement('div')
    icon.classList.add('trash')
    const lixo = document.createElement('i')
    lixo.classList.add('fa-solid')
    lixo.classList.add('fa-trash')

    const todo = document.createElement('div')
    todo.classList.add('todo')
    const todoTxtTask = document.createElement('div')
    todoTxtTask.classList.add('txt-task')

    const todoTitle = document.createElement('h3')
    todoTitle.innerText = task
    const p = document.createElement('div')
    p.classList.add('p')
    const tagTxt = document.createElement('p')
    tagTxt.classList.add('tag')
    tagTxt.innerText = tag
    const data = document.createElement('p')
    data.classList.add('data')
    const dataAtual = new Date()
    const dia = String(dataAtual.getDate()).padStart(2, '0')
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0') // Meses são base 0
    const ano = dataAtual.getFullYear()
    const dataFormatada = `${dia}/${mes}/${ano}`
    data.innerText = `Criado em: ${dataFormatada}`

    const concluirBotao = document.createElement('div')
    concluirBotao.classList.add('concluir-botao')
    const botao = document.createElement('button')
    botao.classList.add('concluir-task')
    botao.innerText = 'Concluir'


    todoListSection.appendChild(icon)
    icon.appendChild(lixo)
    todoListSection.appendChild(todo)
    todo.appendChild(todoTxtTask)
    todoTxtTask.appendChild(todoTitle)
    todoTxtTask.appendChild(p)
    p.appendChild(tagTxt)
    p.appendChild(data)
    todo.appendChild(concluirBotao)
    concluirBotao.appendChild(botao)

    todoList.appendChild(todoListSection)
}

//eventos
todoForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputValue = todoInput.value;
    const inputTag = todoTag.value;

    if (inputValue && inputTag) {
        saveTodo(inputValue, inputTag);

        todoInput.value = '';
        todoTag.value = '';
    }
})

document.addEventListener("click", (event) => {
    const targetEl = event.target;
    const parentEl = targetEl.closest(".todo-item");
    const doneEl = targetEl.closest(".txt-task");

    if (targetEl.classList.contains("fa-trash")) {
        parentEl.remove();
    }

    if (targetEl.classList.contains("concluir-task")) {
        doneEl.classList.toggle('done');
    }
});

//txt-text h3


