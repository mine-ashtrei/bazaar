if (!process.env.STRAPI_URI) {
  throw new Error('Invalid/Missing environment variable: "BACKEND_URI"');
}
const BASE_URL = process.env.STRAPI_URI;
const TOKEN = process.env.STRAPI_TOKEN;
const getParams = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    "Content-Type": "application/json",
  },
};

export type StoreFrontData = {
  panels: any;
};

export const pages = {
  getAboutPage: async () => {
    const res = await fetch(`${BASE_URL}/about-page`, getParams);
    const data = await res.json();
    return data;
  },
  getSoreFrontPage: async (): Promise<StoreFrontData> => {
    const res = await fetch(`${BASE_URL}/store-front?populate=*`, getParams);
    const data = await res.json();
    return data;
  },
};
