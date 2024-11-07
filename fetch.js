// fetch er kaj hocche data anaa 


fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))


function loadData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayUsers(data))
}

function displayUsers(data) {
    const ul = document.getElementById('user-list');
    for (const user of data) {
        console.log(user.name);
        const list = document.createElement('li');
        list.innerText= user.name;
        ul.appendChild(list);
    }
}