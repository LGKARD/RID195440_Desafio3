//seeleção de elementos
const todoForm = document.getElementById("create-todo-form");
const todoInput = document.querySelector("#description");
const todoTag = document.querySelector("#tag");
const todoList = document.querySelector(".todo-list-section");

let contadorTarefas = 0

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
    const concluir = targetEl.closest(".concluir-task");
    const concluirBotao = targetEl.closest(".concluir-botao");

    if (targetEl.classList.contains("fa-trash")) {
        if (parentEl.classList.contains("done")) {
            contadorTarefas--;
            document.getElementById("contador-tarefas").textContent = contadorTarefas;
        }
        parentEl.remove();

    }

    if (targetEl.classList.contains("concluir-task")) {
        concluir.replaceWith(document.createElement("img"));
        const img = parentEl.querySelector("img");
        img.src = "assets/Checked.png";
        img.alt = "Imagem de conclusão";
        img.classList.add("checked");
        parentEl.classList.toggle('done');
        contadorTarefas++;
        document.getElementById("contador-tarefas").textContent = contadorTarefas;
    }

    if (targetEl.classList.contains("checked")) {
        const img = targetEl;
        const concluirBotao = document.createElement("button");
        concluirBotao.classList.add("concluir-task");
        concluirBotao.textContent = "Concluir";
        img.replaceWith(concluirBotao);
        parentEl.classList.toggle('done');
        contadorTarefas--;
        document.getElementById("contador-tarefas").textContent = contadorTarefas;
    }
});

//txt-text h3


