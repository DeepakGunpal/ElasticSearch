const client = require("./elasticClient");

client.cat.indices({ format: "json" }).then((yourResponse) => {
  console.log(yourResponse);
});
