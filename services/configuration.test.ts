import test from "ava";
import { getConfiguration } from "./configuration";

const defaultInsightsUrl = "https://a.com/";

test.beforeEach(() => {
  // Assigning undefined results in a string 'undefined' value
  process.env.INSIGHTS_URL = "";
});

test("throw if insights URL empty", (t) => {
  t.throws(() => getConfiguration());
});

test("returns insights URL", (t) => {
  process.env.INSIGHTS_URL = defaultInsightsUrl;

  const { insightsUrl } = getConfiguration();
  t.is(insightsUrl, defaultInsightsUrl);
});
