// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "最美的冬冬宝贝",  // 同上...
        "今天是你的生日",
        "还记得我们是哪一天认识的嘛",
        "我们已经在一起227天啦！",
        "6.9 我们一起去广州",
        "8.10 我们一起去你们学校参观",
        "10.6 我们一起听演唱会！",
        "11.8 你陪我度过了第一个生日！！！",
        "11.17 我们一起爬天平山",
        "12.1 我们一起爬虞山",
        "这是我陪你度过的第一个生日！",
        "以后第二个第三个第一百个都被我预定了！",
        "生日快乐~~宝贝",
        "遇到你是我最大的幸运",
        "愿冬冬宝贝永远健康、快乐~~~",
        "快拆礼物吧"
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        //"送给我": "./imgs/songxinxin.jpeg",
        "最美的冬冬宝贝": "./imgs/1.png",
        "还记得我们是哪一天认识的嘛": "./imgs/2.jpg",
        "6.9 我们一起去广州": "./imgs/3.jpg",
        "8.10 我们一起去你们学校参观": "./imgs/4.jpg",
        "10.6 我们一起听演唱会！": "./imgs/5.jpg",
        "11.8 你陪我度过了第一个生日！！！" : "./imgs/6.jpg",
        "11.17 我们一起爬天平山": "./imgs/7.jpg",
        "12.1 我们一起爬虞山" : "./imgs/8.jpg"
    },
    
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始吧",
        play: "Music走起",
        bannar_coming: "搞点颜色",
        balloons_flying: "好像还少点东西",
        cake_fadein: "蛋糕不能少",
        light_candle: "蜡烛点上！！！",
        wish_message: "生日快乐~~~",
        story: "有一些心里话想和你说"
    },

    // 结束语
    loveText: '爱你的老朱'
};