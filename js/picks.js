import {moveComponents, backgroundCard} from './model.js'

const mainInfo = document.querySelector('.main__info')

document.addEventListener('click', moveComponents)
backgroundCard()

mainInfo.addEventListener('click', event => {
    const eventNode = event.target;
    const parent = parentNode(eventNode)
    if(parent) {
        parent.classList.toggle('select--default')
        parent.firstElementChild.checked = parent.classList.contains('select--default')? true : false;
    }
})

/**
 * 
 * @param {Element} currentNode 
 * @returns {Element}
 */
function parentNode(currentNode) {
    if(currentNode.matches('main')) {
        return null;
    }else {
        if(currentNode.classList.contains('select__artcl')) 
            return currentNode;
        return parentNode(currentNode.parentNode)
    }
} 