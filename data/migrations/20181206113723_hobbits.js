exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("hobbits", tbl => {
      tbl.increments();

      tbl.string("name", 255).notNullable();
    })
    .createTable("profiles", table => {
      table.increments();
      table
        .string("username", 128)
        .notNullable()
        .unique();
      table.string("password", 100).notNullable();
      table
        .string("thumbnailUrl", 256)
        .defaultTo("https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg");
    })
    .createTable("posts", table => {
      table.increments();
      table
        .integer("user_id")
        .unsigned()
        .references("profiles.id")
        .notNullable()
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table.string("imageUrl", 256);
      table.string("description", 500);
      table.integer("likes").defaultTo(0);
    });
};

exports.down = function(knex, Promise) {
  // undo the operation in up
  return knex.schema
    .dropTableIfExists("posts")
    .dropTableIfExists("profiles")
    .dropTableIfExists("hobbits");
};
