const runScriptButton = document.getElementById('run-script-btn')

runScriptButton.addEventListener('click', function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: 'console.log(document.title)'});
    })
})