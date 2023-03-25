const client = require("../elasticClient");
const search = (index, body) => {
  return client.search({
    index: index,
    body: body,
  });
};
const getAddData = () => {
  let body = {
    size: 5,
    from: 0,
    query: {
      match_all: {},
    },
  };

  console.log(`retreving all the document at ${body.size} at a time`);
  search("library", body)
    .then((results) => {
      console.log(results.hits.total.value);
      console.log("reurned article title :");

      results.hits.hits.forEach((hit, index) => {
        console.log(`\t${body.from + ++index} - ${hit._source.title}`);
      });
    })
    .catch(console.error);
};
getAddData();
