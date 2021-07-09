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

### OUTPUT

```text
{
  _cached: false,
  _contentLength: 0,
  _from: '@11ty/eleventy@',
  _hasShrinkwrap: false,
  _id: '@11ty/eleventy',
  _integrity: 'sha512-YGG1Vk0IPXsExSAwIyv6zccxxlaxXLb4PvO/G+SW66Dsz2l1ZSObJuukVTLc6iMpqZCS+LZQNXnaqG9PuRmy7w==',
  _nodeVersion: '14.15.4',
  _npmOperationalInternal: {
    host: 's3://npm-registry-packages',
    tmp: 'tmp/eleventy_0.12.1_1616183712959_0.4949740682485695'
  },
  _npmUser: { name: 'zachleat' },
  _npmVersion: '6.14.10',
  _resolved: 'https://registry.npmjs.org/@11ty/eleventy/-/eleventy-0.12.1.tgz',
  _rev: '92-722fc122ffd8ad6a540dfbce9b5b2794',
  author: {
    name: 'Zach Leatherman',
    url: 'https://zachleat.com/'
  },
  ava: {
    babel: true,
    failFast: false,
    files: [Array],
    ignoredByWatcher: [Array]
  },
  bin: { eleventy: 'cmd.js' },
  bugs: { url: 'https://github.com/11ty/eleventy/issues' },
  dependencies: {
    '@11ty/dependency-tree': '^1.0.0',
    'browser-sync': '^2.26.14',
    chalk: '^4.1.0',
    chokidar: '^3.5.1',
    debug: '^4.3.1',
    'dependency-graph': '^0.11.0',
    ejs: '^2.7.4',
    'fast-glob': '^3.2.5',
    'fs-extra': '^8.1.0',
    'gray-matter': '^4.0.2',
    hamljs: '^0.6.2',
    handlebars: '^4.7.7',
    'javascript-stringify': '^2.0.1',
    liquidjs: '^6.4.3',
    lodash: '^4.17.21',
    luxon: '^1.26.0',
    'markdown-it': '^10.0.0',
    minimist: '^1.2.5',
    moo: '^0.5.1',
    multimatch: '^4.0.0',
    mustache: '^2.3.2',
    'normalize-path': '^3.0.0',
    nunjucks: '^3.2.3',
    'parse-filepath': '^1.0.2',
    'please-upgrade-node': '^3.2.0',
    pretty: '^2.0.0',
    pug: '^3.0.2',
    'recursive-copy': '^2.0.11',
    semver: '^7.3.4',
    slugify: '^1.4.7',
    'time-require': '^0.1.2',
    'valid-url': '^1.0.9'
  },
  description: 'Transform a directory of templates into HTML.',
  devDependencies: {
    '@11ty/eleventy-plugin-syntaxhighlight': '^3.1.0',
    '@ava/babel': '^1.0.1',
    ava: '^3.15.0',
    husky: '^5.1.3',
    'ink-docstrap': '1.3.2',
    'js-yaml': '^4.0.0',
    jsdoc: '3.6.6',
    'lint-staged': '^10.5.4',
    'markdown-it-emoji': '^2.0.0',
    'node-sass': '^5.0.0',
    nyc: '^15.1.0',
    prettier: '^2.2.1',
    rimraf: '^3.0.2',
    toml: '^3.0.0',
    viperhtml: '^2.17.1',
    vue: '^2.6.12',
    'vue-server-renderer': '^2.6.12'
  },
  directories: {},
  dist: {
    fileCount: 71,
    integrity: 'sha512-YGG1Vk0IPXsExSAwIyv6zccxxlaxXLb4PvO/G+SW66Dsz2l1ZSObJuukVTLc6iMpqZCS+LZQNXnaqG9PuRmy7w==',
    'npm-signature': '-----BEGIN PGP SIGNATURE-----\r\n' +
      'Version: OpenPGP.js v3.0.13\r\n' +
      'Comment: https://openpgpjs.org\r\n' +
      '\r\n' +
      'wsFcBAEBCAAQBQJgVQGhCRA9TVsSAnZWagAAg+cQAJSF1YGU/8s6aDoYtq4h\n' +
      'vZ7aWl0k+ek9hTKBpIdBjMMe5lEVdUEjn16/BsatsU6JxBk5KXFKLgsNGfKg\n' +
      '+/pQR3E7CDcthod6ydf7IYMRTfXWh+WPW3jpXUNSQQuM89zkRVoK/3LBeHxq\n' +
      'TWXabP53kHi8K6kPI4nhy7p7eN9CboycjCxDxPRDtcFkcWu3da+2gThcrtbf\n' +
      'LRYy3GLTtaaD4hSQ91DzOaPaiewfNGFCIa/eJDM8UiUf/VdX09CpKlphE9ex\n' +
      'h1omeV+MNBIodH1LNBwpirBPNTq59OpB6h89ZGnVElajPkPE/ZT+RMwhDEU5\n' +
      '+0w9CWJnT83gU4ikY3uzpKsGYfARJi1rLFq4rtRroV+OyxRzSA7h8+jjeC0l\n' +
      '5wR1RthWbqw8iZoBVjw89n9EVOzOhfC4UzNFQ7nLaUVhL86Rv8LFZ8dfzhnh\n' +
      'XMg0xLhrCAB7TFl8iR362rlYFp2Hnq0QUB8UGBv+sDoB+KjdqcZSB8WZKRgq\n' +
      'nzO9b2EPdwj+51dh5waiSXpD/l8TTd+uW/r8VrZy97HY0KeN5/x73AatzJ1S\n' +
      '8F1lJerdpRT0yo86fz0VKwm05c4PtqQ7zZr4sKmV58CW8Yt+6O/KUxcTOu4S\n' +
      'O/4Nve0ke+Bh0Znio5/5qzd+xLpHUDUWDMOO5IyQ+eoMGBcbhsBh5YFQ+7mo\n' +
      '6ihb\r\n' +
      '=M1pf\r\n' +
      '-----END PGP SIGNATURE-----\r\n',
    shasum: 'a957985e783bb5eeb8c1a97e661c5252014b2fd3',
    tarball: 'https://registry.npmjs.org/@11ty/eleventy/-/eleventy-0.12.1.tgz',
    unpackedSize: 278525
  },
  'dist-tags': {
    beta: '0.11.0-beta.4',
    canary: '1.0.0-canary.38',
    latest: '0.12.1'
  },
  engines: { node: '>=10' },
  funding: { type: 'opencollective', url: 'https://opencollective.com/11ty' },
  gitHead: '5c840894ff031c1b22f4e9b2005d5294f0b9c6bb',
  homepage: 'https://www.11ty.dev/',
  keywords: [
    'static-site-generator', 'static-site',
    'ssg',                   'documentation',
    'website',               'jekyll',
    'blog',                  'templates',
    'generator',             'framework',
    'eleventy',              '11ty',
    'html',                  'markdown',
    'liquid',                'nunjucks',
    'pug',                   'handlebars',
    'mustache',              'ejs',
    'haml'
  ],
  license: 'MIT',
  'lint-staged': { '*.{js,css,md}': [Array] },
  main: 'src/Eleventy.js',
  maintainers: [ [Object] ],
  name: '@11ty/eleventy',
  publishConfig: { access: 'public' },
  readme: '',
  readmeFilename: '',
  repository: { type: 'git', url: 'git://github.com/11ty/eleventy.git' },
  scripts: {
    coverage: 'npx nyc ava && npx nyc report --reporter=json-summary && cp coverage/coverage-summary.json docs-src/_data/coverage.json && node cmd.js --config=docs-src/.eleventy.docs.js',
    default: 'npm run test',
    doc: 'jsdoc -c .jsdoc.conf.json -d ./api-docs -p ./package.json -R README.md -t ./node_modules/ink-docstrap/template -r src/*.js',
    'lint-staged': 'lint-staged',
    prepare: 'husky install',
    test: 'npx ava --verbose'
  },
  time: {
    '1.0.0-canary.38': '2021-06-24T03:26:13.824Z',
    '1.0.0-canary.37': '2021-06-18T19:11:19.218Z',
    '1.0.0-canary.36': '2021-06-16T14:28:25.199Z',
    '1.0.0-canary.35': '2021-06-15T21:30:22.107Z',
    '1.0.0-canary.34': '2021-06-15T15:13:49.760Z',
    '1.0.0-canary.33': '2021-06-14T15:39:32.736Z',
    '1.0.0-canary.32': '2021-06-11T18:23:35.283Z',
    '1.0.0-canary.31': '2021-06-11T01:22:42.078Z',
    '1.0.0-canary.30': '2021-06-10T15:09:51.507Z',
    '1.0.0-canary.29': '2021-06-09T14:15:29.247Z',
    '1.0.0-canary.28': '2021-06-09T14:05:32.293Z',
    '1.0.0-canary.27': '2021-06-09T13:03:47.370Z',
    '1.0.0-canary.26': '2021-06-09T12:57:47.018Z',
    '1.0.0-canary.25': '2021-06-09T12:46:00.363Z',
    '1.0.0-canary.24': '2021-06-09T12:33:19.133Z',
    '1.0.0-canary.23': '2021-05-20T21:41:10.802Z',
    '1.0.0-canary.22': '2021-05-17T22:23:52.519Z',
    '1.0.0-canary.21': '2021-05-14T19:24:46.389Z',
    '1.0.0-canary.20': '2021-05-04T17:57:36.229Z',
    '1.0.0-canary.19': '2021-05-04T15:26:59.536Z',
    '1.0.0-canary.18': '2021-05-03T23:01:25.144Z',
    '1.0.0-canary.17': '2021-05-03T22:18:54.649Z',
    '1.0.0-canary.16': '2021-04-27T15:20:11.002Z',
    '1.0.0-canary.15': '2021-04-15T22:55:53.528Z',
    '1.0.0-canary.14': '2021-04-12T02:10:51.794Z',
    '1.0.0-canary.13': '2021-04-10T18:55:42.057Z',
    '1.0.0-canary.12': '2021-04-09T22:09:45.575Z',
    '1.0.0-canary.11': '2021-04-09T21:15:05.917Z',
    '1.0.0-canary.10': '2021-02-22T22:12:44.574Z',
    '1.0.0-canary.9': '2021-02-21T21:31:15.311Z',
    '1.0.0-canary.8': '2021-02-20T20:54:41.674Z',
    '1.0.0-canary.7': '2021-02-20T03:46:49.976Z',
    '1.0.0-canary.6': '2021-02-17T23:53:23.390Z',
    '1.0.0-canary.5': '2021-02-17T20:48:24.927Z',
    '1.0.0-canary.4': '2021-02-17T18:21:05.587Z',
    '1.0.0-canary.3': '2021-02-17T17:00:39.022Z',
    '1.0.0-canary.2': '2021-02-10T18:39:27.523Z',
    '1.0.0-canary.1': '2021-02-10T18:24:58.219Z',
    '0.12.1': '2021-03-19T19:55:13.306Z',
    '0.12.0': '2021-03-19T19:24:27.860Z',
    '0.11.1': '2020-10-22T18:40:22.846Z',
    '0.11.0': '2020-05-10T19:09:07.178Z',
    '0.11.0-beta.4': '2020-04-29T18:54:46.351Z',
    '0.11.0-beta.3': '2020-03-27T21:35:42.871Z',
    '0.11.0-beta.2': '2020-03-20T18:19:43.300Z',
    '0.11.0-beta.1': '2020-02-20T16:52:00.675Z',
    '0.10.0': '2020-01-07T21:06:34.822Z',
    '0.10.0-beta.2': '2020-01-04T20:06:44.794Z',
    '0.10.0-beta.1': '2019-12-09T02:26:06.372Z',
    '0.9.0': '2019-08-27T13:11:39.630Z',
    '0.9.0-beta.3': '2019-08-22T02:13:12.860Z',
    '0.9.0-beta.2': '2019-08-17T17:57:35.467Z',
    '0.9.0-beta.1': '2019-07-26T22:45:38.873Z',
    '0.8.3': '2019-05-04T21:00:21.850Z',
    '0.8.2': '2019-04-09T03:26:34.866Z',
    '0.8.1': '2019-04-06T02:57:07.007Z',
    '0.8.0': '2019-04-04T22:28:34.796Z',
    '0.8.0-beta.1': '2019-03-29T02:09:54.004Z',
    '0.7.1': '2019-01-12T03:44:39.602Z',
    '0.7.0': '2019-01-11T03:09:17.595Z',
    '0.6.0': '2018-11-25T19:02:11.433Z',
    '0.5.4': '2018-09-28T14:22:35.965Z',
    '0.5.3': '2018-08-29T13:37:51.949Z',
    '0.5.2': '2018-08-15T13:11:07.958Z',
    '0.5.1': '2018-08-15T02:39:18.321Z',
    '0.5.0': '2018-07-05T13:47:35.883Z',
    '0.4.0': '2018-06-20T14:08:50.667Z',
    '0.3.6': '2018-06-07T14:00:58.406Z',
    '0.3.5': '2018-05-22T13:45:52.175Z',
    '0.3.4': '2018-05-11T05:16:15.275Z',
    '0.3.3': '2018-04-17T02:45:43.636Z',
    '0.3.2': '2018-04-17T02:40:47.800Z',
    '0.3.1': '2018-04-05T04:34:53.401Z',
    '0.3.0': '2018-03-26T13:55:13.986Z',
    '0.2.15': '2018-03-06T03:18:06.912Z',
    '0.2.14': '2018-02-16T14:58:53.247Z',
    '0.2.13': '2018-01-28T21:56:59.410Z',
    '0.2.12': '2018-01-28T05:20:29.700Z',
    '0.2.11': '2018-01-26T02:59:22.439Z',
    '0.2.10': '2018-01-25T14:24:55.330Z',
    '0.2.9': '2018-01-23T14:53:41.379Z',
    '0.2.8': '2018-01-23T05:04:32.902Z',
    '0.2.7': '2018-01-17T02:24:11.271Z',
    '0.2.6': '2018-01-12T05:35:57.105Z',
    '0.2.5': '2018-01-12T05:24:57.693Z',
    '0.2.4': '2018-01-10T14:48:57.918Z',
    '0.2.3': '2018-01-10T14:42:13.230Z',
    '0.2.2': '2018-01-09T14:51:49.929Z',
    '0.2.1': '2018-01-09T14:46:41.249Z',
    '0.2.0': '2018-01-09T14:36:27.855Z',
    created: '2018-01-09T14:36:27.855Z',
    modified: '2021-06-24T03:26:17.056Z'
  },
  users: { magnus: true, 'tg-z': true },
  version: '0.12.1',
  versions: {
    '1.0.0-canary.38': [Object],
    '1.0.0-canary.37': [Object],
    '1.0.0-canary.36': [Object],
    '1.0.0-canary.35': [Object],
    '1.0.0-canary.34': [Object],
    '1.0.0-canary.33': [Object],
    '1.0.0-canary.32': [Object],
    '1.0.0-canary.31': [Object],
    '1.0.0-canary.30': [Object],
    '1.0.0-canary.29': [Object],
    '1.0.0-canary.28': [Object],
    '1.0.0-canary.27': [Object],
    '1.0.0-canary.26': [Object],
    '1.0.0-canary.25': [Object],
    '1.0.0-canary.24': [Object],
    '1.0.0-canary.23': [Object],
    '1.0.0-canary.22': [Object],
    '1.0.0-canary.21': [Object],
    '1.0.0-canary.20': [Object],
    '1.0.0-canary.19': [Object],
    '1.0.0-canary.18': [Object],
    '1.0.0-canary.17': [Object],
    '1.0.0-canary.16': [Object],
    '1.0.0-canary.15': [Object],
    '1.0.0-canary.14': [Object],
    '1.0.0-canary.13': [Object],
    '1.0.0-canary.12': [Object],
    '1.0.0-canary.11': [Object],
    '1.0.0-canary.10': [Object],
    '1.0.0-canary.9': [Object],
    '1.0.0-canary.8': [Object],
    '1.0.0-canary.7': [Object],
    '1.0.0-canary.6': [Object],
    '1.0.0-canary.5': [Object],
    '1.0.0-canary.4': [Object],
    '1.0.0-canary.3': [Object],
    '1.0.0-canary.2': [Object],
    '1.0.0-canary.1': [Object],
    '0.12.1': [Object],
    '0.12.0': [Object],
    '0.11.1': [Object],
    '0.11.0': [Object],
    '0.11.0-beta.4': [Object],
    '0.11.0-beta.3': [Object],
    '0.11.0-beta.2': [Object],
    '0.11.0-beta.1': [Object],
    '0.10.0': [Object],
    '0.10.0-beta.2': [Object],
    '0.10.0-beta.1': [Object],
    '0.9.0': [Object],
    '0.9.0-beta.3': [Object],
    '0.9.0-beta.2': [Object],
    '0.9.0-beta.1': [Object],
    '0.8.3': [Object],
    '0.8.2': [Object],
    '0.8.1': [Object],
    '0.8.0': [Object],
    '0.8.0-beta.1': [Object],
    '0.7.1': [Object],
    '0.7.0': [Object],
    '0.6.0': [Object],
    '0.5.4': [Object],
    '0.5.3': [Object],
    '0.5.2': [Object],
    '0.5.1': [Object],
    '0.5.0': [Object],
    '0.4.0': [Object],
    '0.3.6': [Object],
    '0.3.5': [Object],
    '0.3.4': [Object],
    '0.3.3': [Object],
    '0.3.2': [Object],
    '0.3.1': [Object],
    '0.3.0': [Object],
    '0.2.15': [Object],
    '0.2.14': [Object],
    '0.2.13': [Object],
    '0.2.12': [Object],
    '0.2.11': [Object],
    '0.2.10': [Object],
    '0.2.9': [Object],
    '0.2.8': [Object],
    '0.2.7': [Object],
    '0.2.6': [Object],
    '0.2.5': [Object],
    '0.2.4': [Object],
    '0.2.3': [Object],
    '0.2.2': [Object],
    '0.2.1': [Object],
    '0.2.0': [Object]
  }
}
```

## LICENSE

MPL-2.0
