import compression from 'compression';
import cors from 'cors';
import app from './routes.js'
import bodyParser from 'body-parser';
import helmet from 'helmet';

const cors = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
};

// Use the CORS middleware in your Express app
app.use(cors);

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
// Authentication Middleware