exports.seed = function(knex, Promise) {
  return knex("hobbits").insert([
    { name: "sam" },
    { name: "frodo" },
    { name: "pippin" },
    { name: "merry" }
  ]);
};
