const BASE_URL = "https://run.mocky.io/v3";
export const apiLayer = async (url, method = "GET") => {
  const response = await fetch(BASE_URL + url, { method });
  const data = await response.json();
  return data;
};
