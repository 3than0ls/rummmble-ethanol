import Cookies from 'js-cookie';

export const getAccessToken = () => Cookies.get('access_token');
export const getRefreshToken = () => Cookies.get('refresh_token');
export const isAuthenticated = () => (getAccessToken() === 'true');

export const login = () => {
  // https://docs.amplify.aws/lib/auth/getting-started/q/platform/js
  // https://serverless-stack.com/chapters/login-with-aws-cognito.html
  // https://www.sitepoint.com/tutorial-build-a-react-js-application-with-user-login-and-authentication/
};

export const authenticate = () => {
  // https://www.sitepoint.com/tutorial-build-a-react-js-application-with-user-login-and-authentication/
  // https://stackoverflow.com/questions/49819183/react-what-is-the-best-way-to-handle-login-and-authentication
};
