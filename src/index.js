const express = require("express");
const cors = require("cors");
const app = express();
const userrouter = require("./routes/user");
const recursosrouter = require("./routes/recursos");

require("./database");

// settings
app.set("port", process.env.PORT || 4000);

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api", userrouter);
app.use("/api", recursosrouter);
//app.use("/api/recursos", require("./routes/recursos"));

app.listen(app.get("port"));
console.log("Server on port", app.get("port"));