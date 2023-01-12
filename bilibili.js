// ^https:\/\/(app|data)\.(bilibili|biliapi)\.(com|net)\/x\/v2\/

const feed_path = "/x/v2/feed/index?access_key"

var url = $request.url
var body = $response.body

if (url.indexOf(feed_path) != -1) {
    console.log(body);
    return
}

$done(body)