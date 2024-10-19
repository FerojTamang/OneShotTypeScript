import {config} from 'dotenv'

config()  //env ko sabai aayera basxa aba config () garera call gareko


const envConfig = {
    port : process.env.PORT, 
    mongodbString : process.env.MONGODB_URI,
    backendUrl : process.env.BACKEND_URL,
    environment : process.env.NODE_ENV,
    frontendUrl : process.env.FRONTEND_URL
}

export default envConfig 