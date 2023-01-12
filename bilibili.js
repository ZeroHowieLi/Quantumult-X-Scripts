// ^https:\/\/(app|data)\.(bilibili|biliapi)\.(com|net)\/?.?

var url = $response.url;
var body = $response.body;
var obj = JSON.parse(body);

obj['result'] = 0;
// body = JSON.stringify(obj);

console.log(url);

$done(body);