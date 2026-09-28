const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { movieModel } = require("./models/movie.model");
const { initializeDatabase } = require("./db/db.connect");
const crudRoutes = require("./routes/crudRoutes");
const app = express();
const port = 3000;
const mongoUri = process.env.MONGODB;

app.use(cors());
app.use(express.json());

initializeDatabase(mongoUri).then(() => {
    app.listen(port, () => {
        console.log("Server is running on PORT ", port);
    });
})
.catch((error) => {
    console.log(error);
});

app.use("/app", crudRoutes);