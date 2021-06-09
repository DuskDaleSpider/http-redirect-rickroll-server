# HTTP Redirect Rick Roll Server

## What is it?

An express.js server that will log any incoming requests to mongodb and then redirects to the [classic](https://www.youtube.com/watch?v=dQw4w9WgXcQ).

## How to run it?
1. `git clone <link>`
2. `cd <dir>`
3. `npm install`
4. Set up the environment variables in a .env file
    - (Optional) RICKROLL_PORT 
        - Sets the port the server will start up on
    - (Required) MONGO_URL
        - MongoDB connection url
            - ex: mongodb://user:password@localhost/rickroll?authSource=admin
6. `npm run start`  

### Built using
- Node.js
- Express.js
- Monk
- MongoDB
- dotenv
