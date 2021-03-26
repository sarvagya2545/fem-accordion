let questions = document.querySelectorAll('.question-list-item');
let images = document.querySelector('.images');

let selectedAccordionIndex = null;

questions.forEach((question, index) => {
    question.addEventListener('click', (e) => {
        changeAccordionSelection(index);
    })
})

function changeAccordionSelection(index) {
    // get width and change styles if on mobile
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if(w < 900) {
        if(selectedAccordionIndex === null) images.style.top = '1rem';
        if(index === selectedAccordionIndex) images.style.top = '2rem';
    }

    if(selectedAccordionIndex !== null) {
        Array.from(questions)[selectedAccordionIndex].classList.remove('selected');
    }
    
    if(index === selectedAccordionIndex) return selectedAccordionIndex = null;

    Array.from(questions)[index].classList.add('selected');
    selectedAccordionIndex = index;
}