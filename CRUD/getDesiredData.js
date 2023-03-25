const client = require("../elasticClient");

const search = (index, body) => {
  return client.search({
    index: index,
    body: body,
  });
};

const getDesiredData = () => {
  let body = {
    size: 20,
    from: 0,
    query: {
      bool: {
        must: [
          {
            query_string: {
              query:
                "(authors.firstname:J* OR authors.lastname:H*) AND (title:excepteur)",
            },
          },
        ],
      },
    },
  };
  console.log("retriving data from querry");
  search("library", body)
    .then((results) => {
      console.log(results.hits);
      console.log(
        `found ${results.hits.total.value} items in ${results.took}ms`
      );
      if (results.hits.total > 0) console.log(`returned article titles:`);
      results.hits.hits.forEach((hit, index) =>
        console.log(
          `\t${body.from + ++index} -------------${hit._source.title} (score: ${
            hit._score
          })`
        )
      );
    })
    .catch(console.error);
};
getDesiredData();
