// Library (framework) => EZ PZ
const express = require("express"); //Makes it easier to create a server
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const mangaRoute = require("./routes/manga-route");

//Create a server
const app = express();

// Force app to access the body before the request
app.use(bodyParser());

// Get request ( .use is more complex than get)
// app.get("/", (request, response) => {
//   response.json("dude");
// });
app.use("/api/mangas", mangaRoute);

// Define a localhost
mongoose
  .connect(
    "mongodb+srv://root:pizzahut@clusterfree.9pohp.mongodb.net/MangaDB?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    app.listen(5000, () => console.log("Server is running on port 5000"));
  })
  .catch(() => console.log("Impossible to reach DB..."));

// axios.get("http://localhost/api/mangas/")
