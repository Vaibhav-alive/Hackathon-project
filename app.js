function show() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'block'
    const container = document.getElementById('container')
    container.classList.add('overlay')
    const container2 = document.getElementById('m-container')
    container2.classList.add('overlay')
    const table = document.getElementById('table')
    table.classList.add('overlay')
}

 
 document.addEventListener('DOMContentLoaded', function() {
    let span = document.getElementById('btn');
    span.onclick = function() {
        let modal = document.getElementById('myModal');
        modal.style.display = 'none';
       let container = document.getElementById('container')
       container.classList.remove('overlay')
       let container2 = document.getElementById('m-container')
        container2.classList.remove('overlay')
        let table = document.getElementById('table')
        table.classList.remove('overlay')
    }
});

