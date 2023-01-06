const formData = document.getElementById('formPersonal')
const inputs = document.querySelectorAll('input')

inputs.forEach(htmlElement => {
    htmlElement.addEventListener('invalid', () => {
        const required = document.createElement('p')
        htmlElement.classList.add('input--invalid')
    })    
})

