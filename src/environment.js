let IS_PROD = true;
const server = IS_PROD ?
    "https://gpt-backend-3akn.onrender.com/" :

    "http://localhost:3000"


export default server;