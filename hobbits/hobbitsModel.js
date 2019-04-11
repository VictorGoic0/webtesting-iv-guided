const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById
};

async function insert(hobbit) {
  const [id] = await db("hobbits").insert(hobbit);
  if (id) {
    return findById(id);
  }
}

async function update(id, changes) {
  return null;
}

async function remove(id) {
  return null;
}

async function getAll() {
  return await db("hobbits");
}

async function findById(id) {
  return await db("hobbits")
    .where({ id })
    .first();
}
