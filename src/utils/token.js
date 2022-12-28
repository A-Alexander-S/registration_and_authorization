
export const setToken = (token) => {
  localStorage.setItem("token", JSON.stringify(token));
}

export const removeToken = () => {
  localStorage.setItem("token", JSON.stringify(null));
}

export const getToken = () => {
  return JSON.parse(localStorage.getItem("token"));
}