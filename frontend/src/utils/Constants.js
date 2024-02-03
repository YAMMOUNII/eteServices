// Production URL
const production = {
  url: "http://localhost:3000/api/",
};

// Development URL
const development = {
  url: "http://localhost:3000/api/",
};

export const isDevMode = process.env.NODE_ENV === "development";

export const config = isDevMode ? development : production;
