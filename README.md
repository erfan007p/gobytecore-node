GoBytecore Node
============

A GoByte full node for building applications and services with Node.js. A node is extensible and can be configured to run additional services. At the minimum a node has an interface to [GoByte Core (gobyted) v0.16.1.1](https://github.com/gobytecoin/gobyte/tree/v0.16.1.x) for more advanced address queries. Additional services can be enabled to make a node more useful such as exposing new APIs, running a block explorer and wallet service.

## Usages

### As a standalone server

```bash
git clone https://github.com/gobytecoin/gobytecore-node
cd gobytecore-node
npm install
./bin/gobytecore-node start
```

When running the start command, it will seek for a .gobytecore folder with a gobytecore-node.json conf file.
If it doesn't exist, it will create it, with basic task to connect to gobyted.

Some plugins are available :

- Insight-API : `./bin/gobytecore-node addservice @gobytecoin/insight-api`
- Insight-UI : `./bin/gobytecore-node addservice @gobytecoin/insight-ui`

You also might want to add these index to your gobyte.conf file :
```
-addressindex
-timestampindex
-spentindex
```

### As a library

```bash
npm install @gobytecoin/gobytecore-node
```

```javascript
const gobytecore = require('@gobytecoin/gobytecore-node');
const config = require('./gobytecore-node.json');

let node = gobytecore.scaffold.start({ path: "", config: config });
node.on('ready', function() {
    //GoByte core started
    gobyted.on('tx', function(txData) {
        let tx = new gobytecore.lib.Transaction(txData);
    });
});
```

## Prerequisites

- GoByte Core (gobyted) (v0.16.1.1) with support for additional indexing *(see above)*
- Node.js v8+
- ZeroMQ *(libzmq3-dev for Ubuntu/Debian or zeromq on OSX)*
- ~20GB of disk storage
- ~1GB of RAM

## Configuration

GoBytecore includes a Command Line Interface (CLI) for managing, configuring and interfacing with your GoBytecore Node.

```bash
gobytecore-node create -d <gobyte-data-dir> mynode
cd mynode
gobytecore-node install <service>
gobytecore-node install https://github.com/yourname/helloworld
gobytecore-node start
```

This will create a directory with configuration files for your node and install the necessary dependencies.

Please note that [GoByte Core](https://github.com/gobytecoin/gobyte/tree/master) needs to be installed first.

For more information about (and developing) services, please see the [Service Documentation](docs/services.md).

## Add-on Services

There are several add-on services available to extend the functionality of Bitcore:

- [Insight API](https://github.com/gobytecoin/insight-api/tree/master)
- [Insight UI](https://github.com/gobytecoin/insight-ui/tree/master)
- [Bitcore Wallet Service](https://github.com/gobytecoin/gobytecore-wallet-service/tree/master)

## Documentation

- [Upgrade Notes](docs/upgrade.md)
- [Services](docs/services.md)
  - [GoByted](docs/services/gobyted.md) - Interface to GoByte Core
  - [Web](docs/services/web.md) - Creates an express application over which services can expose their web/API content
- [Development Environment](docs/development.md) - Guide for setting up a development environment
- [Node](docs/node.md) - Details on the node constructor
- [Bus](docs/bus.md) - Overview of the event bus constructor
- [Release Process](docs/release.md) - Information about verifying a release and the release process.


## Setting up dev environment (with Insight)

Prerequisite : Having a gobyted node already runing `gobyted --daemon`.

GoBytecore-node : `git clone https://github.com/gobytecoin/gobytecore-node -b develop`
Insight-api (optional) : `git clone https://github.com/gobytecoin/insight-api -b develop`
Insight-UI (optional) : `git clone https://github.com/gobytecoin/insight-ui -b develop`

Install them :
```
cd gobytecore-node && npm install \
 && cd ../insight-ui && npm install \
 && cd ../insight-api && npm install && cd ..
```

Symbolic linking in parent folder :
```
npm link ../insight-api
npm link ../insight-ui
```

Start with `./bin/gobytecore-node start` to first generate a ~/.gobytecore/gobytecore-node.json file.
Append this file with `"@gobytecoin/insight-ui"` and `"@gobytecoin/insight-api"` in the services array.

## Contributing

Please send pull requests for bug fixes, code optimization, and ideas for improvement. For more information on how to contribute, please refer to our [CONTRIBUTING](https://github.com/gobytecoin/gobytecore/blob/master/CONTRIBUTING.md) file.

## License

Code released under [the MIT license](https://github.com/gobytecoin/gobytecore-node/blob/master/LICENSE).

Copyright 2016-2018 GoByte Core Group, Inc.

- bitcoin: Copyright (c) 2009-2015 Bitcoin Core Developers (MIT License)
