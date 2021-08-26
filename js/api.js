function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}
function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => display(data))
}
function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data))
}

function display(users) {
    const ul = document.getElementById('users')
    for (const user of users) {
        console.log(user.name);
        const li = document.createElement('li')
        li.innerText = `name: ${user.name},,,,,,,,,,,,,,,,, email: ${user.email}`;
        ul.appendChild(li)
    }
}