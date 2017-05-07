# react-tradeshift-ui
React wrappers for the [Tradeshift ui components](https://github.com/tradeshift/tradeshift-ui).
Check the component storybook at [tradeshift.github.io/react-tradeshift-ui](https://wejendorp.github.io/react-tradeshift-ui).

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

[![Dependency Status](https://david-dm.org/wejendorp/react-tradeshift-ui.svg)](https://david-dm.org/wejendorp/react-tradeshift-ui)
[![devDependency Status](https://david-dm.org/wejendorp/react-tradeshift-ui/dev-status.svg)](https://david-dm.org/wejendorp/react-tradeshift-ui#info=devDependencies)

[![npm version](https://badge.fury.io/js/react-tradeshift-ui.svg)](https://badge.fury.io/js/react-tradeshift-ui)
[![Build Status](https://travis-ci.org/wejendorp/react-tradeshift-ui.svg?branch=master)](https://travis-ci.org/wejendorp/react-tradeshift-ui)
[![codecov](https://codecov.io/gh/wejendorp/react-tradeshift-ui/branch/master/graph/badge.svg)](https://codecov.io/gh/wejendorp/react-tradeshift-ui)


## Installation

```bash
$ npm install react-tradeshift-ui
```

*Note:* Requires [Tradeshift ui](http://ui.tradeshift.com/#getstarted/) explicitly loaded on your page.

## Development
Development with minimal setup via [Storybook](https://github.com/storybooks/storybook) and
[react-scripts](https://github.com/facebookincubator/create-react-app).

```bash
$ npm install
$ npm start
$ open http://localhost:9009
```

will open the Storybook with hot module reloading enabled.

### Release
Any code pushed to master will be automatically released to `npm` with an appropriate semantic version.
Releases are handled automatically by Travis-CI via [semantic-release](https://github.com/semantic-release/semantic-release)
and [commitizen](http://commitizen.github.io/cz-cli/) commit message conventions.

## License
ISC. Copyright (c) 2017, Tradeshift.
