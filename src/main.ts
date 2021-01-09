import bodyParser from 'body-parser';
import express from "express";
import swaggerUi from "swagger-ui-express";
import { RegisterRoutes } from '../dist/routes';
import swaggerDocument from '../dist/swagger.json';
const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("Hello world!");
});
app.use(bodyParser.json())
RegisterRoutes(app);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});