import {moveComponents, backgroundCard} from './model.js'

const formData = document.getElementById('formPersonal')
const inputs = document.querySelectorAll('input')
const path = location.pathname.replace('/', '');


document.addEventListener('click', moveComponents)
backgroundCard()

formData.addEventListener('submit', event => {
    event.preventDefault();
    location.assign('./plan.html')
})

inputs.forEach(htmlElement => {
    htmlElement.addEventListener('invalid', () => {
        const required = document.createElement('p')
        htmlElement.classList.add('input--invalid')
    })    
})

