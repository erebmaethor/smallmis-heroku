const prod = {
  hapi: {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT),
  },
  db: {
    uri:
      `mongodb://${process.env.DB_CREDS}@cluster-shard-00-00-y5ax5.mongodb.net:27017,cluster-shard-00-01-y5ax5.mongodb.net:27017,cluster-shard-00-02-y5ax5.mongodb.net:27017/test?ssl=true&replicaSet=cluster-shard-0&authSource=admin&retryWrites=true`,
  },
  cors: false,
};

module.exports = prod;