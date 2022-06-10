export type AppConfiguration = {
  insightsUrl: string;
  siteUrl: string
};

export const getConfiguration = (): AppConfiguration => ({
  insightsUrl: getEnvironmentVariableSafe(
    process.env.INSIGHTS_URL,
    "Insights URL"
  ),
  siteUrl: getEnvironmentVariableSafe(
    process.env.SITE_URL,
    "site URL"
  ),
});

const getEnvironmentVariableSafe = (
  value: string | undefined,
  name: string
): string => {
  if (!value) {
    throw new Error(`${name} not configured`);
  }

  return value;
};
