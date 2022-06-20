
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
        'ans-play': {
            selector: 'div.answer-card > div.flex-container > div.left-container > span.answer button.playButton',  // Maybe we can make this a bit cleaner. Need to make this bubble up for capturing the tab name, metadata!
            event: 'click',
            name: 'ANSWER_PLAY'
        },
        'ans-pause': {
            selector: 'div.answer-card > div.flex-container > div.left-container > span.answer button.pauseButton',  // Maybe we can make this a bit cleaner. Need to make this bubble up for capturing the tab name, metadata!
            event: 'click',
            name: 'ANSWER_PAUSE'
        },
        'ans-pause': {
            selector: 'div.answer-card > div.flex-container > div.left-container > span.answer button.restartButton',  // Maybe we can make this a bit cleaner. Need to make this bubble up for capturing the tab name, metadata!
            event: 'click',
            name: 'ANSWER_RESTART'
        },
        'play-hover': {
            selector: 'div.answer-card > div.flex-container > div.left-container > span.answer button.playButton',  // Maybe we can make this a bit cleaner. Need to make this bubble up for capturing the tab name, metadata!
            event: 'mouseHover',
            properties: {
                mouseenter: {
                    name: 'PLAY_HOVERIN',
                },
                mouseleave: {
                    name: 'PLAY_HOVEROUT',
                }
            },
        },
        'pause-hover': {
            selector: 'div.answer-card > div.flex-container > div.left-container > span.answer button.pauseButton',  // Maybe we can make this a bit cleaner. Need to make this bubble up for capturing the tab name, metadata!
            event: 'mouseHover',
            properties: {
                mouseenter: {
                    name: 'PAUSE_HOVERIN',
                },
                mouseleave: {
                    name: 'PAUSE_HOVEROUT',
                }
            },
        },
        'restart-hover': {
            selector: 'div.answer-card > div.flex-container > div.left-container > span.answer button.restartButton',  // Maybe we can make this a bit cleaner. Need to make this bubble up for capturing the tab name, metadata!
            event: 'mouseHover',
            properties: {
                mouseenter: {
                    name: 'RESTART_HOVERIN',
                },
                mouseleave: {
                    name: 'RESTART_HOVEROUT',
                }
            },
        },
        'next-click': {
            selector: 'main > div > div > div.left-container div button.next-button',  // Maybe we can make this a bit cleaner. Need to make this bubble up for capturing the tab name, metadata!
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