import test from "ava";
import { getConfiguration } from "./configuration";

const defaultInsightsUrl = "https://a.com/";

test.beforeEach(() => {
  // Assigning undefined results in a string 'undefined' value
  process.env.NEXT_PUBLIC_INSIGHTS_URL = "";
  process.env.NEXT_PUBLIC_SITE_URL = "https://site.com";
});

test("throw if insights URL empty", (t) => {
  t.throws(() => getConfiguration());
});

test("returns insights URL", (t) => {
  process.env.NEXT_PUBLIC_INSIGHTS_URL = defaultInsightsUrl;

  const { insightsUrl } = getConfiguration();
  t.is(insightsUrl, defaultInsightsUrl);
});
