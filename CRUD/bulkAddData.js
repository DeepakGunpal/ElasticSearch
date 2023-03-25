const client = require("../elasticClient");
const fs = require("fs");
const bulkIndex = (index, data) => {
  let bulkBody = [];
  data.forEach((item) => {
    bulkBody.push({
      index: {
        _index: index,

        _id: item.id,
      },
    });
    bulkBody.push(item);
  });
  client
    .bulk({ body: bulkBody })
    .then((response) => {
      let errorCount = 0;
      response.items.forEach((item) => {
        if (item.index && item.index.error) {
          console.log(++errorCount, item.index.error);
        }
      });
      console.log(
        `Successfully indexed ${data.length - errorCount} out of ${
          data.length
        } items`
      );
    })
    .catch(console.err);
};
const test = () => {
  const ArticleRaw = fs.readFileSync("data.json");
  const articles = JSON.parse(ArticleRaw);
  console.log(`${articles.length} items parsed from data file`);
  bulkIndex("library", articles);
};
test();
