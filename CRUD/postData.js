const client = require("./elasticClient");
const postData = async (dataObject) => {
  const response = await client.index({
    index: "12345", //since i have ceated blah in createindex be creative guys :)
    document: {
      name: dataObject.name,
      sub: dataObject.sub,
      email: dataObject.email,
      phone: dataObject.phone,
    },
  });
  console.log(response);
  /**
{
  _index: '12345',
  _id: 'x6xmF4cBt3wwSZoZPokL',
  _version: 1,
  result: 'created',
  _shards: { total: 2, successful: 2, failed: 0 },
  _seq_no: 0,
  _primary_term: 1
}
   */
};

dataObject = {
  name: "dg",
  sub: "developer",
  email: "dg@dg.com",
  phone: "9352117168",
};
postData(dataObject);
