# imageMainTone

## Introduction

Getting main tone of a image.
Visit [imageMainTone demo](https://NieLamu.github.io/imageMainTone/demo/) for preview, which using main tone of a picture as background and `theme-color` meta.

## Node Usage

### Basic usage

1.install dependencies using npm or yarn

```javascript
npm install imageMainTone
yarn add imageMainTone
```

2.for example:

```javascript
const imageMainTone = require('imageMainTone');
imageMainTone('https://picsum.photos/1024/?random').then(rgba => {
    console.log(rgba)
})
```

### APIs

#### imageMainTone(image[, filterWhite])

Getting main tone of a image.

parameters:

  - [image] {Image | String} image instance or url of image
  - [filterWhite] {Boolean} whether to filter the color similar to white, default is true

Success will return color object, containing blow properties:
  - r {Number} R value of the main tone
  - g {Number} G value of the main tone
  - b {Number} B value of the main tone
  - a {Number} A value of the main tone

## Contribution Guide

### Install dependencies

```bash
yarn
```

### Compiles and hot-reloads for development

```bash
yarn run serve
```

### Compiles and minifies for production

```bash
yarn run build
```

### Run your tests

```bash
yarn run test
```

### Lints and fixes files

```bash
yarn run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## [Contributors](https://github.com/NieLamu/imageMainTone/graphs/contributors)

## [Change Log](./CHANGELOG.md)

## [TODO](./TODO.md)