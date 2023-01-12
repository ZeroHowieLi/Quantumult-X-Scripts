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
          "tab" : [
            {
              "id" : 39,
              "tab_id" : "直播tab",
              "name" : "好好",
              "uri" : "bilibili://live/home",
              "pos" : 1
            },
            {
              "id" : 40,
              "tab_id" : "推荐tab",
              "default_selected" : 1,
              "name" : "学习",
              "uri" : "bilibili://pegasus/promo",
              "pos" : 2
            },
            {
              "id" : 41,
              "tab_id" : "hottopic",
              "name" : "24",
              "uri" : "bilibili://pegasus/hottopic",
              "pos" : 3
            },
            {
              "id" : 545,
              "tab_id" : "bangumi",
              "name" : "24",
              "uri" : "bilibili://pgc/home",
              "pos" : 4
            },
            {
              "id" : 151,
              "tab_id" : "film",
              "name" : "成功",
              "uri" : "bilibili://pgc/cinema-tab",
              "pos" : 5
            },
            {
              "pos" : 6,
              "id" : 136117,
              "tab_id" : "165",
              "name" : "上岸",
              "uri" : "bilibili://following/home_activity_tab/136117",
              "color" : "#DD1225"
            }
          ],
          "top" : [
            {
              "id" : 222,
              "icon" : "http://i0.hdslb.com/bfs/archive/734a3b610a953df398bbe6d787944514dcd94a46.png",
              "tab_id" : "游戏中心Top",
              "name" : "游戏中心",
              "uri" : "bilibili://game_center/home",
              "pos" : 1
            },
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
              "id" : 621,
              "icon" : "http://i0.hdslb.com/bfs/feed-admin/f95dfa31c793c857af6e7b65b5387a05f30d31ba.png",
              "name" : "更多分区",
              "uri" : "bilibili://main/top_category",
              "pos" : 1
            },
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
              "uri" : "bilibili://main/home/",
              "tab_id" : "home",
              "pos" : 1,
              "id" : 177,
              "icon_selected" : "http://i0.hdslb.com/bfs/archive/e5106aa688dc729e7f0eafcbb80317feb54a43bd.png",
              "icon" : "http://i0.hdslb.com/bfs/archive/63d7ee88d471786c1af45af86e8cb7f607edf91b.png",
              "name" : "首页"
            },
            {
              "uri" : "bilibili://following/home/",
              "tab_id" : "dynamic",
              "pos" : 2,
              "id" : 179,
              "icon_selected" : "http://i0.hdslb.com/bfs/archive/25b658e1f6b6da57eecba328556101dbdcb4b53f.png",
              "icon" : "http://i0.hdslb.com/bfs/archive/86dfbe5fa32f11a8588b9ae0fccb77d3c27cedf6.png",
              "name" : "动态"
            },
            {
              "uri" : "bilibili://uper/center_plus?relation_from=center_plus&tab_index=2",
              "tab_id" : "publish",
              "pos" : 3,
              "id" : 670,
              "dialog_items" : [
                {
                  "id" : 617,
                  "icon" : "http://i0.hdslb.com/bfs/feed-admin/01f9b3f8ed61a4e59af693da9fcd38fc342ee7e5.png",
                  "name" : "开直播",
                  "uri" : "activity://liveStreaming/home?source_event=14"
                },
                {
                  "id" : 618,
                  "icon" : "http://i0.hdslb.com/bfs/feed-admin/30636aa60e594550ec47422e3875b4345e7d6017.png",
                  "name" : "拍摄",
                  "uri" : "bilibili://uper/user_center/add_archive/?from=1&is_new_ui=1&relation_from=center_plus"
                },
                {
                  "id" : 619,
                  "icon" : "http://i0.hdslb.com/bfs/feed-admin/55c3c112f4885adc6cce0b4b94149409fd1c147b.png",
                  "name" : "上传",
                  "uri" : "bilibili://uper/user_center/add_archive/?from=0&is_new_ui=1&relation_from=center_plus"
                },
                {
                  "id" : 620,
                  "icon" : "http://i0.hdslb.com/bfs/feed-admin/4e5188d8390754655dee0fdfd90c1088da3cdf90.png",
                  "name" : "模板创作",
                  "uri" : "bilibili://uper/user_center/add_archive/?from=2&is_new_ui=1&relation_from=center_plus"
                }
              ],
              "publish_bubble" : [
                {
                  "id" : 20093,
                  "icon" : "https://i0.hdslb.com/bfs/activity-plat/static/20221123/e736cc83e950d8b595cf52014b8f0242/0kqBwun7Wi.png",
                  "stime" : 1673458265,
                  "url" : "bilibili://uper/user_center/add_archive/?from=2&rhythm_id_v2=2050539&is_detail=1&post_config={\"first_entrance\":\"素材页\"}",
                  "etime" : 1673631065
                }
              ],
              "type" : 3,
              "icon" : "http://i0.hdslb.com/bfs/feed-admin/c25cabacb40e9df2ccf54c327350e1afc4ae2f8c.png",
              "name" : "发布"
            },
            {
              "uri" : "bilibili://mall/home",
              "tab_id" : "会员购Bottom",
              "pos" : 4,
              "id" : 242,
              "icon_selected" : "http://i0.hdslb.com/bfs/archive/eeaf83fb7157000776dd93f61702a049f56801d3.png",
              "icon" : "http://i0.hdslb.com/bfs/archive/6090d5fa7ece2a94de839e7cce4f1e774dae7779.png",
              "name" : "会员购"
            },
            {
              "uri" : "bilibili://user_center/",
              "tab_id" : "我的Bottom",
              "pos" : 5,
              "id" : 181,
              "icon_selected" : "http://i0.hdslb.com/bfs/archive/a54a8009116cb896e64ef14dcf50e5cade401e00.png",
              "icon" : "http://i0.hdslb.com/bfs/archive/4b0b2c49ffeb4f0c2e6a4cceebeef0aab1c53fe1.png",
              "name" : "大李昊同学"
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