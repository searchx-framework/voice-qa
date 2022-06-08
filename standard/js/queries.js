// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
// const tasks = require('./task_data/tasks.js')
var tasks = data;

document.addEventListener("DOMContentLoaded", function(){
    let querybox, answer, need, item, a;
    let fv = sessionStorage.getItem('first-visit')
    let qv = sessionStorage.getItem('ques-visit')
    let currenTask;
    let cp = sessionStorage.getItem('current_page');
    let viewedList = window.sessionStorage.getItem('viewedList');
    viewedList = JSON.parse(viewedList);
    // console.log("FV", typeof(fv))


    if( fv == 1) {
        // console.log("refresh")
        let pages = JSON.parse(sessionStorage.getItem('pages'))
        
        var counterText = "<i class='fa fa-stopwatch'></i> You have " + (pages.length + 1)  + " pages to go"
        document.getElementById("counter").innerHTML=counterText;

        querybox = document.getElementById('query');
        answer = document.getElementById('answer')
        // need = document.getElementById('info');
        let item = JSON.parse(sessionStorage.getItem('task'))
        querybox.value = item.query
        // need.textContent = item.info  

        let a = sessionStorage.getItem('answer')
        var audio1= document.getElementById("audio1")
        console.log("V", '../voice_answers/' + item.id + '_' + a +'.mp3')
        answer.src = '../voice_answers/' + item.id + '_' + a +'.mp3'
        audio1.load();
        
        // answer.src = '../voice_answers/' + item.id + '_' + a +'.mp3'

    } else {
        sessionStorage.setItem('current_page', 'template')
        let pages = JSON.parse(sessionStorage.getItem('pages'))
        sessionStorage.setItem('first-visit', 1)
        sessionStorage.setItem('ques-visit', 0) 
        // let cp = sessionStorage.getItem('current_page');
        var counterText = "<i class='fa fa-stopwatch'></i> You have " + (pages.length) + " pages to go"
        document.getElementById("counter").innerHTML=counterText;
        

        var mynum_index = Math.floor(Math.random() * pages.length); 
        item = tasks[pages[mynum_index]];

        sessionStorage.setItem('task', JSON.stringify(item))
    
    
    
        querybox = document.getElementById('query');
        // let answer = document.getElementById('answer');
        // need = document.getElementById('info');
        answer = document.getElementById('answer')
    
        
        
        
        querybox.value = item.query
        // need.textContent = item.info
        a = Math.floor(Math.random() * 3)
        sessionStorage.setItem('answer', a)
        var audio1= document.getElementById("audio1")
        // console.log("V", '../voice_answers/' + item.id + '_' + a +'.mp3')
        answer.src = '../voice_answers/' + item.id + '_' + a +'.mp3'
        audio1.load();
        
    
        pages.splice(mynum_index , 1)
        
        sessionStorage.setItem('pages', JSON.stringify(pages))
        
    }

    // console.log("Test", querybox.value, answer) 

    // for (let component of scrollableComponents) {
    //     console.log(component)
    //     // initScrollableComponent(component);
    // }
});

// function initScrollableComponent(element) {
//     for (let component of element.getElementsByTagName('span')) {
//         switch (component.className) {
//             case 'left':
//                 component.getElementsByTagName('a')[0].addEventListener('click', scrollLeft);
//                 break;
//             case 'right':
//                 component.getElementsByTagName('a')[0].addEventListener('click', scrollRight);
//                 break;
//         }
//     }
// }