var tasks = data;

document.addEventListener("DOMContentLoaded", function(){
    let querybox, answer, need, item, a;
    let fv = sessionStorage.getItem('first-visit')
    let qv = sessionStorage.getItem('ques-visit')
    let currenTask;
    let cp = sessionStorage.getItem('current_page');
    let viewedList = window.sessionStorage.getItem('viewedList');
    viewedList = JSON.parse(viewedList);
    
    // if (viewedList.includes(current_task)) {
        
    // }
    if( fv == 1) {
        // cookie doesn't exist, create it now
        // console.log("refresh")
    
        querybox = document.getElementById('query');
        answer = document.getElementById('answer');
        // need = document.getElementById('info');
        let item = JSON.parse(sessionStorage.getItem('task'))
        querybox.value = item.query
        // need.textContent = item.info
        let a = sessionStorage.getItem('answer')
        answer.textContent = item.answer[parseInt(a)]    
    } else {
        // console.log("first")
        sessionStorage.setItem('current_page', 'template')
        let pages = JSON.parse(sessionStorage.getItem('pages'))
        
        
       
    
        sessionStorage.setItem('first-visit', 1)
        // sessionStorage.setItem('ques-visit', 0) 
        var mynum_index = Math.floor(Math.random() * pages.length); 
        item = tasks[pages[mynum_index]];

        sessionStorage.setItem('task', JSON.stringify(item))
    
    
    
        querybox = document.getElementById('query');
        answer = document.getElementById('answer');
        // need = document.getElementById('info');
        // console.log(info)
        currenTask = item.id;
        if (viewedList){viewedList.push(currenTask)}
        else {viewedList=[currenTask]}
        
        sessionStorage.setItem('viewedList', JSON.stringify(viewedList));
        
    
        querybox.value = item.query
        // need.textContent = item.info
        a = a = Math.floor(Math.random() * 3)
        sessionStorage.setItem('answer', a)
        answer.textContent = item.answer[a]
    
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