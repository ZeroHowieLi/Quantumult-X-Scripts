var body = $response.body;
var obj = JSON.parse(body);

obj['result'] = 0;
body = JSON.stringify(obj);

console.log(body);

$done(body);