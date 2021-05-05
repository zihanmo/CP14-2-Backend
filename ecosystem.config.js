/** @format */

module.exports = {
  apps: [
    {
      name: "patient-web-app",
      script: "./src/index.js",
      env_production: {
        NODE_ENV: "production"
      }
    }
  ]
};
