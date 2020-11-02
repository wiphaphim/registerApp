const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const authRoute = require("./routes/auth");
const homeController = require("./controllers/home-controller");
const pageNotFoundController = require("./controllers/pages-not-found-controller");

const port = process.env.port || 3300;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "views");

app.use(authRoute);

app.get("/", homeController);
app.get("/*", pageNotFoundController);

mongoose
  .connect(
    "mongodb+srv://mongoDB:I3P3rKnVhPoVBQLK@cluster0.4xchq.mongodb.net/vue?retryWrites=true&w=majority",
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Database Connected!");
  })
  .catch(() => {
    console.log("Connot to Database!!!");
  });


app.listen(port, () => console.log(`Example app listening on port `, port));
