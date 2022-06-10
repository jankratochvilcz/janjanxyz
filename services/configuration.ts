export type AppConfiguration = {
  insightsUrl: string;
};

export const getConfiguration = (): AppConfiguration => {
  const insightsUrl = process.env.INSIGHTS_URL;
  console.log(insightsUrl);
  if (!insightsUrl) {
    throw new Error("Insights URL not configured");
  }

  return {
    insightsUrl,
  };
};
