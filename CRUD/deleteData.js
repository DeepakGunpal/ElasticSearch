const client = require("./elasticClient");

const deleteData = async (id) => {
  const data = await client.delete({
    index: "12345",
    id: id,
  });
  console.log(data);
  /**
  {
  _index: '12345',  _id: 'x6xmF4cBt3wwSZoZPokL',
  _version: 2,
  result: 'deleted',
  _shards: { total: 2, successful: 2, failed: 0 },
  _seq_no: 2,  _primary_term: 1
}
   */
};

deleteData("x6xmF4cBt3wwSZoZPokL");
//c the id in the kibana console or when you post data u will get the id sont worry ill tell u hove to get the id also
