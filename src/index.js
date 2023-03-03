import express from "express";
import morgan from "morgan";

import indexRoutes from "./routes/index.js";
import moviesRoutes from "./routes/movies.js";
import usersRoutes from "./routes/users.js";

const app = express();

// settings
app.set("port", process.env.PORT || 4000);

// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use(indexRoutes);
app.use("/api/movies", moviesRoutes);
app.use("/api/users", usersRoutes);

// starting the server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
