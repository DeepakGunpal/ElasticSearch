const client = require("../elasticClient");

const bulkIndex = async (bulkBody) => {
  const resp = await client.bulk({
    body: bulkBody,
  });
  console.log(resp);
  console.log(resp.items);
  console.log(resp.items[0].index);
  console.log(resp.items[1].index);
  console.log(resp.items[2].update);
  console.log(resp.items[3].delete);
};
let bulkBody = [
  { index: { _index: "bulk", _id: "1" } },
  { title: "Document 1", content: "This is the first document" },
  { index: { _index: "bulk", _id: "2" } },
  { title: "Document 2", content: "This is the second document" },
  { update: { _index: "bulk", _id: "1" } },
  { doc: { content: "This is an updated version of the first document" } },
  { delete: { _index: "bulk", _id: "2" } },
];
bulkIndex(bulkBody);
