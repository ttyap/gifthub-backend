require("dotenv").config();

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;

const userController = require("./controllers/userController");
const userModel = require("./models/userModel");

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const {DB_USER, DB_PASS, DB_HOST, DB_NAME} = process.env;
const mongoURI = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`;
mongoose.set("useFindAndModify", false);
app.get("/api/v1", (req, res) => {
  res.status(200).json({
    success: true,
    message: "gifthub api reached",
  });
});

// =======================================
//              ROUTES
// =======================================

app.post("/api/v1/user/register", userController.registerUser); // registration post
app.post("/api/v1/user/login", userController.userLogin); // login post
// app.post("/api/v1/user/login", userController.userLogout); // logout post
app.get("/api/v1/users/:id", userController.userProfile); // get user profile
app.patch("/api/v1/user/:id", userController.updateUser); // update route

mongoose
  .connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log("DB connection successful");

    app.listen(port, () => {
      console.log(`App listening on port: ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
