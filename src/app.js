import express from "express";
import morgan from "morgan";
import indexRoutes from "./routes/index.routes.js";
import bodyParser from "body-parser";
import connectDb from "./database/db.js";
import createRouter from "./routes/create.routes.js";
import updateRouter from "./routes/update.routes.js";

const app = express();
connectDb();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(indexRoutes);
app.use(createRouter);
app.use(updateRouter);

export default app;
