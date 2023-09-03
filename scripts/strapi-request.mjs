import { writeFileSync } from "node:fs";
import qs from "qs";

const url = `http://localhost:1337/api/reviews?populate=*${qs.stringify(
  {
    fields: ["slug", "title", "subtitle", "publishedAt"],
    populate: { image: { fields: ["url"] } },
    sort: ["publishedAt:desc"],
    pagination: { pageSize: 6 },
  },
  { encodeValuesOnly: true }
)}`;
const res = await fetch(url);
const body = await res.json();
const formatted = JSON.stringify(body, null, 2);
const file = "scripts/strapi.response.json";
writeFileSync(file, formatted, "utf-8");
