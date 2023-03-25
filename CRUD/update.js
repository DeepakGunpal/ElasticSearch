const client = require("../elasticClient");
const updateData = async (id) => {
  const res = await client.update({
    index: "12345",
    id: id,
    doc: {
      name: "Deepak",
    },
  });
  console.log(res);
};
updateData("yKxrF4cBt3wwSZoZEIkG");
