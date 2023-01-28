let protobuf = require("protobufjs");

async function run() {
  let root = await protobuf.load(
    "node_modules/@alexbrochu/proto-lib/Protobuf lib/lib/constant.proto"
  );

  const Corpus = root.lookupEnum("awesomepackage.Corpus");
  // console.log("Test ENUM", Corpus);

  console.log("Corpus", Corpus);
  console.log("Corpus test", Corpus.values);
  console.log("Corpus", Corpus.valuesById["0"]);
}

run().catch((err) => console.log(err));
