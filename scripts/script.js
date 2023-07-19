const getAllElements = (name) => document.querySelectorAll(name);

window.onload = () => {
    const divs = getAllElements('div');
    divs.forEach(div => {
        div.onclick = (event) => {
          div.classList.add('blue');
        }
    })
}