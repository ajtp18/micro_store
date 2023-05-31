import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import connectDb from "./database/db.js";
import cookieParser from "cookie-parser";

import indexRoutes from "./routes/items/index.routes.js";
import createRouter from "./routes/items/create.routes.js";
import updateRouter from "./routes/items/update.routes.js";

import registerRoutes from "./routes/auth/register.routes.js";
import loginRoutes from "./routes/auth/login.routes.js";
import cors from "cors";

const app = express();
connectDb();

app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

//Items
app.use(indexRoutes);
app.use(createRouter);
app.use(updateRouter);

//auth
app.use("/", registerRoutes);
app.use("/", loginRoutes);

export default app;
