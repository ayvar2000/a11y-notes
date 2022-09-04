const about = ['link1', 'link2', 'link3']
const implement = ['link4', 'link5', 'link6']
const content = ['link1', 'link2', 'link3']
const design = ['link1', 'link2', 'link3']

let assignToList = function(array){
    for(let i = 0; i < array.length; i++) {
        let arrayItem = array[i]
        console.log('arr', arrayItem)
    }
}

assignToList(about)

const contentSection = document.querySelector('.content')
const devSection = document.querySelector('.development')
const devBtn = document.getElementById('development')
//
const widgetBtn = document.getElementById('widget-btn')
const widgetEl = document.getElementById('widget')

devBtn.addEventListener('click', () => {
    contentSection.classList.toggle('hidden')
    devSection.classList.toggle('hidden')
    if(devSection.classList.contains('hidden')) {
        devSection.classList.remove('development')
    }else{
        devSection.classList.add('development')
    }
})

widgetBtn.addEventListener('click', ()=> {
    widgetEl.classList.toggle('hidden')
})