## Shared Utils

> 业务项目当中剥离出来的通用的函数, 用来跨项目复用. 兼容老项目运行为主.

```bash
yarn add @jimengio/shared-utils
```

### Usage

Immer helper functions:

```js
immerHelpers.immerState;
immerHelpers.mergeState;
```

Detecting functions:

```js
interpose;
some;
isFunction;
isNil;
hasItems;
isListEmpty;
isAnEmptyList;
immerMerge;
```

Layout styles:

```js
// layout styles

center;
column;
columnParted;
expand;
flex; // alias for expand, same
fullscreen;
noShrink;
row;
rowCenter;
rowMiddle;
rowParted;

// preset styles

absCenter;
absLeftCenter;
absRightCenter;
absRightTop;
alignItemBottom;
alignItemCenter;
displayFlex;
flexWrap;
fullHeight;
inlineBlock;
inlineRow;
inlineRowMiddle;
maxHeight80vh;
middleSection;
minHeight;
relative;
verticalAlignBottom;
xHiddenYAuto;
```

String functions:

```js
fuzzyFoundText;
foundText;
```
