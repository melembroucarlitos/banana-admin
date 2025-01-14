const getServerEndPoint = () => {
  if (process.env.APP_VARIANT === 'development') {
    return 'https://dev.bananaapp.org';
  } if (process.env.APP_VARIANT === 'production') {
    return 'https://api.bananaapp.org';
  }
  return console.error('Please set your APP_VARIANT in your .env as either "development" or "production".');
};

const getEnv = () => ({
  CREATE_URL: 'admin_auth',
  LOGIN_URL: '/login',
  // TODO: Update logic for user identity to either: 'view-only' | 'admin' | 'super-admin'
  USER_IDENTITY: 'view-only',
  API_BASE_URL: getServerEndPoint() || 'development',
});

export default getEnv;
