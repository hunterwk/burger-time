const express = require("express");

//MISSING THESE 2 LINEs CAUSED ENTIRE APP TO NOT WORK
const exphbs = require("express-handlebars")
const routes = require("./controllers/burgersController")


const PORT = process.env.PORT || 8080;


const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);


app.listen(PORT, () => {
    console.log(`App listening on PORT ${ PORT}`);
  });
  