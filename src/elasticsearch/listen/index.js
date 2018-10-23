const mongoUrl =
  "mongodb://oploguser:OFXUsS33xC8sDxrQ@staging-shard-00-00-fkthi.mongodb.net:27017,staging-shard-00-01-fkthi.mongodb.net:27017,staging-shard-00-02-fkthi.mongodb.net:27017/local?ssl=true&replicaSet=Staging-shard-0&authSource=admin";

const OPTLOG = require("./optlog");

const es = require("../../elasticsearch")();

new OPTLOG(exec, mongoUrl, "pop");
const bulk = [];
async function exec(obj) {
  const { method, id, data, collection } = obj;
  switch (method) {
    case "insert":
      bulk.push({ index: { _index: collection, _type: collection, _id: id } });
      bulk.push({ doc: data, doc_as_upsert: true });
      break;
    case "update":
      console.log("UPDATE", data);
      delete data._id;
      bulk.push({ update: { _index: collection, _type: collection, _id: id } });
      bulk.push({ doc: data, doc_as_upsert: true });
      break;
    case "delete":
      bulk.push({ delete: { _index: collection, _type: collection, _id: id } });
      break;
    default:
      break;
  }

  const res = await es.bulk({ body: bulk });
  if (res.errors) {
    console.log(res.items[0]);
  }
}
