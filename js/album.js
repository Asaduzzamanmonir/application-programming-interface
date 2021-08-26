// function getAlbum() {
//     fetch('https://jsonplaceholder.typicode.com/albums')
//         .then(response => response.json())
//         .then(data => getDisplay(data))
// }
// getAlbum()

// function getDisplay(albums) {
//     const albumContainer = document.getElementById('album')
//     for (const album of albums) {
//         const p = document.createElement('p')
//         p.style.textAlign = 'center'
//         p.innerText = album.title
//         albumContainer.appendChild(p)
//     }
// }


const stuInfo = JSON.stringify({ name: "James", roll: 3 });
console.log(stuInfo.name);

