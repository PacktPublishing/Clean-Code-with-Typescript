declare const process: {
  env: Record<string, string | undefined>;
};

export const apiKey = process.env.API_KEY;
