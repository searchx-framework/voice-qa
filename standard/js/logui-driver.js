document.addEventListener("DOMContentLoaded", function(){

    // When we get here, the page is ready for LogUI to be started.
    let prolificID;
    prolificID = sessionStorage.getItem('prolific-id') || null;
    let mode = sessionStorage.getItem('mode') || null;
    let task = JSON.parse(sessionStorage.getItem('task')) || null;
    let answer = sessionStorage.getItem('answer') || null;

    if (!prolificID) {
        prolificID = extractProlificID();   
    }
        

    // if (!prolificID & serp) {
    //     alert("NOOOOO");
    //     window.location = '/landing.html'; // Redirect if there is no ID.
    // }

    // Set up the config object for this run.
    logUIConfigurationObject.applicationSpecificData.userID = prolificID;
    logUIConfigurationObject.applicationSpecificData.mode = mode;
    logUIConfigurationObject.applicationSpecificData.task = task?task.id: null;
    logUIConfigurationObject.applicationSpecificData.answer = answer;
    logUIConfigurationObject.logUIConfiguration.authorisationToken = 'eyJ0eXBlIjoibG9nVUktYXV0aG9yaXNhdGlvbi1vYmplY3QiLCJhcHBsaWNhdGlvbklEIjoiOWJkZGYwZTQtYzU4Yy00YTkwLTk0ZjEtMzk4NGMxNjlkNmRiIiwiZmxpZ2h0SUQiOiI0MWViMDFlMS04MjA1LTQ4M2MtOWM5Ni0zODljMGZiZjg0NGUifQ:1nzfRj:0uDXCulYolNI93JexwBMwEg_RBRR2TCbOA51wHpJKqY';
    
    LogUI.init(logUIConfigurationObject);
});

// Example STOP of LogUI - just add the conditional and the stop() API call to wherever you need it to stop.
document.addEventListener("unload", function() {
    if (LogUI.isActive()) {
        LogUI.stop();
    }
})

// Adapted from https://stackoverflow.com/a/2091331
function extractProlificID() {
    var variable = 'prolificID';
    
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }

    return null;
}
