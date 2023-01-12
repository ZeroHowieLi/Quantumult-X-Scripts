// ^https:\/\/(app|data)\.(bilibili|biliapi)\.(com|net)\/
// ^https://(app|data).(bilibili|biliapi).(com|net)/
// ^https:\/\/(app|data)\.bili*\.*\/

const feed_path = "/x/v2/feed/index?access_key"

var url = $request.url
var body = $response.body

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

$done(body)