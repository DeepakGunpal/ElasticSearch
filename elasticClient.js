const { Client } = require("@elastic/elasticsearch");
require("dotenv").config();

const client = new Client({
  cloud: {
    id: process.env.ELASTIC_CLOUD_ID, // Replace with your Elastic cloud ID
  },
  auth: {
    username: process.env.ELASTIC_CLOUD_USERNAME, // Replace with your Elasticsearch username
    password: process.env.ELASTIC_CLOUD_PASSWORD, // Replace with your Elasticsearch password
  },
});

module.exports = client;
