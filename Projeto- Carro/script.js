let backButton = document.getElementById('back');
let nextButton = document.getElementById('next');
let container = document.querySelector(".container");
let items = container.querySelectorAll(".item");
let indicators = document.querySelector('.indicators');
let dots = indicators.querySelectorAll('ul li');

let active = 0
let firtPostion = 0
let lasPostion = items.length - 1

nextButton.onclick = () => {
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    active = active + 1 > lasPostion ? 0 : active + 1
    items[active].classList.add('active')

    let dotsOld = indicators.querySelector('ul li.active')
    dotsOld.classList.remove('active')

    dots[active].classList.add('active')

    indicators.querySelector('.number').innerHTML = '0' + (active + 1) 
}

backButton.onclick = () => {
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    active = active - 1 < firtPostion ? lasPostion : active - 1
    items[active].classList.add('active')

    let dotsOld = indicators.querySelector('ul li.active')
    dotsOld.classList.remove('active')

    dots[active].classList.add('active')

    indicators.querySelector('.number').innerHTML = '0' + (active + 1) 

    
}
