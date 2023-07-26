import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";

//configure env
dotenv.config();

//databse connect via config
connectDB();

//rest object
const app = express();

//middelwares
app.use(cors()); // we are using different ports for backend and frontend and chances are that cors error occur-> to prvent this we use cors();
app.use(express.json()); // to send json format data
app.use(morgan("dev")); // morgan pckg to listen to api changes in terminal

//routes
app.use("/api/v1/auth", authRoutes);

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on port ${PORT}`.bgCyan
      .white
  );
});

