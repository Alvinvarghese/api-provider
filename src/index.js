const express = require("express");
const app = express();

const path = require("path");
const dotenv = require("dotenv");
const root_dir = __dirname.split("src")[0];
dotenv.config({ path: path.join(root_dir, `.env`) });
const cors = require("cors");

const morgan = require("morgan");
app.use(morgan("tiny"));

const corsOptions = {
    origin: `${process.env.APP_URL}`,
    credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());

app.get("/api", (req, res) => {
  res.status(200).json({ link: "https://fd85-103-183-83-115.ngrok-free.app/" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});
