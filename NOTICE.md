# NOTICE

**VESPER · 长庚秘藏** is a customized derivative work of
[PRISM · 典藏全息拆包互动台](https://github.com/Lone3m-tech/prism-holo-pack)
by SimpleMkt, used under the MIT License reproduced in `LICENSE`.

## Included from the original project

- The native Web interaction engine and tactile pack-tearing implementation.
- Holographic card layering, SVG card backs, and Web Audio synthesis.
- The original 12 procedurally generated character sprites.
- The MIT-licensed SDF character renderer, extended here with six new character recipes.

## Custom work in this edition

- VESPER brand identity, Chinese/English copy, and private-archive framing.
- Redesigned stage, header, control console, collection binder, rarity filters,
  responsive layouts, and accessibility/focus behavior.
- Six new cards: Lumen, Mori, Kite, Lune, Echo, and Vesper, including their
  procedural 3D portraits and print treatments.
- Two user-commissioned sample cards, **水墨丹青** and **香水宝石**, using
  cover art supplied by the client.
- Adaptive performance mode, particle budgeting, resize throttling, and shorter
  opening sequence.
- The entire `src/theme.css` interface layer.

## Brand assets

No files from the original `assets/brand/` directory are included. The
SimpleMkt wordmarks and architectural stage photography are proprietary brand
assets and should not be reused. All VESPER visual identity in this repository
is original to this customization.

## Generated art

All character portraits under `assets/characters/` are generated locally by
`scripts/generate-assets.mjs`. They contain no third-party photographic,
illustrative, or font assets.

## Client-provided sample covers

`assets/custom/inkblade.jpg` and `assets/custom/perfume.jpg` were supplied by the
client for sample-card evaluation. They are not authored by this project and are
**not** covered by the MIT license. Confirm the appropriate rights before making
the site public. Replace them with licensed artwork if needed.

## Simulated top-up and virtual stars

The star wallet (`vesper-stars-v1`), daily sign-in, recharge tiers, first-recharge
bonus, and local "experience top-up" buttons are a **local-only simulation**.
There is no payment provider, checkout, WeChat/QQ/Alipay/bank integration, or
real-money flow anywhere in this repository. Prices such as `¥6`, `¥30`, and
`¥648` are visual references to common Tencent game voucher tiers and do not
represent a real charge.

The currency has no cash value, is stored only in the visitor's browser
`localStorage`, and is not affiliated with or endorsed by Tencent or Riot Games.

## Golden Spatula / Teamfight Tactics sample covers

`assets/golden-spatula/` contains 82 sample covers and the card metadata under
`src/golden-spatula-cards.js`. The character, arena, and board artwork is the
property of Riot Games / Tencent and was collected from public promotional
material, the official Tencent event pages, and the PHAROS League wiki:

- <https://pharos.wiki/lol/zh-CN/cosmetics/little-legends>
- <https://lol.qq.com/act/a20241121checkerboard/index.html>
- <https://news.17173.com/content/08212024/151505151.shtml>
- <https://www.vgover.com/news/237663>

These files are included for a personal, non-commercial fan showcase only. They
are **not** covered by the MIT license. Do not sell, license, or redistribute
them commercially. If you are a rights holder and want a cover removed, open an
issue in the repository and it will be replaced.

The original VESPER brand, original 18 procedural characters, interface, and
code remain independent of these third-party sample assets.

## Honor of Kings sample covers

`assets/honor-of-kings/` contains 170 Honor of Kings skin covers and the card
metadata under `src/honor-of-kings-cards.js`. The character and skin artwork is
the property of Tencent / TiMi Studio Group and was collected from official
hero skin pages, the official skin showcase, and public promotional material.

The set covers all 20 Glory Collection skins, the Precious Unparalleled skin,
14 Unparalleled skins, 12 Precious Legend skins, plus 23 Legend, 50 Epic, and
50 Brave sample skins. These files are included for a personal, non-commercial
fan showcase only and are **not** covered by the MIT license. Do not sell,
license, or redistribute them commercially. Rights holders may open an issue to
request replacement of any cover.

See `assets/honor-of-kings/sources.json` for per-card source records.


