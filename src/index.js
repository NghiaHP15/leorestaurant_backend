const express = require("express");
const routes = require("./routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./config/db");
const bodyParser = require("body-parser");
const app = express();

dotenv.config();
db.connect();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

const port = process.env.port || 3001;

routes(app);

app.listen(port, () => {
  console.log("Server running in port: ", +port);
});
