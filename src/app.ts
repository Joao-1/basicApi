import express from "express";
import Routes from './routes';

class App {
    express: express.Application

    constructor() {
        this.express = express();
        this.routes();
    }

    public start(): express.Application {
        console.log(`App starting at http://localhost:3000`);
        return this.express;
    }

    routes() {
        this.express.use(Routes);
    }
}

export default App;