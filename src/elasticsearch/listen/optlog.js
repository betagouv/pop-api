var MongoOplog = require("mongo-oplog");

const mongoUrl = process.env.MONGO_DB;

class OPTLOG {
  constructor(callback, mongoUrl, collection) {
    this.callback = callback;
    this.oplog = MongoOplog(mongoUrl, { ns: `${collection}.*` });

    this.oplog.tail();

    this.oplog.on("op", data => {
      //   console.log(data);
    });
    this.oplog.on("insert", doc => {
      const obj = convert(doc, "insert");
      if (this.callback) {
        this.callback(obj);
      }
      // console.log(obj);
    });
    this.oplog.on("update", doc => {
      const obj = convert(doc, "update");
      if (this.callback) {
        this.callback(obj);
      }
      // console.log(obj);
    });
    this.oplog.on("delete", doc => {
      const obj = convert(doc, "delete");
      if (this.callback) {
        this.callback(obj);
      }
    });

    this.oplog.on("error", error => {
      console.log(error);
    });

    this.oplog.on("end", () => {
      console.log("Stream ended");
    });

    this.oplog.stop(() => {
      console.log("Server stopped");
    });
  }

  // Bind connection to error event (to get notification of connection errors)
}

module.exports = OPTLOG;

function convert(doc, method) {
  const arr = doc.ns.split(".");
  const base = arr[0];
  const collection = arr[1];

  if (method === "delete") {
    return {
      base,
      collection,
      method: method,
      id: doc.o._id
    };
  }

  if (method === "insert") {
    return {
      base,
      collection,
      method: method,
      id: doc.o._id,
      data: doc.o
    };
  }

  const data = doc.o["$set"];
  delete data._id;

  return {
    base,
    collection,
    method: method,
    data,
    id: doc.o2._id
  };
}
