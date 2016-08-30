# global-proxy

> Set system proxy for mac and windows platform.

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/bubkoo/global-proxy/blob/master/LICENSE)


## Installation

```
$ npm install --save global-proxy
```


## Usage

```js
import globalProxy from 'global-proxy';


// globalProxy.enable(hostname, port[, protocol])
globalProxy.enable('127.0.0.1', 9000, 'http')
  .then((stdout) => {
    console.log(stdout);
  })
  .catch((error) => {
    console.log(error);
  });


globalProxy.disable()
  .then((stdout) => {
    console.log(stdout);
  })
  .catch((error) => {
    console.log(error);
  });
```

## Related

- [global-proxy-cli](https://github.com/bubkoo/global-proxy-cli) - cli for [global-proxy](https://github.com/bubkoo/global-proxy).


## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/bubkoo/global-proxy/issues/new).
