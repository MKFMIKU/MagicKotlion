var ajaxConfig = {
    "async": true,
    "crossDomain": true,
    "url": "https://try.kotlinlang.org/kotlinServer?type=convertToKotlin",
    "method": "POST",
    "headers": {
        "origin": "https://try.kotlinlang.org",
        "accept-encoding": "gzip, deflate, br",
        "x-requested-with": "XMLHttpRequest",
        "accept-language": "en-US,en;q=0.8,zh-TW;q=0.6,zh;q=0.4",
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.86 Safari/537.36",
        "content-type": "application/x-www-form-urlencoded",
        "accept": "text/plain, */*; q=0.01",
        "referer": "https://try.kotlinlang.org/",
        "authority": "try.kotlinlang.org",
        "cache-control": "no-cache"
    },
    "data": {
        "text": "java"
    }
};


function convertJava(info) {
    ajaxConfig.data.text = info.selectionText;
    $.ajax(ajaxConfig).done(function (response) {
        console.log(response);
    });
}

var createMenuProp = {
    "title" : "MagicKotloin",
    "contexts" : ["selection"],
    "onclick" : convertJava
};

chrome.contextMenus.create(createMenuProp);