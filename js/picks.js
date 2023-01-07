import {moveComponents, backgroundCard} from './model.js'

const mainInfo = document.querySelector('.main__info')
const picksArticle = [... document.getElementsByTagName('article')]

document.addEventListener('click', moveComponents)
backgroundCard()

mainInfo.addEventListener('click', event => {
    const eventNode = event.target;
    if(eventNode.nodeName === 'INPUT') {
        eventNode.parentNode.classList.toggle('select--default')
    }
})

/**
 * 
 * @param {Element} currentNode 
 * @param {String} classList 
 */
const containsClass = (currentNode, classList) => currentNode.classList.contains(classList);


