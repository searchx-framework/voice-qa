var tasks = [
    {   
        id: "rem_short_1",
        query: "what metal are hip replacements made of",
        answer: [ "Some prosthesis, like hip and knee joints made of cobalt chrome, contain some trace of nickel and for patients with allergies to this may have to go with Titanium joints.",
        "What are the different types of hip replacement surgery? Types of hip surgery include: 1  total hip replacement. 2  metal-on-metal hip resurfacing."],
        info: "You want to find out what metal are hip replacements made of"
    }, {
        id: "rem_short_2",
        query: "who formed the commonwealth of independent states",
        answer: [ "Commonwealth of Independent States (CIS) Alliance of 12 of the former republics of the Soviet Union (Armenia, Azerbaijan, Belarus, Georgia, Kazakstan, Kyrgyzstan, Moldova, Russia, Tajikistan, Turkmenistan, Ukraine, and Uzbekistan)",
        "'Commonwealth of Independent States; putative successor to the USSR, except that the Baltic Republics of Estonia, Latvia, and Lithuania never joined. "],
        info: "You want to find out which countries formed the commonwealth of independent states"
    },
    {
        id: "und_short_1",
        query: "medicare's definition of mechanical ventilation",
        answer: [ "Mechanical ventilation is the medical term for artificial ventilation where mechanical means is used to assist or replace spontaneous breathing.",
        "Physiology Explains CPAP’s Effectiveness. Non-invasive pressure-support ventilation (NIPSV), a method of assisting a patient’s respiration without intubation, was first reported in the 18th century."],
        info: "You want to understand the definition of mechanical ventilation according to medicare"
    }
]


document.addEventListener("DOMContentLoaded", function(){
    let querybox, answer, need, item, a;
    let fv = localStorage.getItem('first-visit')
    let qv = localStorage.getItem('ques-visit')
    let currenTask;
    let cp = localStorage.getItem('current_page');
    let viewedList = window.sessionStorage.getItem('viewedList');
    viewedList = JSON.parse(viewedList);
    
    // if (viewedList.includes(current_task)) {
        
    // }
    if(qv == 0 && cp == "question"){
            
        item = JSON.parse(sessionStorage.getItem('task'))
        need = document.getElementById('info');
        need.textContent = item.info
        localStorage.setItem('ques-visit', 1) 
        // console.log("q", need)
    } else if( fv == 1 && cp != "question") {
        // cookie doesn't exist, create it now
        // console.log("refresh")
    
        querybox = document.getElementById('query');
        answer = document.getElementById('answer');
        need = document.getElementById('info');
        let item = JSON.parse(sessionStorage.getItem('task'))
        querybox.value = item.query
        need.textContent = item.info
        let a = sessionStorage.getItem('answer')
        answer.textContent = item.answer[parseInt(a)]    
    } else if ( qv == 1 && cp == "question" && fv ==1) {
        localStorage.setItem('ques-visit', 0) 
        window.location.href = './question.html'
    } else {
        // console.log("first")
        localStorage.setItem('current_page', 'template')
        let pages = JSON.parse(sessionStorage.getItem('pages'))
        
        
       
        
            localStorage.setItem('first-visit', 1)
            localStorage.setItem('ques-visit', 0) 
            var mynum_index = Math.floor(Math.random() * pages.length); 
            item = tasks[pages[mynum_index]];
    
            sessionStorage.setItem('task', JSON.stringify(item))
        
        
        
            querybox = document.getElementById('query');
            answer = document.getElementById('answer');
            need = document.getElementById('info');
            console.log(info)
            currenTask = item.id;
            if (viewedList){viewedList.push(currenTask)}
            else {viewedList=[currenTask]}
            
            sessionStorage.setItem('viewedList', JSON.stringify(viewedList));
            
        
            querybox.value = item.query
            need.textContent = item.info
            a = Math.round(Math.random())
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