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
    // console.log("FV", typeof(fv))
    if( fv == 1) {
        console.log("refresh")
        querybox = document.getElementById('query');
        
        need = document.getElementById('info');
        let item = JSON.parse(sessionStorage.getItem('task'))
        querybox.value = item.query
        need.textContent = item.info

        
    } else {
        localStorage.setItem('first-visit',1)
        let pages = JSON.parse(sessionStorage.getItem('pages'))
        
        let cp = sessionStorage.getItem('current_page');
        
        if(cp == "question"){
            let item = JSON.parse(sessionStorage.getItem('task'))
            let need = document.getElementById('info');
            need.textContent = item.info
        }
        else {
            var mynum_index = Math.floor(Math.random() * pages.length); 
            item = tasks[pages[mynum_index]];

            sessionStorage.setItem('task', JSON.stringify(item))
        
        
        
            querybox = document.getElementById('query');
            // let answer = document.getElementById('answer');
            need = document.getElementById('info');
            
        
            
            
            
            querybox.value = item.query
            need.textContent = item.info
            // const a = Math.round(Math.random())
            // answer.textContent = item.answer[a]
        
            pages.splice(mynum_index , 1)
            
            sessionStorage.setItem('pages', JSON.stringify(pages))
        }
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