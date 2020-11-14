const BASE_URL = "https://run.mocky.io/v3";
export const apiLayer = async (url, method = "GET") => {
  const response = await fetch(BASE_URL + url, {
    method,
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Content-Type": "application/json; charset=UTF-8",
    },
  });
  const data = await response.json();
  return data;
};
