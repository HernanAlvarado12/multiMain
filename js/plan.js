import {moveComponents, backgroundCard, containsClass} from './model.js'

const mainInfo = document.querySelector('.main__info')
const mainContainer = document.querySelector('.main__cntnr')
const price = [...document.querySelectorAll('.plan__price')]

document.addEventListener('click', moveComponents)
backgroundCard()


mainInfo.addEventListener('click', event => {
    const eventNode = event.target;
    if(eventNode.nodeName === 'ARTICLE') {
        selectPlan(eventNode)
    }else if(eventNode.matches('.bttn__check, .check__bttn')) {
        durationPlan()
    }
})

/**
 * 
 * @param {Element} currentNode 
 */
function selectPlan(currentNode) {
    document.querySelectorAll('article').forEach(htmlElement => htmlElement.classList.remove('select--default'))
    currentNode.classList.add('select--default')
}

function durationPlan() {
    const button = document.querySelector('.bttn__check')
    const mainCards = document.querySelector('.main__cards')
    button.classList.toggle('flx--jstf-end')
    mainContainer.classList.toggle('pddng--1')
    if(containsClass(button, 'flx--jstf-end')) {
        addContentPlan(false ,'')
    }else {
       addContentPlan(true,'')
    }
}

/**
 * 
 * @param {Boolean} typePlan true si el plan es mensual o false de lo contrario
 * @param {String} content 
 */
function addContentPlan(typePlan, content) {
    const prices = [9, 12, 15]
    price.forEach((htmlElement, index) => {
        if(typePlan) {
            htmlElement.innerHTML = `$ ${prices[index]} /yr`
            htmlElement.nextElementSibling.innerHTML = ``
        }else{
            htmlElement.innerHTML = `$ ${prices[index]}0 /mo`
            htmlElement.nextElementSibling.innerHTML = `2 months free`
        }
    })  
}