const navBarBtn = document.getElementById('navbar-btn')



const about = ['https://www.w3.org/WAI/fundamentals/accessibility-intro/', 'https://developer.mozilla.org/en-US/docs/Learn/Accessibility/What_is_accessibility', 'https://en.wikipedia.org/wiki/Web_accessibility', 'https://www.w3.org/WAI/fundamentals/accessibility-principles/']
const implement = ['link4', 'https://developer.mozilla.org/en-US/docs/Learn/Accessibility/What_is_accessibility#implementing_accessibility_into_your_project', 'https://www.w3.org/WAI/fundamentals/components/']
const content = ['link1', 'link2', 'link3']
const design = ['link1', 'link2', 'link3']

dev = ['https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML', 'https://developer.mozilla.org/en-US/docs/Learn/Accessibility/CSS_and_JavaScript']

let resourcesList = document.getElementById('resources-list')

let assignToList = function(array){
    for(let i = 0; i < array.length; i++) {
        let arrayItem = array[i]
        console.log('arr', arrayItem)
    }
}


console.log('res', resourcesList)

const fillResources = ()=> {
    if(window.location.hash === '#about') {
        console.log('je men')
        about.forEach((element)=> {
            let link = document.createElement('a')
            link.innerText = 'alo ba'
            link.setAttribute('href', `${element}`)
            let li = document.createElement('li')
            li.setAttribute('class', 'salmon')
            li.appendChild(link)
            resourcesList.appendChild(li)
        })
    }
}


console.log(window.location.hash)

fillResources()

assignToList(about)

const contentSection = document.querySelector('.content')
const devSection = document.querySelector('.development')
const devBtn = document.getElementById('development')
//
const widgetBtn = document.getElementById('widget-btn')
const widgetEl = document.getElementById('widget')
const widgetFontBtn = document.getElementById('widget-font')
const widgetLineBtn = document.getElementById('widget-line')
const widgetFontSize = document.querySelector('.widget__font-size')
const widgetLineHeight = document.querySelector('.widget__line-height')
const increaseBtn = document.getElementById('increment')
const decreaseBtn = document.getElementById('decrement')
//
const text = document.querySelectorAll('.text-card__text')

//
let isActive = false

//
// console.log('style', document.getElementsByTagName('p').style.fontSize)

widgetFontBtn.addEventListener('click', ()=> {
    widgetFontSize.classList.remove('hidden')
    widgetFontSize.classList.add('active')
    widgetFontSize.setAttribute('aria-expanded', 'true')
    isActive = true
    return isActive
})

    let startValue = 0.2
    let fontValue = 0.8
    increaseBtn.addEventListener('click', ()=> {
    console.log('here')
    fontValue = fontValue + startValue
    console.log('vale', fontValue)
    for (let j = 0; j < text.length; j++){
        let textElem = text[j]
        console.log(textElem.style.fontSize)
        textElem.style.fontSize = fontValue + 'em'
    }
})


let decreasedFont
let decreaseValue = 0.2


decreaseBtn.addEventListener('click', ()=> {
    console.log('in decrease')
    for (let k = 0; k < text.length; k++){
        let textElem = text[k]
        let fontSize = textElem.style.fontSize
        let newValue = parseInt(fontSize)
        decreasedFont = newValue - decreaseValue
        textElem.style.fontSize = decreasedFont + 'em'
    }
})


window.addEventListener('load', ()=>{
    if(devSection.classList.contains('hidden')) {
        devSection.classList.remove('development')
    }else{
        devSection.classList.add('development')
    }
})

devBtn.addEventListener('click', () => {
    contentSection.classList.toggle('hidden')
    devSection.classList.toggle('hidden')

})

widgetBtn.addEventListener('click', ()=> {
    widgetEl.classList.toggle('hidden')
})