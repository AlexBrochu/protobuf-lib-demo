# proto-lib

![npm (scoped)](https://img.shields.io/npm/v/@alexbrochu/proto-lib)
![npm bundle size](https://img.shields.io/bundlephobia/min/proto-lib)

Proto library to test how to publish a lib in npm

# Install

```
npm install @alexbrochu/proto-lib
```

# Usage

```js
let protobuf = require("protobufjs");

async function run() {
  let root = await protobuf.load(
    "node_modules/@alexbrochu/proto-lib/Protobuf lib/lib/constant.proto"
  );

  const Corpus = root.lookupEnum("awesomepackage.Corpus");
  // console.log("Test ENUM", Corpus);

  console.log("Corpus", Corpus.values.CORPUS_UNIVERSAL);
}

run().catch((err) => console.log(err));
```

# How to link a package before sending it to npm repository?

This command will be link you node_modules package locally to your other project. Here I'm using @alexbrochu/proto-lib from my local environment

```
npm link @package/name
```

# Once tested you can use this command to bump the npm version and publis to npm repository

You have to login to npm before publishing

```
npm login
```

```
npm version [major-minor]
npm publish --access public # this will publish your package so it's available to everyone
```

test
