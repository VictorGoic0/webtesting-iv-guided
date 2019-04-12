exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("hobbits", tbl => {
      tbl.increments();

      tbl.string("name", 255).notNullable();
    })
    .createTable("posts", table => {
      table.increments();
      table.string("imageUrl", 256);
      table.string("description", 500);
      table.integer("likes").defaultTo(0);
    });
};

exports.down = function(knex, Promise) {
  // undo the operation in up
  return knex.schema.dropTableIfExists("posts").dropTableIfExists("hobbits");
};
