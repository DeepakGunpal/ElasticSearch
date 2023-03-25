const client = require("./elasticClient");
const createIndex = async (indexName) => {
  const index = await client.indices.create({ index: indexName });
  console.log("Index created");
  console.log(index);
};

createIndex(12345);
