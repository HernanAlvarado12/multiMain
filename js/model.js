const htmlPaths = ['index.html', 'plan.html', 'picks.html', 'finish.html', 'thanks.html'];
const options = document.getElementById('mainOptions')
options.addEventListener('click', event => {
    const router = location.pathname.replace('/', '')
    const indexOf = htmlPaths.findIndex(path => path === router)
    location.assign(htmlPaths[indexOf])
})


