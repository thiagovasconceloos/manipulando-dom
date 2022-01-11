 import BotaoConcluir from "./componentes/concluirTarefa.js"
 import BotaoDeleta from "./componentes/deletaTarefa.js"

const criarTarefa = (evento) => {


    evento.preventDefault()


    const lista = document.querySelector('[data-list]')
    const  input =  document.querySelector('[data-form-input]')
    const valor = input.value
   
    
     const tarefa = document.createElement('li')
     tarefa.classList.add('task')

    
    const conteudo = `<p class="content">${valor}</p>`
    tarefa.innerHTML = conteudo
    tarefa.appendChild(BotaoConcluir())
    tarefa.appendChild(BotaoDeleta())
    lista.appendChild(tarefa)
   
    input.value = " "
}

const  novatarefa = document.querySelector('[data-form-button]')
novatarefa.addEventListener('click',criarTarefa)
