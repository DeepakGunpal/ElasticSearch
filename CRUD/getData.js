const client = require("../elasticClient");
const getData = async () => {
  const res = await client.search({
    index: "12345",
    query: { match_all: {} },
  });
  console.log(res); //try outputting res u will get why iused res.hit.hits
  console.log(res.hits.hits);
};
getData();
