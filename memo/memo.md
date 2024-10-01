# 長体・平体

　文字の縦横比を変更した書体。

　今回はこれを書字方向に応じて縮小・拡大するクラスを作りたい。

　`inline`方向が縮小される／`inline`方向に伸長される

```
Ratext.run()

<p class="ratext-small-5">
<p class="ratext-small-4">
<p class="ratext-small-2">
<p class="ratext-big-5">
<p class="ratext-big-4">
<p class="ratext-big-2">

<p class="ratext-down-5">
<p class="ratext-down-4">
<p class="ratext-down-2">
<p class="ratext-up-5">
<p class="ratext-up-4">
<p class="ratext-up-2">


<p class="R-5">
<p class="R-4">
<p class="R-2">
<p class="R+5">
<p class="R+4">
<p class="R+2">
```

# タイポグラフィ Typography

* 長体／平体（縦／横に長い字。1-(1/[5,4,3,2])(20%,25%,33.3%,50%)）
	* 上下ルビ領域(0.5em)を使用した長体(伸体)
	* 上下ルビ領域(0.5em)を使用して縮体1/2を縦横2〜3字ずつ2行（合体）
	* 縮体1/2を縦横2〜3字ずつ2行（合体）＋両面ルビ
* 縦書き／横書き
	* 縦書き時の英数字における角度
	* 縦中横
* ルビ
	* 位置変え（`ruby-position`）
	* 両面ルビ
	* 縦書き時ルビの代わりに縦中横増設（半角(長体1/2)1字分）

```css
direction: ltr; /* rtl */
writing-mode: horizontal-tb; /* vertical-[rl,lr], sideways-[rl-lr] */
text-orientation: mixed; /* upright, sideways */
text-combine-upright: all; /* 縦中横 none, digits 2〜4(未実装) */
```
```css
transform: scaleX(0.8);
transform: scaleY(0.8);
transform-origin: top left;
width: 100%;
height: 100%;
inline-size: 100%;
block-size: 100%;
white-space: nowrap;
```
```html
<ruby>漢字<rt>かんじ</rt></ruby>
```
```css
ruby-position: over; /* under */
```

# タイポグラフィ Typography

　JSで文字のサイズ・比・配置を変える。

<!-- more -->

# 要件

* 長体／平体（縦／横に長い字。1-(1/[5,4,3,2])(20%,25%,33.3%,50%)）
	* 上下ルビ領域(0.5em)を使用した長体(伸体)
	* 上下ルビ領域(0.5em)を使用して縮体1/2を縦横2〜3字ずつ2行（合体）
	* 縮体1/2を縦横2〜3字ずつ2行（合体）＋両面ルビ
* 縦書き／横書き
	* 縦書き時の英数字における角度
	* 縦中横
* ルビ
	* 位置変え（`ruby-position`）
	* 両面ルビ
	* 縦書き時ルビの代わりに縦中横増設（半角(長体1/2)1字分）

```css
direction: ltr; /* rtl */
writing-mode: horizontal-tb; /* vertical-[rl,lr], sideways-[rl-lr] */
text-orientation: mixed; /* upright, sideways */
text-combine-upright: all; /* 縦中横 none, digits 2〜4(未実装) */
```
```css
line-height: 1.7em;
letter-spacing: 0.05em;
```
```css
font-family: :
font-size: ;
font-weight: normal; /* bold, lighter, bolder, 100〜900(100刻み) */
font-style: normal; /* italic, oblique */
font-face: ;
font-stretch: ; /* normal, condensed, expanded, 50%, ... */
font-variant: ; /*  */
font-variant-alternates: ; /* 代替書体 */
font-variant-caps: ; /*  */
font-variant-east-asian: ; /*  */
font-variant-ligatures: ; /*  */
font-variant-numeric: ; /*  */
@font-feature-values
@font-face
font-feature-settings: "palt";
```
```css
transform: scaleX(0.8);
transform: scaleY(0.8);
transform-origin: top left;
width: 100%;
height: 100%;
inline-size: 100%;
block-size: 100%;
white-space: nowrap;
```
```html
<ruby>漢字<rt>かんじ</rt></ruby>
```
```css
ruby-position: over; /* under */
```

# font-family

* https://ics.media/entry/200317/

　各OSに標準インストールされているフォントが異なる。

* Windows
* Mac
* Linux
* Android
* iOS

　OSによってはフォントをダウンロードしても設定できないものがあるとか。

```css
font-family: serif; /* 総称ファミリー名：serif,sans-serif,monospace,cursive,fantasy,system-ui,ui-serif,ui-sans-serif,ui-monospace,ui-rounded,emoji,math,fangsong */
```
```css
font-family: 'Noto Sans JP', sans-serif; /* ゴシック体 */
font-family: 'Noto Serif JP', serif; /* 明朝体 */
```
```
Noto [Sans/Serif] [JP/CJK JP/Japanese]
```

Noto系|weight数|言語
------|--------|----
`Noto ... JP`|6|日本
`Noto ... CJK JP`|7|中国、日本、韓国
`Noto ... Japanese`|7|日本

Noto系|意味
------|----
`Noto ... JP`|正式版
`Noto ... CJK JP`|
`Noto ... Japanese`|



総称|意味
----|----
`serif`|止め、払いがある
`sans-serif`|止め、払いがない
`monospace`|等幅
`cursive`|筆記体
`fantasy`|遊び心に溢れた装飾体
`system-ui`|OS既定フォント
`ui-serif`|UI既定セリフ付フォント
`ui-sans-serif`|UI既定セリフ無フォント
`ui-monospace`|UI既定等幅フォント
`ui-rounded`|UI既定角丸フォント
`math`|数式フォント
`fangsong`|中国特有フォント（セリフ風Songと手書き風Kaiの間）

'Noto Sans CJK JP', 


* https://note.com/sompo_sprint/n/n1b4878cc1479

```css
body {
  font-family: "Helvetica Neue",
    Arial,
    "Hiragino Kaku Gothic ProN",
    "Hiragino Sans",
    "BIZ UDPGothic",
    "Noto Serif CJK JP",
    Meiryo,
    sans-serif;
}
```
```css
body {
  font-family: "Helvetica Neue",
    Arial,
    "Hiragino Kaku Gothic ProN",
    "Hiragino Sans",
    "BIZ UDGothic",
    "Noto Sans JP",
    "Noto Sans Japanese",
    "Noto Sans CJK JP",
    Meiryo,
    sans-serif;
}
```
```css
body {
  font-family: "Helvetica Neue",
    Arial,
    "Hiragino Kaku Gothic ProN",
    "Hiragino Sans",
    "BIZ UDMincho",
    "Noto Serif JP",
    "Noto Serif Japanese",
    "Noto Serif CJK JP",
    Meiryo,
    sans-serif;
}
```
