let label = document.querySelector('.password input');
labels.forEach(label => {
    label.innerHTML = label.innerHTML.split('').map((letter,idx) =>{
        `<span style="transition.deplay:${idx * 8}ms">${letter}</span>`
    })
});