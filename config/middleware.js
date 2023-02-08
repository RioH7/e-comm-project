import compression from 'compression';
import app from './routes.js'
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet';

const compressionMiddleware = compression();

const errorMiddleware = (err, req, res) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
}

app.use(compressionMiddleware);

app.use(errorMiddleware);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(helmet());

app.use(
    cors({
        origin: 'http://127.0.0.1:5500/public/index.html',
        methods: ['GET', 'POST', 'PUT', 'DELETE']
    })
)