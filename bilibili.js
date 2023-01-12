// ^https:\/\/(app|data)\.(bilibili|biliapi)\.(com|net)\/x\/v2
// ^https://(app|data).(bilibili|biliapi).(com|net)/
// ^https:\/\/(app|data)\.bili*\.*\/
https://*.(bilibili\.com|biliapi\.net)

const feed_path = "/x/v2/feed/index?access_key"

let url = $request.url
let body = JSON.parse($response.body);
console.log(url)
if (url.indexOf(feed_path) != -1) {
    body = {
        "code": 0,
        "message": "0",
        "ttl": 1,
        "data": {
          "items": []
        }
    }
}
console.log(body)

$done({
    body: JSON.stringify(body)
})