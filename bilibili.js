// ^https:\/\/(app|data)\.(bilibili|biliapi)\.(com|net)\/x

// 推荐视频
const feed_path = "/x/v2/feed/index?access_key"
// Tab资源按钮
const tab_path = "/x/resource/show/tab/v2?access_key"

let url = $request.url
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
} else if (url.indexOf(tab_path) != -1) {
    // Tab 只保留搜索+我的
    data = {
        "code" : 0,
        "config" : {
          "no_login_avatar_type" : 0,
          "popup_style" : 1,
          "tab_simplify" : false,
          "no_login_avatar" : "https://i0.hdslb.com/bfs/archive/689ed56f5b8b9bd26a90b20c52d464ebc0156185.png",
          "search_entrance" : 5
        },
        "data" : {
          "tab" : [],
          "top" : [
            {
              "id" : 176,
              "icon" : "http://i0.hdslb.com/bfs/archive/d43047538e72c9ed8fd8e4e34415fbe3a4f632cb.png",
              "tab_id" : "消息Top",
              "name" : "消息",
              "uri" : "bilibili://link/im_home",
              "pos" : 2
            }
          ],
          "top_more" : [
            {
              "id" : 922,
              "icon" : "http://i0.hdslb.com/bfs/feed-admin/38beac42189ad4d838d20259a5b2cdfd302fef40.png",
              "name" : "搜索",
              "uri" : "bilibili://search",
              "pos" : 2
            }
          ],
          "top_left" : {
            "story_foreground_image" : "http://i0.hdslb.com/bfs/app/98098cfd9349b7500c233216169d768cd536d305.png",
            "story_background_image" : "http://i0.hdslb.com/bfs/app/7391267ec11cfe99823a8cfd80532a7bc6eca390.png",
            "goto" : 2,
            "listen_foreground_image" : "http://i0.hdslb.com/bfs/app/986ee5e963237d511802c4084c83c2f228e97369.png",
            "exp" : 1,
            "head_tag" : "https://i0.hdslb.com/bfs/app/92e7b36c3bd10c850e8a2ba85d19566937751540.png",
            "listen_background_image" : "http://i0.hdslb.com/bfs/app/365848675f453e32b42567ba9e249a347a5df061.png",
            "url" : "bilibili://videoshortcut?user_reg_state=0"
          },
          "bottom" : [
            {
              "uri" : "bilibili://user_center/",
              "tab_id" : "我的Bottom",
              "pos" : 5,
              "id" : 181,
              "icon_selected" : "http://i0.hdslb.com/bfs/archive/a54a8009116cb896e64ef14dcf50e5cade401e00.png",
              "icon" : "http://i0.hdslb.com/bfs/archive/4b0b2c49ffeb4f0c2e6a4cceebeef0aab1c53fe1.png",
              "name" : "我的"
            }
          ]
        },
        "message" : "0"
      }
}

if (typeof data !== 'undefined') {
    body = JSON.stringify(data)
}
$done({
    body: body
})