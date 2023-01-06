const mainInfo = document.querySelector('.main__info')
const plansArticle = [...document.getElementsByTagName('article')]


mainInfo.addEventListener('click', event => {
    const eventNode = event.target;
    const childNodes = [...mainInfo.children]
    if(eventNode.nodeName === 'ARTICLE') {
        selectPlan(eventNode)

    }else if(eventNode.matches('.bttn__check, .check__bttn')) {
        durationPlan()

    }else if(eventNode.matches('.bttn__next')) {
        console.log('')
    }
})

/**
 * 
 * @param {Element} currentNode 
 */
function selectPlan(currentNode) {
    plansArticle.forEach(htmlElement => htmlElement.classList.remove('select--default'))
    currentNode.classList.add('select--default')
}

function durationPlan() {
    const button = document.querySelector('.bttn__check')
    const mainCards = document.querySelector('.main__cards')
    button.classList.toggle('flx--jstf-end')
    button.classList.toggle('flx--jstf-strt')
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
function addTextPlan(content) {
    plansArticle.forEach(htmlElement => {
        const last = htmlElement.querySelector('div > p + p')
        last.textContent = content
    })
}

/**
 * 
 * @param {Element} currentNode 
 * @param {String} classList 
 */
const containsClass = (currentNode, classList) => currentNode.classList.contains(classList);