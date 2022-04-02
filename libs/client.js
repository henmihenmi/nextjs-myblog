import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "kenn",
  apiKey: process.env.API_KEY,
});
