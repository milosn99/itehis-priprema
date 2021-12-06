const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const MONGOOSE_URI =
  "mongodb+srv://milos:milos@itehispriprema.wwllh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true });

const connection = mongoose.connection;
connection.once("open", () => console.log("Povezan na MongoDB bazu!"));

const activities = require("./routes/activities");
const users = require("./routes/users");

app.use("/api/activities", activities);
app.use("/api/users", users);

app.listen(port, () => console.log(`Server pokrenut na portu: ${port}!`));
