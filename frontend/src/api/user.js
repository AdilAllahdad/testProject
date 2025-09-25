import { getApiUrl, API_CONFIG } from './config';

export const signupUser = async (form) => {
  const res = await fetch(getApiUrl(API_CONFIG.endpoints.signup), {
    method: 'POST',
    headers: API_CONFIG.headers,
    body: JSON.stringify(form),
  });
  return res.json();
};

export const loginUser = async (form) => {
  const res = await fetch(getApiUrl(API_CONFIG.endpoints.login), {
    method: 'POST',
    headers: API_CONFIG.headers,
    body: JSON.stringify(form),
  });
  return res.json();
};
