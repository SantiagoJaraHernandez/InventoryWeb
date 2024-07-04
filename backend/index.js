import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import morgan from "morgan"

const app = express();
const port = 3000;

dotenv.config();

app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
}));

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send("Hola mundo!");
})

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
})

