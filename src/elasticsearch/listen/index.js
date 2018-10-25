const mongoUrl =
  "mongodb://oploguser:OFXUsS33xC8sDxrQ@staging-shard-00-00-fkthi.mongodb.net:27017,staging-shard-00-01-fkthi.mongodb.net:27017,staging-shard-00-02-fkthi.mongodb.net:27017/local?ssl=true&replicaSet=Staging-shard-0&authSource=admin";

const OPTLOG = require("./optlog");

const MAXSIZE = 600;
const INTERVAL = 10000;
let timer = null;
let bulk = [];
const es = require("../../elasticsearch")();

new OPTLOG(exec, mongoUrl, "pop");

async function exec(obj) {
  const { method, id, data, collection } = obj;
  switch (method) {
    case "insert":
      console.log("INSERT", id);
      bulk.push(
        { index: { _index: collection, _type: collection, _id: id } },
        { doc: data, doc_as_upsert: true }
      );
      break;
    case "update":
      console.log("UPDATE", id);
      bulk.push(
        { update: { _index: collection, _type: collection, _id: id } },
        { doc: data, doc_as_upsert: true }
      );
      break;
    case "delete":
      console.log("DELETE", id);
      bulk.push({ delete: { _index: collection, _type: collection, _id: id } });
      break;
    default:
      break;
  }

  if (bulk.length >= MAXSIZE) {
    flushBulk();
  }
}

async function flushBulk() {
  if (timer) {
    clearTimeout(timer);
  }
  if (bulk.length) {
    try {
      const res = await es.bulk({ body: bulk });
      if (res.errors) {
        console.log(res.errors);
      }
    } catch (e) {
      console.log("ERROR");
    }
  }
  bulk = [];
  timer = setTimeout(flushBulk, 10000);
}
