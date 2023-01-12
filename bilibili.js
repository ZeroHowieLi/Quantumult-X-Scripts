// ^https:\/\/(app|data)\.(bilibili|biliapi)\.(com|net)\/?.?

const feed_path = "/x/v2/feed/index?access_key"
const path3 = "/x/v2/account/mine?access_key"
const path4 = "/x/v2/view?access_key"
const path5 = "/x/v2/view/material?access_key"
const path6 = "/x/v2/reply/main?access_key"
const path7 = "/x/v2/rank?access_key"
const path8 = "/x/v2/channel/region/list?access_key"
const path9 = "/xlive/app-room/v1/index/getInfoByRoom?access_key"
const path10 = "/x/v2/account/teenagers/status?access_key"
const path11 = "/x/v2/account/mine/ipad?access_key"

var url = $response.url
var body = $response.body

if (url.indexOf(path2) != -1) {
    console.log(body);
    return
}


$done(body)