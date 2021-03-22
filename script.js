//variables
let date = new Date,
footer = document.querySelector('footer'),
prev = document.querySelector('#prev'),
next = document.querySelector('#next'),
position = 0,
items = document.querySelectorAll('.item'),
dots = document.querySelectorAll('.dot');
//eventListeners
prev.addEventListener('click',toPrevSlide);
next.addEventListener('click',toNextSlide);
dots.forEach(dot => dot.addEventListener('click',switchSlide));
function toPrevSlide(e){
    let id = e.target.id;
    for(item of items){
        item.classList.remove('visible');
    }
    updateCarousel(id);
}
function toNextSlide(e){
    let id = e.target.id;
    for(item of items){
        item.classList.remove('visible');
    }
    updateCarousel(id);
}
function updateCarousel(id){
    if(id == 'prev'){
        position == 0 ? position = items.length - 1 : position--;
        items[position].classList.add('visible');
    }else{
        position == items.length - 1 ? position = 0 : position++;
        items[position].classList.add('visible');
    }
}
//dotsSwitch
function switchSlide(e){
    let slideID = +e.target.dataset.id;
    for(item of items){
        item.classList.remove('visible');
    }
    items[slideID].classList.add('visible');
    position = slideID;
}
//footer Date
let currentYear = date.getFullYear();
footer.textContent += currentYear;