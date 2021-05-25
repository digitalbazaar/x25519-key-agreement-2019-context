# X25519 2019 Crypto Suite Context Repository _(x25519-key-agreement-2019-context)_

[![Build status](https://img.shields.io/github/workflow/status/digitalbazaar/x25519-key-agreement-2019-context/Node.js%20CI)](https://github.com/digitalbazaar/x25519-key-agreement-2019-context/actions?query=workflow%3A%22Node.js+CI%22)
[![Coverage status](https://img.shields.io/codecov/c/github/digitalbazaar/x25519-key-agreement-2019-context)](https://codecov.io/gh/digitalbazaar/x25519-key-agreement-2019-context)
[![NPM Version](https://img.shields.io/npm/v/x25519-key-agreement-2019-context.svg)](https://npm.im/x25519-key-agreement-2019-context)

> JSON-LD Context for the X25519 2019 Crypto suite.

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [Developing](#developing)
- [Commercial Support](#commercial-support)
- [License](#license)

## Background

See also (related specs):

* [Multibase](https://github.com/multiformats/multibase)

## Install

Requires Node.js 12+

To install via NPM:

```
npm install x25519-key-agreement-2019-context
```

## Usage

```js
import x25519Context2019 from 'x25519-key-agreement-2019-context';
// or
const x25519Context2019 = require('x25519-key-agreement-2019-context');
const {contexts, constants} = x25519Context2019;

x25519Context2019.CONTEXT_URL_V1
// 'http://w3id.org/security/suites/x25519-2019/v1'

// get context data for a specific context
x25519Context2019.CONTEXT_V1
// full context object
```

This package can be used with bundlers, such as [webpack][], in browser
applications.

## API

The library exports the following properties:
- `CONTEXT_URL_V1` and `CONTEXT_V1`.
- `constants`: A Object that maps constants to well-known context URLs. The
  main constant `CONTEXT_URL_V1` may be updated from time to time to the
  latest context location.
- `contexts`: A `Map` that maps URLs to full context data.

## Developing

WARNING: The `.jsonld` in `contexts/` is auto-generated by the `npm run build` script,
each time you run the test suite. 

DO NOT edit it directly (or your changes will be quickly overwritten).
Instead, make all context changes to `js/context.js`.

## Commercial Support

Commercial support for this library is available upon request from
Digital Bazaar: support@digitalbazaar.com

## License

- BSD 3-Clause © Digital Bazaar
- See the [LICENSE](./LICENSE) file for details.

[webpack]: https://webpack.js.org/
