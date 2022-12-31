import { getToken } from "./token";

//GET
export const getApi = async (url) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      console.error(`${url}: `, `ok: ${res.ok},status: ${res.status}, statusText: ${res.statusText}`);
      return { ok: res.ok, status: res.status, message: res.statusText };
    };

    return res;

  } catch (error) {
    console.error(`${url}: `, error);
    return { ok: false, message: error };
  }
}

//POST
export const postApi = async (url, data) => {
  const token = getToken();
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });

    if (!res.ok) {
      console.error(`${url}: `, `ok: ${res.ok},status: ${res.status}, statusText: ${res.statusText}`);
      return { ok: false, status: res.status, message: res.statusText };
    };

    return res;

  } catch (error) {
    console.error(`${url}: `, error);
    return { ok: false, message: error };
  }
}