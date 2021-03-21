const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConfig = require("./app/config/db.config.js");
const authUser = require("./app/routes/auth.routes");
const retriveUser = require("./app/routes/user.routes");
const productRouter = require('./app/routes/products.routes');
const app = express();
var corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));
//Parse requests of content-type - application/json
app.use(bodyParser.json());
//Parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
const db = require("./app/models");

const Role = db.role;
const mongoUrl = process.env.MONGODB_URI
db.mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to Monnpm igoDB.");
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });
// Simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Mern Authentication" });
});
//Routes
app.use("/", authUser);
app.use("/", retriveUser);
app.use("/product", productRouter);

// Set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});