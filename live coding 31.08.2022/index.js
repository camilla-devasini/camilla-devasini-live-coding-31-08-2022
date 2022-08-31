


document.getElementById("bottone").addEventListener("click", getImagesfromApi); // inserire solo il nome della funzione, no parentesi

//ALTRO METODO FUNZIONANTE:
// const bottone = document.getElementById("bottone");
// bottone.onclick = async function getImagesfromApi() {
    
//     try {
     
//         const response = await fetch("https://jsonplaceholder.typicode.com/photos");
//         const commit = await response.json();
//         listImages = commit;
//         let temporanea = listImages.map((item) => `<li><img src="${item.thumbnailUrl}"></img></li>`)
//         let myDiv = document.getElementById("immagini");
//         myDiv.innerHTML = "<ul>" + temporanea + "</ul>";
 
 
 
//     } catch(err) {
//         console.log(err);
 
//     }
// }


async function getImagesfromApi() {
    
    try {
     
        const response = await fetch("https://jsonplaceholder.typicode.com/photos");
        const commit = await response.json();
        listImages = commit;
        let temporanea = listImages.map((item) => `<li><img src="${item.thumbnailUrl}"></img></li>`)
        let myDiv = document.getElementById("immagini");
        myDiv.innerHTML = "<ul>" + temporanea + "</ul>";
 
 
 
    } catch(err) {
        console.log(err);
 
    }
}




