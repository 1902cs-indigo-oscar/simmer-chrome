const runScriptButton = document.getElementById('run-script-btn')

runScriptButton.addEventListener('click', function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {file: 'test-scraper.js'});
    })
})

const scrapedOutputNode = document.getElementById('scraped-output')

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.scrapedOutput){
            scrapedOutputNode.innerText = request.scrapedOutput
        }
        return true
    })