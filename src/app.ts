import express from 'express'
//expres: creaer servidores web y el manejo de rutas

import morgan from 'morgan'
import cors from 'cors'
import register from './routes/Register.routes'
import ProductsRoutes from "./routes/Products.routes"
import registerCart from "./routes/Cart.routes"
import login from './routes/Login.routes'
const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())   //express puede recibir archivos json

app.use("/api", register, ProductsRoutes, registerCart, login)

export default app;





//node: ejecutar java scrip en servidores
//json: guarda objetos con clave y valor
//typescript: te permite añadirle tipos a las variables, te permite detectar errores antes de que se ejecute