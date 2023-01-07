const router = location.pathname.replace('/', '')
const options = [... document.getElementById('mainOptions').children]
const htmlPaths = ['index.html', 'plan.html', 'picks.html', 'finish.html', 'thanks.html']


export default function backgroundCard() {
    options[indexOf()].firstElementChild.classList.toggle('current__progress');
}


/**
 * 
 * @param {Event} event 
 */
function moveComponents(event) {
    const node = event.target
    const index = indexOf()
    if(containsClass(node, 'bttn__next')) {
        location.assign(htmlPaths[index +1])
    }else if(containsClass(node, 'bttn__back')) {
        location.assign(htmlPaths[index -1])
    }
} 

/**
 * 
 * @returns {Number}
 */
const indexOf = () => {
    const index = htmlPaths.findIndex(path => path == router)
    return index == options.length? 3 : index;
};


/**
 * 
 * @param {Element} currentNode 
 * @param {String} classList 
 */
const containsClass = (currentNode, classList) => currentNode.classList.contains(classList);

const jsonPlan = {
    plan: undefined,
    picks: []
}

export {moveComponents, backgroundCard, containsClass, jsonPlan};



