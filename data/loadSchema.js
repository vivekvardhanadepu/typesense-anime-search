/*
 *  Our JavaScript client library works on both the server and the browser.
 *  When using the library on the browser, please be sure to use the
 *  search-only API Key rather than the master API key since the latter
 *  has write access to Typesense and you don't want to expose that.
 */

const Typesense = require("typesense");
const fs = require("fs").promises;

const main = async () => {
  let client = new Typesense.Client({
    nodes: [
      {
        host: "localhost", // For Typesense Cloud use xxx.a1.typesense.net
        port: "8108", // For Typesense Cloud use 443
        protocol: "http", // For Typesense Cloud use https
      },
    ],
    apiKey: "xyz",
    connectionTimeoutSeconds: 5,
  });

  let animeSchema = {
    name: "animes",
    fields: [
      {
        name: "title",
        type: "string",
        facet: true,
      },
      {
        name: "tags",
        type: "string[]",
        facet: true,
      },
      {
        name: "sources",
        type: "string[]",
        facet: true,
      },
      {
        name: "type",
        type: "string",
      },
      {
        name: "episodes",
        type: "int32",
      },
      {
        name: "status",
        type: "string",
      },
    ],
  };

  await client.collections("animes").delete();
  await client.collections().create(animeSchema);

  const animesInJsonL = await fs.readFile("anime.jsonl", "utf8");
  client.collections("animes").documents().import(animesInJsonL);
};

main();
