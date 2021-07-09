# npm-package-info

Fetch npm package info via pacote.

## INSTALLATION

```sh
npm i pdehaan/npm-package-info
```

## USAGE

```js
const { getPackage } = require("npm-package-info");

getPackage("@11ty/eleventy")
  .then(pkg => console.log(pkg));
```

## LICENSE

MPL-2.0
