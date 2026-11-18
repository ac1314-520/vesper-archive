# VESPER · 长庚秘藏

> 为每一束微光建档。  
> 一座属于你的私人星灵档案馆。

VESPER 是一个可直接部署的纯静态全息抽卡网站。它基于
[Lone3m-tech/prism-holo-pack](https://github.com/Lone3m-tech/prism-holo-pack) 的 MIT 代码重新设计了整套品牌、界面与卡池，并新增 6 位星灵，使收藏总数达到 **18 张**。

**零第三方运行时依赖**：不需要 `npm install`，没有外部字体、图片 CDN 或音频文件。角色立绘由项目自带的 SDF 光线步进脚本生成，音效由 Web Audio API 实时合成。

---

## 快速启动

需要 Node.js 18+：

```bash
node server.mjs
```

终端会输出两个地址：

```text
Local:   http://127.0.0.1:4173
Phone:   http://192.168.x.x:4173
```

- 电脑本机打开 **Local** 地址。
- **手机打开 Phone 地址**，并且手机和电脑要连接同一个路由器 / Wi-Fi。
- 手机不要打开 `127.0.0.1`，那是手机自己，不是电脑。

也可以使用任意静态服务器（页面使用原生 ES Module，不能直接双击 `index.html` 以 `file://` 打开）：

```bash
python -m http.server 4173
```

端口被占用时，内置服务器会自动顺延到下一个可用端口。可通过环境变量指定端口或监听地址：

```bash
PORT=4173 HOST=0.0.0.0 node server.mjs
```

Windows PowerShell 写法：

```powershell
$env:PORT='4173'; $env:HOST='0.0.0.0'; node server.mjs
```

如果手机还是打不开：

1. 确认手机和电脑在同一个 Wi-Fi / 路由器的局域网内；
2. 确认终端里 Phone 行的 IP 没有变化（路由器重新分配 IP 后需要以新地址为准）；
3. 路由器如果启用了“访客网络 / AP 隔离”，手机和电脑会互相隔离，需要关闭该选项；
4. Windows 防火墙第一次询问时，允许 Node.js 在“专用/公用网络”上通信。

---

## 分享给别人体验

### 临时公网链接（当前电脑必须保持开机、服务器和隧道都要运行）

Windows 自带 OpenSSH 可以直接开一条临时公网隧道：

```bash
ssh -T -R 80:localhost:4173 nokey@localhost.run
```

终端会返回一个 `https://xxxx.app.lhr.life` 地址，把它发给朋友即可。
这类免费隧道的域名可能会定期轮换，电脑休眠、网络断开或关闭终端后链接会失效。
它适合一两天内的小范围体验，不适合作为长期官网。

### 永久部署

整个 `vesper-archive` 文件夹就是纯静态站点，**不需要构建**。把 `index.html`、`src/`、`assets/`、`scripts/` 一起上传到任意静态托管即可：

- Cloudflare Pages：上传整个文件夹，输出目录填 `/`
- Vercel / Netlify：导入文件夹，Build Command 留空
- 腾讯云 COS / 阿里云 OSS / 对象存储：开启静态网站托管，上传整个文件夹
- GitHub Pages：打开仓库 **Settings → Pages → Build and deployment**，
  Source 选择 **Deploy from a branch**，Branch 选 `main`，目录选 `/(root)`，Save。
  仓库根目录已经包含 `index.html` 和 `.nojekyll`，无需构建。

部署后得到的 HTTPS 地址可以直接分享。若朋友主要在国内，建议用国内对象存储或备案过的静态托管，访问会更稳定。

---

## 怎么玩

1. **摇包验星**：点击控制台「摇包验星」，或未拆封时左右快速晃动鼠标，封口会透出本包最高稀有度的星息。
2. **拆开封条**：按住星匣顶部封口横向拖动（撕到一半松手会卷曲回弹），或直接点击「拆开封条」。
3. **翻牌**：点击单张卡背翻开；按住鼠标横扫可连续翻牌；「一键翻开」按稀有度由低到高依次揭晓。
4. **全息检视**：点击已翻开的卡面进入 3D 全息放大；移动指针可倾斜检视卡面工艺。
5. **私人图鉴**：左下「私人图鉴」查看 18 张星灵。支持稀有度筛选、全息异画标记、收集计数与已解锁卡面回看。
6. **欧皇模式**：控制台右侧可装填下一包「全高罕」星匣；每 3 包保底至少一张 Ultra / Secret。
7. **灯光与声音**：右上角可切换「暗房聚光 / 白昼展台」，也可静音。进度、灯光偏好与静音状态均保存在本机 `localStorage`。

支持键盘操作：`Tab` 聚焦，`Enter / Space` 翻开卡牌，`← / →` 在扇形卡组中移动焦点，`Esc` 关闭图鉴或全息检视。

---

## 18 位星灵

| 编号 | 星灵 | 稀有度 | 关键词 |
| --- | --- | --- | --- |
| 001 | Mochi | 微光 | 初生暖焰 |
| 002 | Voxel | 微光 | 晶格构筑 |
| 003 | Sprout | 微光 | 晨露初生 |
| 004 | Nimbus | 微光 | 高空流云 |
| 005 | Lumen | 微光 | 守夜微光 |
| 006 | Mori | 微光 | 月下蕈语 |
| 007 | Ember | 稀有 | 熔核炽羽 |
| 008 | Tide | 稀有 | 深海潮汐 |
| 009 | Facet | 稀有 | 紫晶折射 |
| 010 | Kite | 稀有 | 逐星纸鸢 |
| 011 | Lune | 稀有 | 弦月低语 |
| 012 | Orbit | 全息 | 星环巡游 |
| 013 | Vortex | 全息 | 星云坍缩 |
| 014 | Echo | 全息 | 深空回响 |
| 015 | 水墨丹青 | 极耀 | 极境行沙洲 · 不朽永恩 |
| 016 | Helios | 极耀 | 曜金日冕 |
| 017 | 香水宝石 | 秘藏 | 四叶雾歌 · 不朽格温 |
| 018 | Vesper | 秘藏 | 长庚启明 |

> 新增的 Lumen、Mori、Kite、Lune、Echo、Vesper 六位星灵与对应的 3D 立绘均为本次定制新增。
>
> **015 水墨丹青 / 017 香水宝石** 是目前先放入的两张自定义样卡，封面来自用户提供的
> `assets/custom/inkblade.jpg` 与 `assets/custom/perfume.jpg`。完整长名被拆成
> “稀有度标签 + 主名 + 副名”三层排版，悬停图鉴卡片可看到完整名称。
>
> 样卡审阅：在页面 URL 后加 `?preview=inkblade` 或 `?preview=perfume`，
> 可以直接打开对应卡面的 3D 全息检视，无需先抽到。

---

## 自定义卡牌字段

`src/cards-config.js` 中的卡片对象现在同时支持两种封面方式：

```js
// A. 透明角色立绘，沿用原来的 3D 角色窗口与眼睛绑定
character: {
  image: 'assets/characters/your-character.png',
  rigged: true,
  eyeLeft: { x: 40, y: 48, size: 7 },
  eyeRight: { x: 57, y: 48, size: 7 },
  mouth: { x: 48, y: 56, width: 7 },
}

// B. 整幅横向/方形封面，直接铺满全息画窗，保留卡框与名字铭牌
artwork: 'assets/custom/your-cover.jpg',
artworkAlt: '封面描述',
artworkPosition: '50% 45%', // 可选，object-position
```

样卡已经使用 B 方案：封面是双人横构图，因此不切成透明角色，而是完整放进卡面的全息画窗，
保证两位角色都不会被裁掉。

---

## 主要改造

- **品牌与界面**：PRISM 实验台改造成 VESPER 私人档案馆；使用午夜墨、香槟金与月光石色系，重新设计顶栏、舞台、控制台、图鉴与响应式布局。
- **扩充卡池**：从 12 张扩充到 18 张，新增 2 位微光、2 位稀有、1 位全息、1 位秘藏，并配置独立的卡框、画窗、铭牌与性格文案。
- **性能**：自适应画质（连续低帧率时自动收敛粒子与背景特效）、Canvas DPR 上限、纸屑/星火粒子降载、窗口尺寸防抖、页面隐藏暂停、非阻塞图像解码，以及更短的拆包动画路径。
- **交互逻辑**：新增清晰的「拆开封条」主按钮；摇包、拆封、连翻、再来一包状态互斥；图鉴稀有度筛选；重置存档二次确认；图鉴焦点陷阱与背景 `inert`；卡牌键盘翻牌与全息卡焦点管理。
- **视觉整洁**：将原作的高饱和彩虹喷流改为香槟金/月光紫/湖蓝的克制星辉，压低背景光束，新增展台基座、侧栏档案编号、统一衬线标题与双语铭牌。
- **移动端**：控制台改为两层网格，图鉴双列滚动，滤镜横向滑动，星匣与卡片尺寸按视口重新缩放。

---

## 自定义

所有卡池、概率与主题都在 `src/cards-config.js`：

- `PACK_BRAND`：星匣、卡背、页脚印刷文案。
- `PACK_THEMES`：六种星匣配色。
- `CARD_POOL`：18 位星灵的卡面配色、稀有度、编号与角色图。
- `src/theme.css`：VESPER 的界面层样式与响应式规则。
- `scripts/generate-assets.mjs`：SDF 角色渲染器。运行 `npm run generate-assets` 可重建全部立绘；也可只重建指定角色：

```bash
node scripts/generate-assets.mjs vesper lune
```

修改品牌后，记得同步 `index.html` 中的标题、描述与内联 SVG favicon。

---

## 目录

```text
vesper-archive/
├── index.html
├── server.mjs
├── package.json
├── LICENSE
├── NOTICE.md
├── assets/
│   ├── characters/          # 18 张透明背景星灵立绘
│   └── custom/              # 用户提供的自定义样卡封面
├── scripts/
│   └── generate-assets.mjs  # SDF 光线步进角色生成器
└── src/
    ├── cards-config.js      # 卡池与品牌文案
    ├── main.js              # 拆包物理、抽卡状态机、图鉴与渲染循环
    ├── sound.js             # Web Audio 合成音效
    ├── styles.css           # 原始交互/卡牌物理样式（MIT）
    └── theme.css            # VESPER 主题与界面覆盖层
```

---

## 许可与致谢

- 原始交互实验代码与 12 张程序化角色素材来自 [SimpleMkt / PRISM](https://github.com/Lone3m-tech/prism-holo-pack)，采用 MIT License。
- 原始项目 `assets/brand/` 下的 SimpleMkt 品牌字标与舞台背景属于其品牌资产，**本定制版没有包含或使用这些文件**。
- 本项目新增的品牌字标、界面、六位新星灵与卡池文案为 VESPER 定制内容。
- `assets/custom/` 下的两张样卡封面由本站委托人提供，仅用于本地样卡预览，**不属于 MIT 授权范围**；公开部署前请替换为已获授权的素材。
- 完整授权文本见 [LICENSE](./LICENSE)，补充说明见 [NOTICE.md](./NOTICE.md)。
