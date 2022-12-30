const config = {
    SENTRY_DSN: "https://baf002c987d84ad0b8d5ba09ae8d6751@o4504417074479104.ingest.sentry.io/4504417088307200",
    STRIPE_KEY: "pk_test_51MHnTUGmGFdAfhKY1kaxZEV7jIYbvw1XOpz6j1pFs6mHbhceEOWiZWFDcBIZpRxK5EdfBx3ZovrgrQAT4k3Xep0A00rOVHmsE0",
    MAX_ATTACHMENT_SIZE: 5000000,
    // Backend config
    s3: {
      REGION: process.env.REACT_APP_REGION,
      BUCKET: process.env.REACT_APP_BUCKET,
    },
    apiGateway: {
      REGION: process.env.REACT_APP_REGION,
      URL: process.env.REACT_APP_API_URL,
    },
    cognito: {
      REGION: process.env.REACT_APP_REGION,
      USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
      APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
      IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
    },
  };
  
  export default config;