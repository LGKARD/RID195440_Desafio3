//seeleção de elementos
const todoForm = document.getElementById("create-todo-form");
const todoInput = document.querySelector("#description");
const todoTag = document.querySelector("#tag");
const todoList = document.querySelector(".todo-list-section");

let contadorTarefas = 0

//funções
const createTodoListSection = () => {
  const todoListSection = document.createElement('div');
  todoListSection.classList.add('todo-item');
  return todoListSection;
};

const createIcon = () => {
  const icon = document.createElement('div');
  icon.classList.add('trash');
  const lixo = document.createElement('i');
  lixo.classList.add('fa-solid');
  lixo.classList.add('fa-trash');
  icon.appendChild(lixo);
  return icon;
};

const createTodo = () => {
  const todo = document.createElement('div');
  todo.classList.add('todo');
  const todoTxtTask = document.createElement('div');
  todoTxtTask.classList.add('txt-task');
  todo.appendChild(todoTxtTask);
  return { todo, todoTxtTask };
};

const createTaskTitle = (task) => {
  const todoTitle = document.createElement('h3');
  todoTitle.innerText = task;
  return todoTitle;
};

const createTag = (tag) => {
  const tagTxt = document.createElement('p');
  tagTxt.classList.add('tag');
  tagTxt.innerText = tag;
  return tagTxt;
};

const createData = () => {
  const data = document.createElement('p');
  data.classList.add('data');
  const dataAtual = new Date();
  const dia = String(dataAtual.getDate()).padStart(2, '0');
  const mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // Meses são base 0
  const ano = dataAtual.getFullYear();
  const dataFormatada = `${dia}/${mes}/${ano}`;
  data.innerText = `Criado em: ${dataFormatada}`;
  return data;
};

const createConcluirBotao = () => {
  const concluirBotao = document.createElement('div');
  concluirBotao.classList.add('concluir-botao');
  const botao = document.createElement('button');
  botao.classList.add('concluir-task');
  botao.innerText = 'Concluir';
  concluirBotao.appendChild(botao);
  return concluirBotao;
};

const createP = () => {
  const p = document.createElement('div');
  p.classList.add('p');
  return p;
};

const saveTodo = (task, tag) => {
  const todoListSection = createTodoListSection();
  const icon = createIcon();
  const { todo, todoTxtTask } = createTodo();
  const todoTitle = createTaskTitle(task);
  const tagTxt = createTag(tag);
  const data = createData();
  const p = createP();
  const concluirBotao = createConcluirBotao();

  todoListSection.appendChild(icon);
  todoListSection.appendChild(todo);
  todoTxtTask.appendChild(todoTitle);
  todoTxtTask.appendChild(p);
  p.appendChild(tagTxt);
  p.appendChild(data);
  todo.appendChild(concluirBotao);

  todoList.appendChild(todoListSection);
};

const handleConcluirClick = (concluir, parentEl) => {
  concluir.replaceWith(document.createElement("img"));
  const img = parentEl.querySelector("img");
  img.src = "assets/Checked.png";
  img.alt = "Imagem de conclusão";
  img.classList.add("checked");
  parentEl.classList.toggle('done');
  contadorTarefas++;
  document.getElementById("contador-tarefas").textContent = contadorTarefas;
};

const handleCheckedClick = (img, parentEl) => {
  const concluirBotao = document.createElement("button");
  concluirBotao.classList.add("concluir-task");
  concluirBotao.textContent = "Concluir";
  img.replaceWith(concluirBotao);
  parentEl.classList.toggle('done');
  contadorTarefas--;
  document.getElementById("contador-tarefas").textContent = contadorTarefas;
};

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

  if (targetEl.classList.contains("fa-trash")) {
    handleTrashClick(parentEl);
  }

  if (targetEl.classList.contains("concluir-task")) {
    handleConcluirClick(concluir, parentEl);
  }

  if (targetEl.classList.contains("checked")) {
    handleCheckedClick(targetEl, parentEl);
  }
});
