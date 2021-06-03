# CP14-2-Backend
Group 40 capstone project

## Installation

Use npm insall to install the package

```bash
cd CP14-2-Backend
npm install
```

## Development

```bash
npm run dev
```

## Deployment 

1. Fork the repository

2. Login to the [Heroku Dashboard](https://dashboard.heroku.com/) and create a new project.

3. Connect the project to the repository.

4. Review your settings and choose Deploy. Your app will now be deployed to a https://your-project-name.herokuapp.com URL.

5. Update the url in front-end repository 
```bash
src/routes/urlMap.js/const DEPLOYEDHOST
```

## File uploading AWS S3 configuration

Step 1: create a new security credential or use your existing one.

Step 2: Create a new bucket for S3 service. Remember to untick “Block all public access” when creating it.

Step 3:  Open a Terminal in your project's folder and run:
```bash
npm i aws-sdk 
```

Step 4: Go to index.js file, replace your own access Key, secrete key and bucket name

```python

AWS.config.update({
  accessKeyId: "YOUR_SECRET_KEY",
  secretAccessKey: "YOUR_ACCESS_KEY",
});

...
const params = {
    Bucket: "YOUR_BUCKET_NAME",
    ...
  };
```
## Frontend Repository
[Frontend](https://github.com/zwan2204/CP14-2)


