const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./models");
const dbConfig = require("./config/db.config");
const app = express();
const port = 3000;

const userApi = require("./routes/user.route")
const authApi = require("./routes/auth.route")

const Role = db.role;

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB");
    // initial();
  })
  .catch((err) => {
    console.log("Connection error", err);
    process.exit();
  });

const initial = () => {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'user' to roles collection");
      });
      new Role({
        name: "moderator",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'moderator' to roles collection");
      });
      new Role({
        name: "admin",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'admin' to roles collection");
      });
    }
  });
};

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/user", userApi)
app.use("/api/auth", authApi)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
