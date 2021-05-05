/** @format */

module.exports = {
  apps: [
    {
      name: "patient-backend",
      script: "./src/index.js",
      env_production: {
        NODE_ENV: "production",
        JWT_KEY: "mzhmzhmzh",
        PORT: "12335"
      }
    }
  ]
};
