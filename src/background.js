var ajaxConfig = {
    "async": true,
    "crossDomain": true,
    "url": "https://try.kotlinlang.org/kotlinServer?type=convertToKotlin",
    "method": "POST",
    "headers": {
        "x-requested-with": "XMLHttpRequest",
        "accept-language": "en-US,en;q=0.8,zh-TW;q=0.6,zh;q=0.4",
        "content-type": "application/x-www-form-urlencoded",
        "accept": "text/plain, */*; q=0.01",
        "authority": "try.kotlinlang.org",
        "cache-control": "no-cache"
    },
    "data": {
        "text": "java"
    }
};


function convertJava(info,tab) {
    ajaxConfig.data.text = info.selectionText;
    console.log(info.selectionText);
    $.ajax(ajaxConfig)
        .done(function (response) {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
                chrome.tabs.sendMessage(tabs[0].id, {kotlion: response});
            });
        })
        .fail(function (err) {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
                chrome.tabs.sendMessage(tabs[0].id, {error: err});
            });
        });
}

var createMenuProp = {
    "title" : "MagicKotloin",
    "contexts" : ["selection"],
    "onclick" : convertJava
};

chrome.contextMenus.create(createMenuProp);