function show() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'block';
    let container = document.getElementById('p-align')
    container.classList.add('overlay')
    let container2 = document.getElementById('m-container')
    container2.classList.add('overlay')
}

 
 document.addEventListener('DOMContentLoaded', function() {
    let span = document.getElementById('btn');
    span.onclick = function() {
        let modal = document.getElementById('myModal');
        modal.style.display = 'none';
       let container = document.getElementById('p-align')
       container.classList.remove('overlay')
       let container2 = document.getElementById('m-container')
        container2.classList.remove('overlay')
    }
});
