// Configuration object for the Google SERP.

let logUIConfigurationObject = {
    logUIConfiguration: {
        endpoint: 'ws://logui.ewi.tudelft.nl/ws/endpoint/',
        authorisationToken: null,
        verbose: true, // Turn this off when the experiment is running properly! Set it to false.
    },
    applicationSpecificData: {
        userID: null, // To be overwritten by the driver script.
        mode: null,
        task: null,
        answer: null,
    },
    browserEvents: {
        trackCursor: false,
        contextMenu: true,
        pageFocus: true,
        pageResize: true,
        eventsWhileScrolling: false,
    },
    trackingConfiguration: {
        'rel-click': {
            selector: 'div.relevance div input',  // Maybe we can make this a bit cleaner. Need to make this bubble up for capturing the tab name, metadata!
            event: 'click',
            name: 'REL_CLICK',
            metadata: [
                {
                    nameForLog: 'relLabel',
                    sourcer: 'elementAttribute',
                    lookFor: 'value',
                },
            ],
        },
        'ans-click': {
            selector: 'div.answer-card > div.flex-container > div.left-container span.answer',  // Maybe we can make this a bit cleaner. Need to make this bubble up for capturing the tab name, metadata!
            event: 'click',
            name: 'ANSWER_CLICK'
        },
        'ans-hover': {
            selector: 'div.answer-card > div.flex-container > div.left-container span.answer',  // Maybe we can make this a bit cleaner. Need to make this bubble up for capturing the tab name, metadata!
            event: 'mouseHover',
            properties: {
                mouseenter: {
                    name: 'ANS_HOVERIN',
                },
                mouseleave: {
                    name: 'ANS_HOVEROUT',
                }
            },
        },
        'next-click': {
            selector: 'main > div > div > div.left-container div button',  // Maybe we can make this a bit cleaner. Need to make this bubble up for capturing the tab name, metadata!
            event: 'click',
            name: 'NEXT_CLICK'
        },
        'start-click': {
            selector: 'main  div  div  div ul li button',  // Maybe we can make this a bit cleaner. Need to make this bubble up for capturing the tab name, metadata!
            event: 'click',
            name: 'START_CLICK'
        },
    }
}