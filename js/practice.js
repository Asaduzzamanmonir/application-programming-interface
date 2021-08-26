function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => getUser(data))
}

function getUser(users) {
    const userUl = document.getElementById('users')
    for (const user of users) {
        const userLi = document.createElement('li')
        userLi.innerText = `name : ${user.name} and email : ${user.email}`
        userUl.appendChild(userLi)
    }
}