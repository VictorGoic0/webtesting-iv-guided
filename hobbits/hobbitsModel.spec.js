// returns 201
// inserts the resource

const hobbits = require("./hobbitsModel.js");
const db = require("../data/dbConfig.js");

describe("hobbits model", () => {
  beforeEach(async () => {
    await db("hobbits").truncate();
  });
  it("should insert the provided hobbit", async () => {
    await hobbits.insert({ name: "gaffer" });
    const hobbit = await db("hobbits");
    expect(hobbit).toHaveLength(1);
  });
  it("should insert the provided hobbit", async () => {
    await hobbits.insert({ name: "gaffer" });
    await hobbits.insert({ name: "laffer" });
    await hobbits.insert({ name: "craffer" });
    const hobbit = await db("hobbits");
    expect(hobbit).toHaveLength(3);
  });
  it("should insert the provided hobbit", async () => {
    let hobbit = await hobbits.insert({ name: "gaffer" });
    expect(hobbit.name).toBe("gaffer");

    hobbit = await hobbits.insert({ name: "laffer" });
    expect(hobbit.name).toBe("laffer");
  });
});
