import Cookies from 'js-cookie';

export const getAccessToken = () => Cookies.get('access_token');
export const getRefreshToken = () => Cookies.get('refresh_token');
export const isAuthenticated = () => (getAccessToken() === 'true');

// we'll make a completely real authenticator
// it'll have a definite dictionary with usernames to emails
// and it'll store whichever one your on in dictionary
// there will only be 2 accounts

// first learn how the fuck tokens work

export const authenticate = async () => {
  if (getRefreshToken()) {
    try {
      // const tokens = await refreshTokens(); // call an API, returns tokensc
      const tokens = {};

      const expires = (tokens.expires_in || 60 * 60) * 1000;
      const inOneHour = new Date(new Date().getTime() + expires);

      // you will have the exact same setters in your Login page/app too
      Cookies.set('access_token', tokens.access_token, { expires: inOneHour });
      Cookies.set('refresh_token', tokens.refresh_token);

      return true;
    } catch (error) {
      console.log('refresh token bad');
      return false;
    }
  }

  console.log('refresh token bad');
  return false;
};
