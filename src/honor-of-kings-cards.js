/**
 * 王者荣耀 · 皮肤收藏样卡数据
 *
 * 素材版权归腾讯 / 天美工作室所有；仅用于个人非商业收藏展示。
 * 原始图片与来源记录见 assets/honor-of-kings/sources.json。
 *
 * 分类：荣耀典藏、珍品无双、无双、珍品传说、
 *       传说、史诗、勇者。
 * 内部爆率池映射：典藏/珍无 → secret；无双/珍传 → ultra；
 *                 传说 → holo；史诗 → rare；勇者 → common。
 */

const BASE_CARDS = [
  {
    "serial": "101/270",
    "category": "荣耀典藏",
    "hero": "小乔",
    "skin": "天鹅之梦",
    "artwork": "assets/honor-of-kings/101.webp"
  },
  {
    "serial": "102/270",
    "category": "荣耀典藏",
    "hero": "程咬金",
    "skin": "活力突击",
    "artwork": "assets/honor-of-kings/102.webp"
  },
  {
    "serial": "103/270",
    "category": "荣耀典藏",
    "hero": "武则天",
    "skin": "倪克斯神谕",
    "artwork": "assets/honor-of-kings/103.webp"
  },
  {
    "serial": "104/270",
    "category": "荣耀典藏",
    "hero": "芈月",
    "skin": "大秦宣太后",
    "artwork": "assets/honor-of-kings/104.webp"
  },
  {
    "serial": "105/270",
    "category": "荣耀典藏",
    "hero": "鲁班七号",
    "skin": "星空梦想",
    "artwork": "assets/honor-of-kings/105.webp"
  },
  {
    "serial": "106/270",
    "category": "荣耀典藏",
    "hero": "孙悟空",
    "skin": "全息碎影",
    "artwork": "assets/honor-of-kings/106.webp"
  },
  {
    "serial": "107/270",
    "category": "荣耀典藏",
    "hero": "夏侯惇",
    "skin": "无限飓风号",
    "artwork": "assets/honor-of-kings/107.webp"
  },
  {
    "serial": "108/270",
    "category": "荣耀典藏",
    "hero": "孙尚香",
    "skin": "杀手不太冷",
    "artwork": "assets/honor-of-kings/108.webp"
  },
  {
    "serial": "109/270",
    "category": "荣耀典藏",
    "hero": "李白",
    "skin": "鸣剑·曳影",
    "artwork": "assets/honor-of-kings/109.webp"
  },
  {
    "serial": "110/270",
    "category": "荣耀典藏",
    "hero": "花木兰",
    "skin": "九霄神辉",
    "artwork": "assets/honor-of-kings/110.webp"
  },
  {
    "serial": "111/270",
    "category": "荣耀典藏",
    "hero": "诸葛亮",
    "skin": "星域神启",
    "artwork": "assets/honor-of-kings/111.webp"
  },
  {
    "serial": "112/270",
    "category": "荣耀典藏",
    "hero": "貂蝉",
    "skin": "幻阙歌",
    "artwork": "assets/honor-of-kings/112.webp"
  },
  {
    "serial": "113/270",
    "category": "荣耀典藏",
    "hero": "韩信",
    "skin": "弑枪猎影",
    "artwork": "assets/honor-of-kings/113.webp"
  },
  {
    "serial": "114/270",
    "category": "荣耀典藏",
    "hero": "虞姬",
    "skin": "神鉴启示录",
    "artwork": "assets/honor-of-kings/114.webp"
  },
  {
    "serial": "115/270",
    "category": "荣耀典藏",
    "hero": "关羽",
    "skin": "赤影疾锋",
    "artwork": "assets/honor-of-kings/115.webp"
  },
  {
    "serial": "116/270",
    "category": "荣耀典藏",
    "hero": "瑶",
    "skin": "拾光映像",
    "artwork": "assets/honor-of-kings/116.webp"
  },
  {
    "serial": "117/270",
    "category": "荣耀典藏",
    "hero": "铠",
    "skin": "银白咏叹调",
    "artwork": "assets/honor-of-kings/117.webp"
  },
  {
    "serial": "118/270",
    "category": "荣耀典藏",
    "hero": "伽罗",
    "skin": "最初的交响",
    "artwork": "assets/honor-of-kings/118.webp"
  },
  {
    "serial": "119/270",
    "category": "荣耀典藏",
    "hero": "吕布",
    "skin": "千魇归渊",
    "artwork": "assets/honor-of-kings/119.webp"
  },
  {
    "serial": "120/270",
    "category": "荣耀典藏",
    "hero": "安琪拉",
    "skin": "颠倒童话·魔镜",
    "artwork": "assets/honor-of-kings/120.webp"
  },
  {
    "serial": "121/270",
    "category": "珍品无双",
    "hero": "貂蝉",
    "skin": "馥梦繁花",
    "artwork": "assets/honor-of-kings/121.webp"
  },
  {
    "serial": "122/270",
    "category": "无双",
    "hero": "妲己",
    "skin": "青丘九尾",
    "artwork": "assets/honor-of-kings/122.webp"
  },
  {
    "serial": "123/270",
    "category": "无双",
    "hero": "武则天",
    "skin": "神器·明辉仪",
    "artwork": "assets/honor-of-kings/123.webp"
  },
  {
    "serial": "124/270",
    "category": "无双",
    "hero": "韩信",
    "skin": "群星魔术团",
    "artwork": "assets/honor-of-kings/124.webp"
  },
  {
    "serial": "125/270",
    "category": "无双",
    "hero": "李白",
    "skin": "碎月剑心",
    "artwork": "assets/honor-of-kings/125.webp"
  },
  {
    "serial": "126/270",
    "category": "无双",
    "hero": "曜",
    "skin": "器灵·螭龙剑",
    "artwork": "assets/honor-of-kings/126.webp"
  },
  {
    "serial": "127/270",
    "category": "无双",
    "hero": "甄姬",
    "skin": "雪境奇遇",
    "artwork": "assets/honor-of-kings/127.webp"
  },
  {
    "serial": "128/270",
    "category": "无双",
    "hero": "公孙离",
    "skin": "离恨烟",
    "artwork": "assets/honor-of-kings/128.webp"
  },
  {
    "serial": "129/270",
    "category": "无双",
    "hero": "不知火舞",
    "skin": "花合斗",
    "artwork": "assets/honor-of-kings/129.webp"
  },
  {
    "serial": "130/270",
    "category": "无双",
    "hero": "小乔",
    "skin": "时之魔女",
    "artwork": "assets/honor-of-kings/130.webp"
  },
  {
    "serial": "131/270",
    "category": "无双",
    "hero": "瑶",
    "skin": "真我赫兹",
    "artwork": "assets/honor-of-kings/131.webp"
  },
  {
    "serial": "132/270",
    "category": "无双",
    "hero": "诸葛亮",
    "skin": "天机白泽",
    "artwork": "assets/honor-of-kings/132.webp"
  },
  {
    "serial": "133/270",
    "category": "无双",
    "hero": "铠",
    "skin": "神罪",
    "artwork": "assets/honor-of-kings/133.webp"
  },
  {
    "serial": "134/270",
    "category": "无双",
    "hero": "孙悟空",
    "skin": "无相",
    "artwork": "assets/honor-of-kings/134.webp"
  },
  {
    "serial": "135/270",
    "category": "无双",
    "hero": "李信",
    "skin": "问心剑",
    "artwork": "assets/honor-of-kings/135.webp"
  },
  {
    "serial": "136/270",
    "category": "珍品传说",
    "hero": "马可波罗",
    "skin": "怪盗基德",
    "artwork": "assets/honor-of-kings/136.webp"
  },
  {
    "serial": "137/270",
    "category": "珍品传说",
    "hero": "鲁班七号",
    "skin": "江户川柯南",
    "artwork": "assets/honor-of-kings/137.webp"
  },
  {
    "serial": "138/270",
    "category": "珍品传说",
    "hero": "张飞",
    "skin": "兔狲·蓬尾",
    "artwork": "assets/honor-of-kings/138.webp"
  },
  {
    "serial": "139/270",
    "category": "珍品传说",
    "hero": "安琪拉",
    "skin": "酷洛米之心",
    "artwork": "assets/honor-of-kings/139.webp"
  },
  {
    "serial": "140/270",
    "category": "珍品传说",
    "hero": "瑶",
    "skin": "大耳狗之梦",
    "artwork": "assets/honor-of-kings/140.webp"
  },
  {
    "serial": "141/270",
    "category": "珍品传说",
    "hero": "铠",
    "skin": "东海龙王·敖光",
    "artwork": "assets/honor-of-kings/141.webp"
  },
  {
    "serial": "142/270",
    "category": "珍品传说",
    "hero": "孙策",
    "skin": "时之奇旅",
    "artwork": "assets/honor-of-kings/142.webp"
  },
  {
    "serial": "143/270",
    "category": "珍品传说",
    "hero": "暃",
    "skin": "朽木白哉",
    "artwork": "assets/honor-of-kings/143.webp"
  },
  {
    "serial": "144/270",
    "category": "珍品传说",
    "hero": "伽罗",
    "skin": "沧流箭",
    "artwork": "assets/honor-of-kings/144.webp"
  },
  {
    "serial": "145/270",
    "category": "珍品传说",
    "hero": "芈月",
    "skin": "西海龙王·敖润",
    "artwork": "assets/honor-of-kings/145.webp"
  },
  {
    "serial": "146/270",
    "category": "珍品传说",
    "hero": "宫本武藏",
    "skin": "黑崎一护",
    "artwork": "assets/honor-of-kings/146.webp"
  },
  {
    "serial": "147/270",
    "category": "珍品传说",
    "hero": "嫦娥",
    "skin": "器灵·落星盏",
    "artwork": "assets/honor-of-kings/147.webp"
  },
  {
    "serial": "148/270",
    "category": "传说",
    "hero": "干将莫邪",
    "skin": "千山共赴",
    "artwork": "assets/honor-of-kings/148.webp"
  },
  {
    "serial": "149/270",
    "category": "传说",
    "hero": "李白",
    "skin": "凤求凰",
    "artwork": "assets/honor-of-kings/149.webp"
  },
  {
    "serial": "150/270",
    "category": "传说",
    "hero": "孙悟空",
    "skin": "地狱火",
    "artwork": "assets/honor-of-kings/150.webp"
  },
  {
    "serial": "151/270",
    "category": "传说",
    "hero": "花木兰",
    "skin": "冠军飞将",
    "artwork": "assets/honor-of-kings/151.webp"
  },
  {
    "serial": "152/270",
    "category": "传说",
    "hero": "云缨",
    "skin": "幻光神枪",
    "artwork": "assets/honor-of-kings/152.webp"
  },
  {
    "serial": "153/270",
    "category": "传说",
    "hero": "庄周",
    "skin": "牧神诗旅",
    "artwork": "assets/honor-of-kings/153.webp"
  },
  {
    "serial": "154/270",
    "category": "传说",
    "hero": "典韦",
    "skin": "战鼓燎原",
    "artwork": "assets/honor-of-kings/154.webp"
  },
  {
    "serial": "155/270",
    "category": "传说",
    "hero": "孙膑",
    "skin": "小动物乐团",
    "artwork": "assets/honor-of-kings/155.webp"
  },
  {
    "serial": "156/270",
    "category": "传说",
    "hero": "宫本武藏",
    "skin": "惊梅引",
    "artwork": "assets/honor-of-kings/156.webp"
  },
  {
    "serial": "157/270",
    "category": "传说",
    "hero": "澜",
    "skin": "电玩·雷克斯",
    "artwork": "assets/honor-of-kings/157.webp"
  },
  {
    "serial": "158/270",
    "category": "传说",
    "hero": "公孙离",
    "skin": "记忆之芯",
    "artwork": "assets/honor-of-kings/158.webp"
  },
  {
    "serial": "159/270",
    "category": "传说",
    "hero": "百里守约",
    "skin": "碎云",
    "artwork": "assets/honor-of-kings/159.webp"
  },
  {
    "serial": "160/270",
    "category": "传说",
    "hero": "孙尚香",
    "skin": "音你闪耀",
    "artwork": "assets/honor-of-kings/160.webp"
  },
  {
    "serial": "161/270",
    "category": "传说",
    "hero": "蔡文姬",
    "skin": "花朝如约",
    "artwork": "assets/honor-of-kings/161.webp"
  },
  {
    "serial": "162/270",
    "category": "传说",
    "hero": "孙策",
    "skin": "末日机甲",
    "artwork": "assets/honor-of-kings/162.webp"
  },
  {
    "serial": "163/270",
    "category": "传说",
    "hero": "王昭君",
    "skin": "乞巧织情",
    "artwork": "assets/honor-of-kings/163.webp"
  },
  {
    "serial": "164/270",
    "category": "传说",
    "hero": "周瑜",
    "skin": "音你心动",
    "artwork": "assets/honor-of-kings/164.webp"
  },
  {
    "serial": "165/270",
    "category": "传说",
    "hero": "小乔",
    "skin": "音你心动",
    "artwork": "assets/honor-of-kings/165.webp"
  },
  {
    "serial": "166/270",
    "category": "传说",
    "hero": "李元芳",
    "skin": "飞鸢探春",
    "artwork": "assets/honor-of-kings/166.webp"
  },
  {
    "serial": "167/270",
    "category": "传说",
    "hero": "铠",
    "skin": "绛天战甲",
    "artwork": "assets/honor-of-kings/167.webp"
  },
  {
    "serial": "168/270",
    "category": "传说",
    "hero": "刘备",
    "skin": "时之恋人",
    "artwork": "assets/honor-of-kings/168.webp"
  },
  {
    "serial": "169/270",
    "category": "传说",
    "hero": "梦奇",
    "skin": "胖达荣荣",
    "artwork": "assets/honor-of-kings/169.webp"
  },
  {
    "serial": "170/270",
    "category": "传说",
    "hero": "貂蝉",
    "skin": "仲夏夜之梦",
    "artwork": "assets/honor-of-kings/170.webp"
  },
  {
    "serial": "171/270",
    "category": "史诗",
    "hero": "亚瑟",
    "skin": "心灵战警",
    "artwork": "assets/honor-of-kings/171.webp"
  },
  {
    "serial": "172/270",
    "category": "史诗",
    "hero": "扁鹊",
    "skin": "灵蛊蚀心",
    "artwork": "assets/honor-of-kings/172.webp"
  },
  {
    "serial": "173/270",
    "category": "史诗",
    "hero": "芈月",
    "skin": "瑰影绮梦",
    "artwork": "assets/honor-of-kings/173.webp"
  },
  {
    "serial": "174/270",
    "category": "史诗",
    "hero": "狄仁杰",
    "skin": "绮世丹青",
    "artwork": "assets/honor-of-kings/174.webp"
  },
  {
    "serial": "175/270",
    "category": "史诗",
    "hero": "白起",
    "skin": "苍鳞隐世",
    "artwork": "assets/honor-of-kings/175.webp"
  },
  {
    "serial": "176/270",
    "category": "史诗",
    "hero": "马可波罗",
    "skin": "星界特工",
    "artwork": "assets/honor-of-kings/176.webp"
  },
  {
    "serial": "177/270",
    "category": "史诗",
    "hero": "姬小满",
    "skin": "战舞者",
    "artwork": "assets/honor-of-kings/177.webp"
  },
  {
    "serial": "178/270",
    "category": "史诗",
    "hero": "明世隐",
    "skin": "夜落电台",
    "artwork": "assets/honor-of-kings/178.webp"
  },
  {
    "serial": "179/270",
    "category": "史诗",
    "hero": "桑启",
    "skin": "奇遇星旅",
    "artwork": "assets/honor-of-kings/179.webp"
  },
  {
    "serial": "180/270",
    "category": "史诗",
    "hero": "姜子牙",
    "skin": "闲日渔趣",
    "artwork": "assets/honor-of-kings/180.webp"
  },
  {
    "serial": "181/270",
    "category": "史诗",
    "hero": "莱西奥",
    "skin": "末日机甲",
    "artwork": "assets/honor-of-kings/181.webp"
  },
  {
    "serial": "182/270",
    "category": "史诗",
    "hero": "镜",
    "skin": "真我赫兹",
    "artwork": "assets/honor-of-kings/182.webp"
  },
  {
    "serial": "183/270",
    "category": "史诗",
    "hero": "百里守约",
    "skin": "真我赫兹",
    "artwork": "assets/honor-of-kings/183.webp"
  },
  {
    "serial": "184/270",
    "category": "史诗",
    "hero": "海月",
    "skin": "浮梦罗烟",
    "artwork": "assets/honor-of-kings/184.webp"
  },
  {
    "serial": "185/270",
    "category": "史诗",
    "hero": "米莱狄",
    "skin": "完美假期",
    "artwork": "assets/honor-of-kings/185.webp"
  },
  {
    "serial": "186/270",
    "category": "史诗",
    "hero": "蔡文姬",
    "skin": "电玩·兔顽号",
    "artwork": "assets/honor-of-kings/186.webp"
  },
  {
    "serial": "187/270",
    "category": "史诗",
    "hero": "刘禅",
    "skin": "电玩·爆裂旋风",
    "artwork": "assets/honor-of-kings/187.webp"
  },
  {
    "serial": "188/270",
    "category": "史诗",
    "hero": "杨玉环",
    "skin": "银翎春语",
    "artwork": "assets/honor-of-kings/188.webp"
  },
  {
    "serial": "189/270",
    "category": "史诗",
    "hero": "镜",
    "skin": "玫瑰异探",
    "artwork": "assets/honor-of-kings/189.webp"
  },
  {
    "serial": "190/270",
    "category": "史诗",
    "hero": "阿古朵",
    "skin": "顽趣",
    "artwork": "assets/honor-of-kings/190.webp"
  },
  {
    "serial": "191/270",
    "category": "史诗",
    "hero": "弈星",
    "skin": "滕王阁序",
    "artwork": "assets/honor-of-kings/191.webp"
  },
  {
    "serial": "192/270",
    "category": "史诗",
    "hero": "庄周",
    "skin": "天秀·幻梦",
    "artwork": "assets/honor-of-kings/192.webp"
  },
  {
    "serial": "193/270",
    "category": "史诗",
    "hero": "张良",
    "skin": "千筹问战",
    "artwork": "assets/honor-of-kings/193.webp"
  },
  {
    "serial": "194/270",
    "category": "史诗",
    "hero": "高渐离",
    "skin": "天秀·音浪",
    "artwork": "assets/honor-of-kings/194.webp"
  },
  {
    "serial": "195/270",
    "category": "史诗",
    "hero": "澜",
    "skin": "赏金猎手",
    "artwork": "assets/honor-of-kings/195.webp"
  },
  {
    "serial": "196/270",
    "category": "史诗",
    "hero": "哪吒",
    "skin": "雪上飞焰",
    "artwork": "assets/honor-of-kings/196.webp"
  },
  {
    "serial": "197/270",
    "category": "史诗",
    "hero": "司马懿",
    "skin": "暗渊魔法",
    "artwork": "assets/honor-of-kings/197.webp"
  },
  {
    "serial": "198/270",
    "category": "史诗",
    "hero": "安琪拉",
    "skin": "时之奇旅",
    "artwork": "assets/honor-of-kings/198.webp"
  },
  {
    "serial": "199/270",
    "category": "史诗",
    "hero": "钟馗",
    "skin": "乐园奇幻夜",
    "artwork": "assets/honor-of-kings/199.webp"
  },
  {
    "serial": "200/270",
    "category": "史诗",
    "hero": "沈梦溪",
    "skin": "月团寄思",
    "artwork": "assets/honor-of-kings/200.webp"
  },
  {
    "serial": "201/270",
    "category": "史诗",
    "hero": "杨戬",
    "skin": "天秀·启明",
    "artwork": "assets/honor-of-kings/201.webp"
  },
  {
    "serial": "202/270",
    "category": "史诗",
    "hero": "蒙犽",
    "skin": "龙鼓争鸣",
    "artwork": "assets/honor-of-kings/202.webp"
  },
  {
    "serial": "203/270",
    "category": "史诗",
    "hero": "西施",
    "skin": "诗语江南",
    "artwork": "assets/honor-of-kings/203.webp"
  },
  {
    "serial": "204/270",
    "category": "史诗",
    "hero": "孙尚香",
    "skin": "时之恋人",
    "artwork": "assets/honor-of-kings/204.webp"
  },
  {
    "serial": "205/270",
    "category": "史诗",
    "hero": "橘右京",
    "skin": "修罗",
    "artwork": "assets/honor-of-kings/205.webp"
  },
  {
    "serial": "206/270",
    "category": "史诗",
    "hero": "不知火舞",
    "skin": "魅语",
    "artwork": "assets/honor-of-kings/206.webp"
  },
  {
    "serial": "207/270",
    "category": "史诗",
    "hero": "小乔",
    "skin": "青蛇",
    "artwork": "assets/honor-of-kings/207.webp"
  },
  {
    "serial": "208/270",
    "category": "史诗",
    "hero": "大乔",
    "skin": "白蛇",
    "artwork": "assets/honor-of-kings/208.webp"
  },
  {
    "serial": "209/270",
    "category": "史诗",
    "hero": "娜可露露",
    "skin": "晚萤",
    "artwork": "assets/honor-of-kings/209.webp"
  },
  {
    "serial": "210/270",
    "category": "史诗",
    "hero": "公孙离",
    "skin": "无限星赏官",
    "artwork": "assets/honor-of-kings/210.webp"
  },
  {
    "serial": "211/270",
    "category": "史诗",
    "hero": "孙策",
    "skin": "猫狗日记",
    "artwork": "assets/honor-of-kings/211.webp"
  },
  {
    "serial": "212/270",
    "category": "史诗",
    "hero": "阿轲",
    "skin": "节奏热浪",
    "artwork": "assets/honor-of-kings/212.webp"
  },
  {
    "serial": "213/270",
    "category": "史诗",
    "hero": "白起",
    "skin": "星夜王子",
    "artwork": "assets/honor-of-kings/213.webp"
  },
  {
    "serial": "214/270",
    "category": "史诗",
    "hero": "程咬金",
    "skin": "功夫厨神",
    "artwork": "assets/honor-of-kings/214.webp"
  },
  {
    "serial": "215/270",
    "category": "史诗",
    "hero": "李元芳",
    "skin": "逐浪之夏",
    "artwork": "assets/honor-of-kings/215.webp"
  },
  {
    "serial": "216/270",
    "category": "史诗",
    "hero": "刘禅",
    "skin": "天才门将",
    "artwork": "assets/honor-of-kings/216.webp"
  },
  {
    "serial": "217/270",
    "category": "史诗",
    "hero": "蔡文姬",
    "skin": "舞动绿茵",
    "artwork": "assets/honor-of-kings/217.webp"
  },
  {
    "serial": "218/270",
    "category": "史诗",
    "hero": "百里守约",
    "skin": "特工魅影",
    "artwork": "assets/honor-of-kings/218.webp"
  },
  {
    "serial": "219/270",
    "category": "史诗",
    "hero": "安琪拉",
    "skin": "心灵骇客",
    "artwork": "assets/honor-of-kings/219.webp"
  },
  {
    "serial": "220/270",
    "category": "史诗",
    "hero": "雅典娜",
    "skin": "冰冠公主",
    "artwork": "assets/honor-of-kings/220.webp"
  },
  {
    "serial": "221/270",
    "category": "勇者",
    "hero": "莱西奥",
    "skin": "踏浪烽翎",
    "artwork": "assets/honor-of-kings/221.webp"
  },
  {
    "serial": "222/270",
    "category": "勇者",
    "hero": "空空儿",
    "skin": "戏梦巡演",
    "artwork": "assets/honor-of-kings/222.webp"
  },
  {
    "serial": "223/270",
    "category": "勇者",
    "hero": "庄周",
    "skin": "锦麟游梦",
    "artwork": "assets/honor-of-kings/223.webp"
  },
  {
    "serial": "224/270",
    "category": "勇者",
    "hero": "雅典娜",
    "skin": "潮玩士官长",
    "artwork": "assets/honor-of-kings/224.webp"
  },
  {
    "serial": "225/270",
    "category": "勇者",
    "hero": "露娜",
    "skin": "命运加冕",
    "artwork": "assets/honor-of-kings/225.webp"
  },
  {
    "serial": "226/270",
    "category": "勇者",
    "hero": "张良",
    "skin": "灵野札记",
    "artwork": "assets/honor-of-kings/226.webp"
  },
  {
    "serial": "227/270",
    "category": "勇者",
    "hero": "小乔",
    "skin": "秘证寻踪",
    "artwork": "assets/honor-of-kings/227.webp"
  },
  {
    "serial": "228/270",
    "category": "勇者",
    "hero": "刘备",
    "skin": "浪漫序章",
    "artwork": "assets/honor-of-kings/228.webp"
  },
  {
    "serial": "229/270",
    "category": "勇者",
    "hero": "戈娅",
    "skin": "玫蓝誓约",
    "artwork": "assets/honor-of-kings/229.webp"
  },
  {
    "serial": "230/270",
    "category": "勇者",
    "hero": "明世隐",
    "skin": "景韶洛都",
    "artwork": "assets/honor-of-kings/230.webp"
  },
  {
    "serial": "231/270",
    "category": "勇者",
    "hero": "少司缘",
    "skin": "灵卦秘语",
    "artwork": "assets/honor-of-kings/231.webp"
  },
  {
    "serial": "232/270",
    "category": "勇者",
    "hero": "姜子牙",
    "skin": "星梦巡礼",
    "artwork": "assets/honor-of-kings/232.webp"
  },
  {
    "serial": "233/270",
    "category": "勇者",
    "hero": "东皇太一",
    "skin": "金福满堂",
    "artwork": "assets/honor-of-kings/233.webp"
  },
  {
    "serial": "234/270",
    "category": "勇者",
    "hero": "影",
    "skin": "魅影绮裳",
    "artwork": "assets/honor-of-kings/234.webp"
  },
  {
    "serial": "235/270",
    "category": "勇者",
    "hero": "米莱狄",
    "skin": "怪诞之夜",
    "artwork": "assets/honor-of-kings/235.webp"
  },
  {
    "serial": "236/270",
    "category": "勇者",
    "hero": "亚瑟",
    "skin": "动物派对",
    "artwork": "assets/honor-of-kings/236.webp"
  },
  {
    "serial": "237/270",
    "category": "勇者",
    "hero": "大乔",
    "skin": "绒语心约",
    "artwork": "assets/honor-of-kings/237.webp"
  },
  {
    "serial": "238/270",
    "category": "勇者",
    "hero": "貂蝉",
    "skin": "长夏之忆",
    "artwork": "assets/honor-of-kings/238.webp"
  },
  {
    "serial": "239/270",
    "category": "勇者",
    "hero": "杨戬",
    "skin": "破阵·退雄兵",
    "artwork": "assets/honor-of-kings/239.webp"
  },
  {
    "serial": "240/270",
    "category": "勇者",
    "hero": "刘备",
    "skin": "异域游侠",
    "artwork": "assets/honor-of-kings/240.webp"
  },
  {
    "serial": "241/270",
    "category": "勇者",
    "hero": "大司命",
    "skin": "暗都幽影",
    "artwork": "assets/honor-of-kings/241.webp"
  },
  {
    "serial": "242/270",
    "category": "勇者",
    "hero": "扁鹊",
    "skin": "无尽旅途",
    "artwork": "assets/honor-of-kings/242.webp"
  },
  {
    "serial": "243/270",
    "category": "勇者",
    "hero": "亚瑟",
    "skin": "鸿运当头",
    "artwork": "assets/honor-of-kings/243.webp"
  },
  {
    "serial": "244/270",
    "category": "勇者",
    "hero": "朵莉亚",
    "skin": "金色潮汐",
    "artwork": "assets/honor-of-kings/244.webp"
  },
  {
    "serial": "245/270",
    "category": "勇者",
    "hero": "廉颇",
    "skin": "功夫炙烤",
    "artwork": "assets/honor-of-kings/245.webp"
  },
  {
    "serial": "246/270",
    "category": "勇者",
    "hero": "嫦娥",
    "skin": "漠中幻影",
    "artwork": "assets/honor-of-kings/246.webp"
  },
  {
    "serial": "247/270",
    "category": "勇者",
    "hero": "海诺",
    "skin": "时空谍影",
    "artwork": "assets/honor-of-kings/247.webp"
  },
  {
    "serial": "248/270",
    "category": "勇者",
    "hero": "程咬金",
    "skin": "暖冬絮语",
    "artwork": "assets/honor-of-kings/248.webp"
  },
  {
    "serial": "249/270",
    "category": "勇者",
    "hero": "曹操",
    "skin": "决胜大满贯",
    "artwork": "assets/honor-of-kings/249.webp"
  },
  {
    "serial": "250/270",
    "category": "勇者",
    "hero": "亚连",
    "skin": "破局者",
    "artwork": "assets/honor-of-kings/250.webp"
  },
  {
    "serial": "251/270",
    "category": "勇者",
    "hero": "钟无艳",
    "skin": "聚星闪耀",
    "artwork": "assets/honor-of-kings/251.webp"
  },
  {
    "serial": "252/270",
    "category": "勇者",
    "hero": "海月",
    "skin": "王牌新星",
    "artwork": "assets/honor-of-kings/252.webp"
  },
  {
    "serial": "253/270",
    "category": "勇者",
    "hero": "姬小满",
    "skin": "零食大作战",
    "artwork": "assets/honor-of-kings/253.webp"
  },
  {
    "serial": "254/270",
    "category": "勇者",
    "hero": "莱西奥",
    "skin": "西部游侠",
    "artwork": "assets/honor-of-kings/254.webp"
  },
  {
    "serial": "255/270",
    "category": "勇者",
    "hero": "赵怀真",
    "skin": "太极少年",
    "artwork": "assets/honor-of-kings/255.webp"
  },
  {
    "serial": "256/270",
    "category": "勇者",
    "hero": "白起",
    "skin": "乐园追猎者",
    "artwork": "assets/honor-of-kings/256.webp"
  },
  {
    "serial": "257/270",
    "category": "勇者",
    "hero": "牛魔",
    "skin": "牛运亨通",
    "artwork": "assets/honor-of-kings/257.webp"
  },
  {
    "serial": "258/270",
    "category": "勇者",
    "hero": "猪八戒",
    "skin": "潮玩探月行",
    "artwork": "assets/honor-of-kings/258.webp"
  },
  {
    "serial": "259/270",
    "category": "勇者",
    "hero": "海月",
    "skin": "幻泉雾影",
    "artwork": "assets/honor-of-kings/259.webp"
  },
  {
    "serial": "260/270",
    "category": "勇者",
    "hero": "刘备",
    "skin": "潮玩造梦师",
    "artwork": "assets/honor-of-kings/260.webp"
  },
  {
    "serial": "261/270",
    "category": "勇者",
    "hero": "戈娅",
    "skin": "危途狂花",
    "artwork": "assets/honor-of-kings/261.webp"
  },
  {
    "serial": "262/270",
    "category": "勇者",
    "hero": "蒙犽",
    "skin": "胡桃狂想曲",
    "artwork": "assets/honor-of-kings/262.webp"
  },
  {
    "serial": "263/270",
    "category": "勇者",
    "hero": "米莱狄",
    "skin": "契约魔法",
    "artwork": "assets/honor-of-kings/263.webp"
  },
  {
    "serial": "264/270",
    "category": "勇者",
    "hero": "刘邦",
    "skin": "虎啸剑宗",
    "artwork": "assets/honor-of-kings/264.webp"
  },
  {
    "serial": "265/270",
    "category": "勇者",
    "hero": "程咬金",
    "skin": "无双福将",
    "artwork": "assets/honor-of-kings/265.webp"
  },
  {
    "serial": "266/270",
    "category": "勇者",
    "hero": "马可波罗",
    "skin": "潮玩牛仔",
    "artwork": "assets/honor-of-kings/266.webp"
  },
  {
    "serial": "267/270",
    "category": "勇者",
    "hero": "妲己",
    "skin": "紫罗兰之誓",
    "artwork": "assets/honor-of-kings/267.webp"
  },
  {
    "serial": "268/270",
    "category": "勇者",
    "hero": "典韦",
    "skin": "铁甲之心",
    "artwork": "assets/honor-of-kings/268.webp"
  },
  {
    "serial": "269/270",
    "category": "勇者",
    "hero": "盘古",
    "skin": "重装意志",
    "artwork": "assets/honor-of-kings/269.webp"
  },
  {
    "serial": "270/270",
    "category": "勇者",
    "hero": "艾琳",
    "skin": "女武神",
    "artwork": "assets/honor-of-kings/270.webp"
  }
];

const CATEGORY_META = {
  '荣耀典藏': {
    tag: '典藏',
    trait: '荣耀典藏',
    rarity: 'secret',
    rarityMark: '✦✦✦✦',
    rarityLabel: 'GLORY',
  },
  '珍品无双': {
    tag: '珍无',
    trait: '珍品无双',
    rarity: 'secret',
    rarityMark: '✦✦✦',
    rarityLabel: 'PRESTIGE',
  },
  '无双': {
    tag: '无双',
    trait: '无双',
    rarity: 'ultra',
    rarityMark: '✦✦✦',
    rarityLabel: 'MYTHIC',
  },
  '珍品传说': {
    tag: '珍传',
    trait: '珍品传说',
    rarity: 'ultra',
    rarityMark: '★★★',
    rarityLabel: 'PREMIUM',
  },
  '传说': {
    tag: '传说',
    trait: '传说',
    rarity: 'holo',
    rarityMark: '★★',
    rarityLabel: 'LEGEND',
  },
  '史诗': {
    tag: '史诗',
    trait: '史诗',
    rarity: 'rare',
    rarityMark: '◆◆◆',
    rarityLabel: 'EPIC',
  },
  '勇者': {
    tag: '勇者',
    trait: '勇者',
    rarity: 'common',
    rarityMark: '◆',
    rarityLabel: 'BRAVE',
  },
};

const PALETTES = {
  '荣耀典藏': [
    {
      frameBg: 'linear-gradient(135deg, #100b0c 0%, #4a1618 28%, #080607 52%, #8d6129 78%, #140d10 100%)',
      plaqueBg: 'linear-gradient(180deg, rgba(27, 12, 15, 0.96), rgba(11, 7, 9, 0.98))',
      edgeColor: '#e3b765',
      textColor: '#fff1d8',
      windowBg: 'linear-gradient(160deg, #12090b, #321419)',
    },
    {
      frameBg: 'linear-gradient(135deg, #090d12 0%, #1f3c4d 30%, #05080b 54%, #8c6b33 78%, #0a0f14 100%)',
      plaqueBg: 'linear-gradient(180deg, rgba(10, 17, 23, 0.96), rgba(5, 8, 11, 0.98))',
      edgeColor: '#d9b467',
      textColor: '#f8f1df',
      windowBg: 'linear-gradient(160deg, #081017, #162c38)',
    },
  ],
  '珍品无双': [
    {
      frameBg: 'linear-gradient(135deg, #160c15 0%, #53253f 30%, #0a070b 54%, #a26a5a 78%, #1a0d16 100%)',
      plaqueBg: 'linear-gradient(180deg, rgba(30, 14, 26, 0.96), rgba(11, 7, 11, 0.98))',
      edgeColor: '#f0b09a',
      textColor: '#fff0e8',
      windowBg: 'linear-gradient(160deg, #160b15, #3d1c31)',
    },
  ],
  '无双': [
    {
      frameBg: 'linear-gradient(135deg, #0b1212 0%, #1e4b42 30%, #060a0a 54%, #987532 78%, #0b1111 100%)',
      plaqueBg: 'linear-gradient(180deg, rgba(10, 22, 20, 0.96), rgba(5, 9, 9, 0.98))',
      edgeColor: '#cfae66',
      textColor: '#f1f5e9',
      windowBg: 'linear-gradient(160deg, #081312, #17332e)',
    },
    {
      frameBg: 'linear-gradient(135deg, #150f1b 0%, #3d2f67 30%, #090711 54%, #82623a 78%, #16101e 100%)',
      plaqueBg: 'linear-gradient(180deg, rgba(24, 15, 30, 0.96), rgba(8, 6, 12, 0.98))',
      edgeColor: '#cbb27a',
      textColor: '#fbf3e4',
      windowBg: 'linear-gradient(160deg, #100b18, #2a2143)',
    },
  ],
  '珍品传说': [
    {
      frameBg: 'linear-gradient(135deg, #180f18 0%, #542d4e 30%, #0b0810 54%, #9b7848 78%, #1b101c 100%)',
      plaqueBg: 'linear-gradient(180deg, rgba(28, 15, 28, 0.96), rgba(10, 7, 12, 0.98))',
      edgeColor: '#dfba7b',
      textColor: '#fdf1e4',
      windowBg: 'linear-gradient(160deg, #140d18, #33213b)',
    },
  ],
  '传说': [
    {
      frameBg: 'linear-gradient(135deg, #0c1726 0%, #223f65 30%, #050a12 54%, #7d6843 78%, #0d1721 100%)',
      plaqueBg: 'linear-gradient(180deg, rgba(10, 20, 34, 0.96), rgba(5, 9, 15, 0.98))',
      edgeColor: '#b9cfdb',
      textColor: '#eef8ff',
      windowBg: 'linear-gradient(160deg, #07121e, #152b41)',
    },
  ],
  '史诗': [
    {
      frameBg: 'linear-gradient(135deg, #120f22 0%, #453176 30%, #080713 54%, #4d607f 78%, #141126 100%)',
      plaqueBg: 'linear-gradient(180deg, rgba(19, 15, 35, 0.96), rgba(8, 7, 15, 0.98))',
      edgeColor: '#b5a2e8',
      textColor: '#f5efff',
      windowBg: 'linear-gradient(160deg, #0f0c20, #242044)',
    },
  ],
  '勇者': [
    {
      frameBg: 'linear-gradient(135deg, #e8eef0 0%, #b2c2cc 30%, #ffffff 52%, #7f95a3 76%, #d5e0e4 100%)',
      plaqueBg: 'linear-gradient(180deg, rgba(248, 251, 253, 0.96), rgba(220, 230, 235, 0.98))',
      edgeColor: '#667a88',
      textColor: '#15222b',
      windowBg: 'linear-gradient(160deg, #273d4b, #101a22)',
    },
    {
      frameBg: 'linear-gradient(135deg, #e9e6da 0%, #c2bfa9 30%, #fbf9ef 52%, #8c8b74 76%, #dedccb 100%)',
      plaqueBg: 'linear-gradient(180deg, rgba(251, 249, 241, 0.96), rgba(228, 225, 211, 0.98))',
      edgeColor: '#77765e',
      textColor: '#242317',
      windowBg: 'linear-gradient(160deg, #2b3028, #141812)',
    },
  ],
};

export const HONOR_OF_KINGS_CARDS = BASE_CARDS.map((card, index) => {
  const meta = CATEGORY_META[card.category];
  const palettes = PALETTES[card.category];
  const palette = palettes[index % palettes.length];
  return {
    id: `hok-${card.serial.slice(0, 3)}`,
    name: card.skin,
    tag: meta.tag,
    trait: `${card.hero} · ${meta.trait}`,
    fullName: `${card.hero}-${card.skin}`,
    serial: card.serial,
    category: card.category,
    rarity: meta.rarity,
    rarityMark: meta.rarityMark,
    rarityLabel: meta.rarityLabel,
    frameBg: palette.frameBg,
    plaqueBg: palette.plaqueBg,
    edgeColor: palette.edgeColor,
    textColor: palette.textColor,
    windowBg: palette.windowBg,
    artwork: card.artwork,
    artworkAlt: `${card.hero}-${card.skin}`,
    artworkPosition: '50% 36%',
  };
});
