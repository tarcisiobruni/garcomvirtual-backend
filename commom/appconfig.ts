export const appConfig = {
    url: (process.env.API_URL || 'http://localhost'),
    port: (process.env.PORT || '3000'),
    env: (process.env.APP_ENV || 'dev')
};
