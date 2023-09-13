if (!process.env.BACKEND_URI) {
  // throw new Error('Invalid/Missing environment variable: "BACKEND_URI"');
}
const BASE_URL = process.env.BACKEND_URI;

type BaseClientParams = {
  endpoint: string;
  method?: string;
  data?: any;
  headers?: any;
  token?: string;
};

export const baseClient = async ({
  endpoint,
  method = "GET",
  data,
  headers = {},
  token,
}: BaseClientParams) => {
  headers = {
    "Content-Type": "application/json",
    ...headers,
  };
  if (token) {
    // also take the token from the session
    headers["Authorization"] = `Bearer ${token}`;
  }
  const config = {
    method,
    headers: {
      ...headers,
    },
    ...(data && { body: JSON.stringify(data) }),
  };
  console.log(JSON.stringify(config));
  const response = await fetch(`${BASE_URL}${endpoint}`, config);

  if (!response.ok) {
    const responseData = await response.json();
    throw new Error(responseData.message || "Network response was not ok");
  }

  return await response.json();
};
