import {moveComponents, backgroundCard, containsClass} from './model.js'

const mainInfo = document.querySelector('.main__info')
const mainContainer = document.querySelector('.main__cntnr')

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
        addTextPlan('2 months free')
        if(window.innerWidth < 900) 
            mainCards.style.marginTop = '10rem'
    }else {
       addTextPlan('')
    }
}

/**
 * 
 * @param {String} content 
 */
const addTextPlan = (content) => document.querySelectorAll('article p + p').forEach(htmlElement => htmlElement.textContent = content)
