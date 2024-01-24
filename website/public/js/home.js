import Tools from './tools.js';

const progress = Tools.getDataFromStorage()

progress.forEach((level) => {
    document.querySelector(`#card-level-${level.level}`).classList.add(getBorderColor(level.success))
    document.querySelector(`#icon-level-${level.level}`).classList.add(...getIcon(level.success))

    if(level.success === true){
        const flagEl = document.createElement('p')
        flagEl.classList.add('text-center','text-success','fst-italic')
        flagEl.textContent = level.flag
        flagEl.style.fontSize = '0.8rem'
        document.querySelector(`#card-level-${level.level} .card-body`).append(flagEl)
    }
})

document.querySelector('#reset-progress').addEventListener('click', () => {
    Tools.resetProgression()
})


function getBorderColor(boolSuccess){
    if(boolSuccess === null){
        return 'border-secondary'
    }else if(boolSuccess){
        return 'border-success'
    }else{
        return 'border-danger'
    }
}

function getIcon(boolSuccess){
    if(boolSuccess === null){
        return ['bi','bi-hourglass', 'text-secondary']
    }else if(boolSuccess){
        return ['bi', 'bi-check-circle', 'text-success']
    }else{
        return ['bi', 'bi-x-circle', 'text-danger']
    }
}