## Shared Utils

> 业务项目当中剥离出来的通用的函数, 用来跨项目复用. 兼容老项目运行为主(样式部分建议直接用 [flex-styles](https://github.com/jimengio/flex-styles)).

### Usage

![](https://img.shields.io/npm/v/@jimengio/shared-utils.svg?style=flat-square)

```bash
yarn add @jimengio/shared-utils
```

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

String functions:

```js
fuzzyFoundText;
foundText;
```

> Layout styles:

> Flexbox related styles has been moved to the package [flex-styles](https://github.com/jimengio/flex-styles).

### License

MIT
