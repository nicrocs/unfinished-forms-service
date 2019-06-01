const config = {
  development: {
    url: process.env.DEV_FRONTEND_URL,
    endpoint: process.env.DEV_PRISMA_ENDPOINT,
    prismaSecret: process.env.DEV_PRISMA_SECRET,
    appSecret: process.env.DEV_APP_SECRET,
    port: process.env.PORT,
    mailHost: process.env.DEV_MAIL_HOST,
    mailPort: process.env.DEV_MAIL_PORT,
    mailUser: process.env.DEV_MAIL_USER,
    mailPass: process.env.DEV_MAIL_PASS
  },
  production: {
    url: process.env.FRONTEND_URL,
    endpoint: process.env.PRISMA_ENDPOINT,
    prismaSecret: process.env.PRISMA_SECRET,
    appSecret: process.env.APP_SECRET,
    port: process.env.PORT,
    mailHost: process.env.MAIL_HOST,
    mailPort: process.env.MAIL_PORT,
    mailUser: process.env.MAIL_USER,
    mailPass: process.env.MAIL_PASS
  }
};

module.exports = config;
