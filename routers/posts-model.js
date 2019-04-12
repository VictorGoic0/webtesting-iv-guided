const db = require("../data/dbConfig.js");

module.exports = {
  find,
  findById,
  create,
  remove,
  update
};

async function find() {
  const posts = await db("posts")
    .select({
      id: "posts.id",
      user_id: "posts.user_id",
      imageUrl: "posts.imageUrl",
      likes: "posts.likes",
      username: "profiles.username",
      thumbnailUrl: "profiles.thumbnailUrl"
    })
    .innerJoin("profiles", "posts.user_id", "profiles.id");
  return posts;
}

async function findById(id) {
  const post = await db("posts")
    .select({
      id: "posts.id",
      user_id: "posts.user_id",
      imageUrl: "posts.imageUrl",
      likes: "posts.likes",
      username: "profiles.username",
      thumbnailUrl: "profiles.thumbnailUrl",
      description: "posts.description"
    })
    .innerJoin("profiles", "posts.user_id", "profiles.id")
    .where({ "posts.id": id })
    .first();
  return post;
}

async function create(item) {
  const [post] = await db("posts")
    .insert(item)
    .returning([
      "posts.id",
      "posts.user_id",
      "posts.imageUrl",
      "posts.likes",
      "profiles.username",
      "profiles.thumbnailUrl",
      "posts.description"
    ])
    .innerJoin("profiles", "posts.user_id", "profiles.id");
  return post;
}

async function remove(id) {
  const post = await findById(id);
  if (post) {
    const deleted = await db("posts")
      .where({ id })
      .del();
    if (deleted) {
      return post;
    }
  }
}

async function update(item, id) {
  const editedPost = await db("posts")
    .where({ id })
    .update(item)
    .returning([
      "posts.id",
      "posts.user_id",
      "posts.imageUrl",
      "posts.likes",
      "profiles.username",
      "profiles.thumbnailUrl",
      "posts.description"
    ])
    .innerJoin("profiles", "posts.user_id", "profiles.id");
  return editedPost;
}
