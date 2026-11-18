/**
 * VESPER · 长庚秘藏 — 卡池、概率与主题的唯一数据入口
 *
 * 270 席星灵档案现已全部填充：
 * 18 位 VESPER 原创星灵 + 82 张金铲铲 / 云顶之弈收藏样卡 + 170 张王者荣耀皮肤样卡。
 * 收藏样卡的名称、分类与封面分别集中在 `golden-spatula-cards.js`
 * 与 `honor-of-kings-cards.js`。
 * 新增或替换角色时不需要改抽卡引擎。
 *
 * 自定义卡面支持三种方式：
 * 1. `character`：透明角色立绘，沿用 3D 表情绑定。
 * 2. `artwork`：整幅封面，直接铺满全息画窗，保留卡框与名字铭牌。
 * 3. `fullArtImage`：整张卡面直出，不再叠加铭牌排版。
 * 可选 `fullName` 用于完整长名的悬停提示与无障碍标签。
 */

import { GOLDEN_SPATULA_CARDS } from './golden-spatula-cards.js?v=20261118h';
import { HONOR_OF_KINGS_CARDS } from './honor-of-kings-cards.js?v=20261118h';

export const TOTAL_CARD_SLOTS = 270;

export const PACK_BRAND = {
  logo: 'VESPER',
  seriesCode: 'PRIVATE CONSTELLATION · S01',
  tearHint: '◀ TEAR SEAL · 沿此撕开 ⟶',
  footerLeft: 'PRIVATE CONSTELLATION // S01',
  footerRight: '5 FOIL CARDS',
  microSpec: 'ASTRAL EDITION · HOLO OR HIGHER',
  backHeadline: '270 Archival Slots\nOne Private Constellation',
  backSpec: 'VESPER ARCHIVE · EDITION 2026 · LOT 01',
};

export const PACK_THEMES = [
  { name: 'MIDNIGHT', code: 'MID-01', color: '#22346b', highlight: '#a6bdff', shadow: '#070c20' },
  { name: 'AMETHYST', code: 'AMT-02', color: '#5b3287', highlight: '#d7b3ff', shadow: '#1a0a2b' },
  { name: 'EMBER', code: 'EMB-03', color: '#923a31', highlight: '#ffba83', shadow: '#2a0907' },
  { name: 'MOSS', code: 'MOS-04', color: '#2d5e4b', highlight: '#a8e5c3', shadow: '#091a14' },
  { name: 'ROSE', code: 'ROS-05', color: '#863c59', highlight: '#ffb2cd', shadow: '#2a0b17' },
  { name: 'OBSIDIAN', code: 'OBS-06', color: '#202536', highlight: '#d9c082', shadow: '#06070b' },
];

export const RARITY_META = {
  common: { rank: 1, aura: 'rgba(180, 195, 220, 0.0)', shockColor: '#ffffff', autoFlip: true },
  rare: { rank: 2, aura: '#b49bff', shockColor: '#c3b2ff', autoFlip: false },
  holo: { rank: 3, aura: '#57e3f2', shockColor: '#7df4ff', autoFlip: false },
  ultra: { rank: 4, aura: '#f3c763', shockColor: '#ffdc82', autoFlip: false },
  secret: { rank: 5, aura: '#f59adf', shockColor: '#ffb6ee', autoFlip: false },
};

export const MASCOT_CONFIG = {
  image: 'assets/characters/mascot.png',
  eyeLeft: { x: 37.5, y: 45.5, size: 7.4 },
  eyeRight: { x: 54.5, y: 44.5, size: 7.4 },
  mouth: { x: 46.2, y: 52.5, width: 7.2 },
  sweat: { x: 63.0, y: 34.0, width: 6.2 },
};

export const CARD_POOL = [
  {
    id: 'mochi',
    name: 'Mochi',
    tag: '团火',
    trait: '初生暖焰 · Ember Puff',
    serial: '001/270',
    rarity: 'common',
    rarityMark: '◆',
    rarityLabel: 'COMMON',
    frameBg: 'linear-gradient(155deg, #e8d8ce 0%, #cfb4a4 48%, #9e7e6e 100%)',
    plaqueBg: 'linear-gradient(180deg, rgba(252, 246, 242, 0.94), rgba(238, 225, 216, 0.96))',
    edgeColor: '#8c6d5e',
    textColor: '#231712',
    windowBg:
      'radial-gradient(85% 65% at 50% 26%, rgba(255, 244, 224, 0.9) 0%, rgba(255, 179, 138, 0.55) 44%, transparent 76%), ' +
      'radial-gradient(90% 70% at 50% 88%, #6e2b23 0%, transparent 72%), ' +
      'linear-gradient(170deg, #ff9d76 0%, #d95b49 56%, #4a1c1d 100%)',
    character: {
      image: 'assets/characters/mochi.png',
      rigged: true,
      eyeLeft: { x: 35.5, y: 49.0, size: 8.6 },
      eyeRight: { x: 55.5, y: 49.0, size: 8.6 },
      mouth: { x: 46.2, y: 58.0, width: 8.2 },
    },
  },
  {
    id: 'voxel',
    name: 'Voxel',
    tag: '方砾',
    trait: '晶格构筑 · Jade Tessera',
    serial: '002/270',
    rarity: 'common',
    rarityMark: '◆',
    rarityLabel: 'COMMON',
    frameBg: 'linear-gradient(155deg, #d7e4dc 0%, #a9c2b5 48%, #6f8c7e 100%)',
    plaqueBg: 'linear-gradient(180deg, rgba(244, 250, 246, 0.94), rgba(223, 236, 228, 0.96))',
    edgeColor: '#5c786a',
    textColor: '#13221b',
    windowBg:
      'radial-gradient(75% 60% at 50% 30%, rgba(150, 255, 214, 0.45) 0%, transparent 68%), ' +
      'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.08) 50%, rgba(255, 255, 255, 0.08) 75%, transparent 75%) 0 0 / 28px 28px, ' +
      'linear-gradient(175deg, #1b7a64 0%, #0d473b 62%, #06211c 100%)',
    character: {
      image: 'assets/characters/voxel.png',
      rigged: true,
      eyeLeft: { x: 40.5, y: 46.5, size: 8.2 },
      eyeRight: { x: 58.5, y: 45.0, size: 8.2 },
      mouth: { x: 50.0, y: 54.8, width: 7.6 },
    },
  },
  {
    id: 'sprout',
    name: 'Sprout',
    tag: '新芽',
    trait: '晨露初生 · Canopy Dew',
    serial: '003/270',
    rarity: 'common',
    rarityMark: '◆',
    rarityLabel: 'COMMON',
    frameBg: 'linear-gradient(155deg, #dcebd9 0%, #b1cfa9 48%, #76996f 100%)',
    plaqueBg: 'linear-gradient(180deg, rgba(245, 251, 243, 0.94), rgba(226, 239, 222, 0.96))',
    edgeColor: '#63855d',
    textColor: '#142416',
    windowBg:
      'radial-gradient(80% 55% at 50% 22%, rgba(226, 255, 189, 0.78) 0%, rgba(114, 214, 134, 0.32) 52%, transparent 78%), ' +
      'radial-gradient(100% 60% at 50% 100%, #0c331e 0%, transparent 70%), ' +
      'linear-gradient(175deg, #5ec279 0%, #267847 58%, #0f3b22 100%)',
    character: {
      image: 'assets/characters/sprout.png',
      rigged: true,
      eyeLeft: { x: 38.0, y: 52.0, size: 8.0 },
      eyeRight: { x: 55.0, y: 52.0, size: 8.0 },
      mouth: { x: 47.0, y: 60.5, width: 7.4 },
    },
  },
  {
    id: 'cloudy',
    name: 'Nimbus',
    tag: '云屿',
    trait: '高空流云 · Stratosphere',
    serial: '004/270',
    rarity: 'common',
    rarityMark: '◆',
    rarityLabel: 'COMMON',
    frameBg: 'linear-gradient(155deg, #dde7f2 0%, #b3c7de 48%, #7891ad 100%)',
    plaqueBg: 'linear-gradient(180deg, rgba(245, 249, 254, 0.94), rgba(225, 234, 245, 0.96))',
    edgeColor: '#647d99',
    textColor: '#14202e',
    windowBg:
      'radial-gradient(90% 60% at 50% 20%, rgba(255, 255, 255, 0.88) 0%, rgba(173, 219, 255, 0.42) 48%, transparent 78%), ' +
      'linear-gradient(175deg, #6bb5ff 0%, #3778c2 58%, #18365e 100%)',
    character: {
      image: 'assets/characters/cloudy.png',
      rigged: true,
      eyeLeft: { x: 37.5, y: 50.5, size: 7.8 },
      eyeRight: { x: 54.5, y: 50.5, size: 7.8 },
      mouth: { x: 46.5, y: 58.5, width: 7.2 },
    },
  },
  {
    id: 'lumen',
    name: 'Lumen',
    tag: '烛守',
    trait: '守夜微光 · Lantern Wisp',
    serial: '005/270',
    rarity: 'common',
    rarityMark: '◆',
    rarityLabel: 'COMMON',
    frameBg: 'linear-gradient(155deg, #f1e6cf 0%, #d3b78d 48%, #9b7447 100%)',
    plaqueBg: 'linear-gradient(180deg, rgba(253, 247, 235, 0.94), rgba(235, 220, 197, 0.96))',
    edgeColor: '#7d5a33',
    textColor: '#2a1d0d',
    windowBg:
      'radial-gradient(80% 62% at 50% 34%, rgba(255, 225, 160, 0.9) 0%, rgba(255, 159, 80, 0.38) 48%, transparent 78%), ' +
      'radial-gradient(100% 70% at 50% 100%, #0d2b30 0%, transparent 72%), ' +
      'linear-gradient(175deg, #245a57 0%, #11383a 58%, #071719 100%)',
    character: {
      image: 'assets/characters/lumen.png',
      rigged: true,
      eyeLeft: { x: 39.0, y: 48.5, size: 7.2 },
      eyeRight: { x: 55.0, y: 48.5, size: 7.2 },
      mouth: { x: 45.8, y: 56.5, width: 6.6 },
    },
  },
  {
    id: 'mori',
    name: 'Mori',
    tag: '森眠',
    trait: '月下蕈语 · Moonlit Spore',
    serial: '006/270',
    rarity: 'common',
    rarityMark: '◆',
    rarityLabel: 'COMMON',
    frameBg: 'linear-gradient(155deg, #e4e6d4 0%, #bcc4a6 48%, #7b8769 100%)',
    plaqueBg: 'linear-gradient(180deg, rgba(247, 247, 238, 0.94), rgba(228, 232, 215, 0.96))',
    edgeColor: '#5e6a50',
    textColor: '#1d2618',
    windowBg:
      'radial-gradient(75% 55% at 50% 22%, rgba(232, 255, 210, 0.68) 0%, rgba(137, 178, 110, 0.24) 52%, transparent 76%), ' +
      'radial-gradient(95% 60% at 50% 100%, #16271a 0%, transparent 72%), ' +
      'linear-gradient(175deg, #486747 0%, #263d29 56%, #0d1a11 100%)',
    character: {
      image: 'assets/characters/mori.png',
      rigged: true,
      eyeLeft: { x: 41.0, y: 47.0, size: 7.4 },
      eyeRight: { x: 57.0, y: 47.0, size: 7.4 },
      mouth: { x: 47.8, y: 54.8, width: 7.0 },
    },
  },
  {
    id: 'blaze',
    name: 'Ember',
    tag: '熔核',
    trait: '熔核炽羽 · Magma Core',
    serial: '007/270',
    rarity: 'rare',
    rarityMark: '◆◆',
    rarityLabel: 'RARE',
    frameBg: 'linear-gradient(155deg, #59202b 0%, #2e0f17 50%, #17070c 100%)',
    plaqueBg: 'linear-gradient(180deg, rgba(40, 14, 21, 0.93), rgba(24, 8, 13, 0.96))',
    edgeColor: '#1f080e',
    textColor: '#fff0f2',
    windowBg:
      'radial-gradient(70% 58% at 50% 54%, rgba(255, 198, 92, 0.88) 0%, rgba(235, 68, 62, 0.62) 45%, transparent 76%), ' +
      'radial-gradient(90% 50% at 50% 10%, rgba(255, 110, 74, 0.35), transparent 70%), ' +
      'linear-gradient(175deg, #5c1020 0%, #2e0712 62%, #120308 100%)',
    character: {
      image: 'assets/characters/blaze.png',
      rigged: true,
      eyeLeft: { x: 38.5, y: 53.5, size: 7.8 },
      eyeRight: { x: 54.5, y: 53.5, size: 7.8 },
      mouth: { x: 47.0, y: 61.5, width: 7.0 },
    },
  },
  {
    id: 'ripple',
    name: 'Tide',
    tag: '汐痕',
    trait: '深海潮汐 · Pelagic Pulse',
    serial: '008/270',
    rarity: 'rare',
    rarityMark: '◆◆',
    rarityLabel: 'RARE',
    frameBg: 'linear-gradient(155deg, #184459 0%, #0c2533 50%, #06131c 100%)',
    plaqueBg: 'linear-gradient(180deg, rgba(13, 35, 48, 0.93), rgba(7, 20, 29, 0.96))',
    edgeColor: '#071722',
    textColor: '#e8faff',
    windowBg:
      'radial-gradient(80% 50% at 50% 18%, rgba(120, 242, 255, 0.68) 0%, rgba(26, 150, 196, 0.36) 48%, transparent 78%), ' +
      'radial-gradient(65% 55% at 50% 68%, rgba(56, 214, 235, 0.28), transparent 72%), ' +
      'linear-gradient(175deg, #0d5d7a 0%, #072f45 58%, #03131f 100%)',
    character: {
      image: 'assets/characters/ripple.png',
      rigged: true,
      eyeLeft: { x: 39.5, y: 47.5, size: 7.4 },
      eyeRight: { x: 53.5, y: 47.5, size: 7.4 },
      mouth: { x: 46.8, y: 55.2, width: 6.8 },
    },
  },
  {
    id: 'amethyst',
    name: 'Facet',
    tag: '晶语',
    trait: '紫晶折射 · Geode Prism',
    serial: '009/270',
    rarity: 'rare',
    rarityMark: '◆◆',
    rarityLabel: 'RARE',
    frameBg: 'linear-gradient(155deg, #372975 0%, #1b1440 50%, #0e0a24 100%)',
    plaqueBg: 'linear-gradient(180deg, rgba(27, 20, 58, 0.93), rgba(15, 11, 34, 0.96))',
    edgeColor: '#110c2b',
    textColor: '#f2efff',
    windowBg:
      'linear-gradient(125deg, rgba(255, 255, 255, 0.14) 0%, transparent 32%, rgba(176, 138, 255, 0.18) 54%, transparent 78%), ' +
      'radial-gradient(70% 60% at 50% 42%, rgba(168, 130, 255, 0.78) 0%, rgba(76, 42, 176, 0.48) 52%, transparent 80%), ' +
      'linear-gradient(175deg, #2d1b70 0%, #170d42 62%, #09051f 100%)',
    character: {
      image: 'assets/characters/amethyst.png',
      rigged: true,
      eyeLeft: { x: 38.5, y: 47.0, size: 8.2 },
      eyeRight: { x: 56.5, y: 46.0, size: 8.2 },
      mouth: { x: 48.0, y: 55.5, width: 7.4 },
    },
  },
  {
    id: 'kite',
    name: 'Kite',
    tag: '逐星',
    trait: '逐星纸鸢 · Comet Kite',
    serial: '010/270',
    rarity: 'rare',
    rarityMark: '◆◆',
    rarityLabel: 'RARE',
    frameBg: 'linear-gradient(155deg, #1b3a5b 0%, #0f233c 50%, #070f1c 100%)',
    plaqueBg: 'linear-gradient(180deg, rgba(12, 28, 46, 0.93), rgba(6, 17, 30, 0.96))',
    edgeColor: '#07111f',
    textColor: '#e9f8ff',
    windowBg:
      'radial-gradient(80% 55% at 50% 20%, rgba(138, 239, 255, 0.55) 0%, rgba(77, 176, 214, 0.24) 48%, transparent 76%), ' +
      'radial-gradient(90% 60% at 50% 100%, #04101f 0%, transparent 72%), ' +
      'linear-gradient(175deg, #155d7a 0%, #0b3150 58%, #041323 100%)',
    character: {
      image: 'assets/characters/kite.png',
      rigged: true,
      eyeLeft: { x: 41.0, y: 46.5, size: 7.6 },
      eyeRight: { x: 57.0, y: 46.5, size: 7.6 },
      mouth: { x: 48.2, y: 54.6, width: 6.9 },
    },
  },
  {
    id: 'lune',
    name: 'Lune',
    tag: '弦月',
    trait: '弦月低语 · Silver Crescent',
    serial: '011/270',
    rarity: 'rare',
    rarityMark: '◆◆',
    rarityLabel: 'RARE',
    frameBg: 'linear-gradient(135deg, #fafbfe 0%, #d7deea 30%, #ffffff 52%, #c2cbdc 76%, #eef1f8 100%)',
    plaqueBg: 'linear-gradient(180deg, rgba(249, 251, 255, 0.94), rgba(232, 238, 248, 0.96))',
    edgeColor: '#8793a6',
    textColor: '#161d2a',
    windowBg:
      'radial-gradient(52% 52% at 66% 36%, rgba(234, 244, 255, 0.94) 0%, rgba(147, 180, 224, 0.3) 48%, transparent 78%), ' +
      'radial-gradient(85% 70% at 30% 90%, #0a1734 0%, transparent 70%), ' +
      'linear-gradient(170deg, #1a2b50 0%, #0c1732 58%, #050a18 100%)',
    character: {
      image: 'assets/characters/lune.png',
      rigged: false,
    },
  },
  {
    id: 'saturn',
    name: 'Orbit',
    tag: '星环',
    trait: '星环巡游 · Celestial Ring',
    serial: '012/270',
    rarity: 'holo',
    rarityMark: '◆◆◆',
    rarityLabel: 'HOLO RARE',
    frameBg: 'linear-gradient(155deg, #2b3f8c 0%, #152052 48%, #0b102e 100%)',
    plaqueBg: 'linear-gradient(180deg, rgba(18, 28, 68, 0.93), rgba(10, 16, 42, 0.96))',
    edgeColor: '#0c1336',
    textColor: '#edf3ff',
    windowBg:
      'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0 1px, transparent 1.6px) 0 0 / 32px 32px, ' +
      'radial-gradient(circle, rgba(168, 212, 255, 0.65) 0 0.9px, transparent 1.5px) 15px 11px / 23px 23px, ' +
      'radial-gradient(75% 58% at 50% 46%, rgba(88, 148, 255, 0.62) 0%, rgba(38, 68, 184, 0.35) 54%, transparent 82%), ' +
      'linear-gradient(170deg, #0b133b 0%, #162b78 55%, #070b24 100%)',
    character: {
      image: 'assets/characters/saturn.png',
      rigged: true,
      eyeLeft: { x: 39.0, y: 49.5, size: 7.4 },
      eyeRight: { x: 54.0, y: 48.5, size: 7.4 },
      mouth: { x: 46.8, y: 56.8, width: 6.8 },
    },
  },
  {
    id: 'nebula',
    name: 'Vortex',
    tag: '涡心',
    trait: '星云坍缩 · Event Horizon',
    serial: '013/270',
    rarity: 'holo',
    rarityMark: '◆◆◆',
    rarityLabel: 'HOLO RARE',
    frameBg: 'linear-gradient(155deg, #54206e 0%, #260d38 50%, #12051c 100%)',
    plaqueBg: 'linear-gradient(180deg, rgba(36, 13, 52, 0.93), rgba(19, 6, 29, 0.96))',
    edgeColor: '#160624',
    textColor: '#fcedff',
    windowBg:
      'radial-gradient(circle, rgba(255, 230, 255, 0.78) 0 1px, transparent 1.6px) 6px 8px / 28px 28px, ' +
      'radial-gradient(70% 58% at 50% 46%, rgba(255, 102, 224, 0.75) 0%, rgba(118, 34, 196, 0.5) 48%, transparent 82%), ' +
      'linear-gradient(170deg, #24083d 0%, #4d136e 52%, #11041f 100%)',
    character: {
      image: 'assets/characters/nebula.png',
      rigged: true,
      eyeLeft: { x: 41.5, y: 46.5, size: 6.8 },
      eyeRight: { x: 53.0, y: 46.5, size: 6.8 },
      mouth: { x: 47.5, y: 53.8, width: 6.2 },
    },
  },
  {
    id: 'echo',
    name: 'Echo',
    tag: '回响',
    trait: '深空回响 · Orbital Echo',
    serial: '014/270',
    rarity: 'holo',
    rarityMark: '◆◆◆',
    rarityLabel: 'HOLO RARE',
    frameBg: 'linear-gradient(155deg, #164a47 0%, #0a2d2f 50%, #041719 100%)',
    plaqueBg: 'linear-gradient(180deg, rgba(9, 37, 36, 0.93), rgba(4, 22, 22, 0.96))',
    edgeColor: '#041c1b',
    textColor: '#e8fffb',
    windowBg:
      'radial-gradient(60% 55% at 50% 45%, rgba(144, 255, 234, 0.5) 0%, rgba(47, 184, 164, 0.2) 52%, transparent 75%), ' +
      'repeating-linear-gradient(125deg, rgba(122, 255, 226, 0.1) 0 1px, transparent 1px 15px), ' +
      'linear-gradient(175deg, #0a4e4a 0%, #06312f 58%, #021514 100%)',
    character: {
      image: 'assets/characters/echo.png',
      rigged: false,
    },
  },
  {
    id: 'inkblade',
    name: '水墨丹青',
    tag: '至臻',
    fullName: '至臻 水墨丹青 极境行沙洲 不朽永恩',
    trait: '极境行沙洲 · 不朽永恩',
    serial: '015/270',
    rarity: 'ultra',
    rarityMark: '★★★',
    rarityLabel: 'ULTRA RARE',
    artwork: 'assets/custom/inkblade.jpg',
    artworkAlt: '水墨丹青双人封面',
    artworkPosition: '50% 45%',
    frameBg: 'linear-gradient(135deg, #f4ecdb 0%, #d6c09a 26%, #fffaf0 50%, #b89a63 76%, #e4d3b0 100%)',
    plaqueBg: 'linear-gradient(180deg, rgba(252, 248, 238, 0.95), rgba(235, 224, 205, 0.97))',
    edgeColor: '#8b7245',
    textColor: '#231d13',
    windowBg: 'linear-gradient(160deg, #15394a 0%, #0a1622 50%, #2e2417 100%)',
  },
  {
    id: 'helios',
    name: 'Helios',
    tag: '日冕',
    trait: '曜金日冕 · Sovereign Corona',
    serial: '016/270',
    rarity: 'ultra',
    rarityMark: '★★★',
    rarityLabel: 'ULTRA RARE',
    frameBg: 'linear-gradient(135deg, #fff0ba 0%, #d9a136 28%, #fff7d6 50%, #bd821c 74%, #f5d67f 100%)',
    plaqueBg: 'linear-gradient(180deg, rgba(255, 249, 232, 0.94), rgba(244, 228, 188, 0.97))',
    edgeColor: '#8c5e14',
    textColor: '#2e1c00',
    windowBg:
      'radial-gradient(66% 56% at 50% 46%, rgba(255, 248, 196, 0.96) 0%, rgba(255, 166, 58, 0.72) 42%, rgba(194, 58, 48, 0.48) 74%, transparent 95%), ' +
      'linear-gradient(165deg, #6e2219 0%, #b8531e 48%, #36100d 100%)',
    character: {
      image: 'assets/characters/helios.png',
      rigged: true,
      eyeLeft: { x: 38.5, y: 47.5, size: 7.6 },
      eyeRight: { x: 55.0, y: 47.0, size: 7.6 },
      mouth: { x: 47.0, y: 55.5, width: 7.2 },
    },
  },
  {
    id: 'perfume',
    name: '香水宝石',
    tag: '至臻',
    fullName: '至臻 香水宝石 四叶雾歌 不朽格温',
    trait: '四叶雾歌 · 不朽格温',
    serial: '017/270',
    rarity: 'secret',
    rarityMark: '✦✦✦',
    rarityLabel: 'SECRET RARE',
    artwork: 'assets/custom/perfume.jpg',
    artworkAlt: '香水宝石双人封面',
    artworkPosition: '50% 42%',
    frameBg: 'linear-gradient(135deg, #171222 0%, #3b2a50 26%, #0e0b16 50%, #45365f 74%, #1b1425 100%)',
    plaqueBg: 'linear-gradient(180deg, rgba(24, 19, 33, 0.94), rgba(13, 10, 19, 0.97))',
    edgeColor: '#ceb26c',
    textColor: '#fff4e8',
    windowBg: 'linear-gradient(165deg, #1a1230 0%, #2c1a44 52%, #08060f 100%)',
  },
  {
    id: 'vesper',
    name: 'Vesper',
    tag: '长庚',
    trait: '长庚启明 · Evening Star',
    serial: '018/270',
    rarity: 'secret',
    rarityMark: '✦✦✦',
    rarityLabel: 'SECRET RARE',
    frameBg: 'linear-gradient(135deg, #17131f 0%, #3d2c43 26%, #0e0b14 50%, #4a3922 74%, #1b1520 100%)',
    plaqueBg: 'linear-gradient(180deg, rgba(24, 20, 30, 0.94), rgba(13, 10, 18, 0.97))',
    edgeColor: '#cfad64',
    textColor: '#fff4d8',
    windowBg:
      'radial-gradient(circle, rgba(255, 235, 175, 0.8) 0 1px, transparent 1.7px) 4px 7px / 26px 26px, ' +
      'radial-gradient(64% 56% at 50% 46%, rgba(255, 224, 158, 0.5) 0%, rgba(208, 104, 255, 0.38) 44%, rgba(55, 198, 224, 0.25) 72%, transparent 92%), ' +
      'linear-gradient(165deg, #0d0b16 0%, #241a34 52%, #090811 100%)',
    character: {
      image: 'assets/characters/vesper.png',
      rigged: false,
    },
  },
  ...GOLDEN_SPATULA_CARDS,
  ...HONOR_OF_KINGS_CARDS,
];

