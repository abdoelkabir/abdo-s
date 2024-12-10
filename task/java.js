let next_btn = document.getElementById('next_btn')
let prev_btn = document.getElementById('prev_btn')
next_btn.addEventListener('click',function(){
    next_function();
})
prev_btn.addEventListener('click',function(){
    prev_function();
})
function next_function(){
    var activeSlide = document.querySelector('.active.slide') ;
    activeSlide.classList.remove('active');
    var nextSlide = activeSlide.nextElementSibling;
    if(nextSlide){
        nextSlide.classList.add('active');
    }else{
        let firstSlide = document.querySelector('.slide')
        firstSlide.classList.add('active');
    }
}
function prev_function(){
    var activeSlide  = document.querySelector('.active.slide');
    activeSlide.classList.remove('active');
    let prevSibling = activeSlide.previousElementSibling;
    if(prevSibling){
        prevSibling.classList.add('active');
    }else{
        let slidesParent = activeSlide.parentElement;
        slidesParent.lastElementChild.classList.add('active');
    }
}

var counter = 0;
var append = document.querySelector('#append')

append.addEventListener('click', function(){
    counter++;
    console.log('clicked')
    let h2 = document.createElement('h2');
    h2.innerText = counter+'  -  appended'
    h2.classList.add('text-white')
    h2.id = 'appended_h2'
    h2.style.textAlign = 'center'
    let parent = document.querySelector('.append_parent')
    let custom_h1 = document.querySelector('.custom_h1')
    parent.insertBefore(h2,custom_h1)    
})

let div_text  = document.querySelector('.text')
div_text.remove();

let parent = document.querySelector('.append_parent')

parent.removeChild(parent.lastElementChild)

function next_function(){
    let activeSlide = document.querySelector('.slide.active');
    let next_slide = activeSlide.nextElementSibling
    if(next_slide){
        activeSlide.classList.remove('active');
        next_slide.classList.add('active');
    }else{
        activeSlide.classList.remove('active');
        let first_slide = document.querySelector('.slide')
        first_slide.classList.add('active');
    }
}

var add_task_btn = document.getElementById('add-task-btn');
add_task_btn.addEventListener('click',function(){
    let task_input = document.getElementById('task-input');
    let task_text = task_input.value;
    let list_item = document.createElement('li');
    list_item.innerHTML = '<h2>'+task_text+'</h2>';
    let list = document.querySelector('.to-do-list')
    list.appendChild(list_item);
    task_input.value = '';
});

document.querySelector('.to-do-list').addEventListener('click',function(e){
    console.log(e.target)
    if (e.target.matches('h2') || e.target.matches('li')) {
        if(e.target.matches('li')){
            e.target.remove()
        }else{
            e.target.parentElement.remove();
        }
    }
})
