// ^https:\/\/(app|data)\.(bilibili|biliapi)\.(com|net)\/x\/v2
// ^https://(app|data).(bilibili|biliapi).(com|net)/
// ^https:\/\/(app|data)\.bili*\.*\/
https://*.(bilibili\.com|biliapi\.net)

const feed_path = "/x/v2/feed/index?access_key"

let url = $request.url
console.log(url)
let body = $response.body;
let data
if (url.indexOf(feed_path) != -1) {
    data = {
        "code": 0,
        "message": "0",
        "ttl": 1,
        "data": {
          "items": []
        }
    }
}
if (typeof data !== 'undefined') {
    body = JSON.stringify(data)
}

$done({
    body: body
})