require("../mongo");
const Merimee = require('../models/merimee');
const es = require("../elasticsearch")();

const bulk_number = 3000;

async function run() {
  let counter = 0;
  while(true) {
    let m = await Merimee.find().sort({_id: 1}).skip(bulk_number * counter).limit(bulk_number);
    if (!m.length) {
      console.log('No more items');
      break;
    }
    const bulk = [];
    for (let i in m) {
      const c = JSON.parse(JSON.stringify(m[i]));
      bulk.push({ update:  { _index: 'merimee', _type: 'merimee', _id: c._id } });
      delete c._id;
      bulk.push({doc: c, doc_as_upsert : true});
    }
    res = await es.bulk({body: bulk});
    if (res.errors) {
      console.log(res.items[0]);
    }
    counter++;
    console.log(counter*bulk_number + 'done');
  }
  console.log('victory');
}
run();
