module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        client: "mongo",
        host: "103.81.86.79",
        port: 27017,
        database: "xyz",
        username: "",
        password: "",
      },
      options: {},
    },
  },
});
