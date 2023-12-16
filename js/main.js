const conteiner = document.querySelector('.conteiner')

let state = {
    todos: []
}

function getTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then((json) => state.todos = state.todos.concat(json))
}

getTodos()
