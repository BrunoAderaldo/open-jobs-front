export const TOKEN_KEY = "@openjobs:token";
export const LOGGED_USER = "@openjobs:user";

export const getStorageToken = () => localStorage.getItem(TOKEN_KEY);
export const getStorageUser  = () => localStorage.getItem(LOGGED_USER);

export const isAuthenticated = () => getStorageToken() !== null;

export const login = (token, user) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(LOGGED_USER, JSON.stringify(user));
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(LOGGED_USER);
};
