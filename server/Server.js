const express = require("express");
const Pizza = require("./models/PizzaModel");

const app = express();
const db = require("./db.js");
app.use(express.json());

const path = require('path')
const pizzasRoute = require("../client/routes/pizzaRoute");
const userRoute = require("../client/routes/userRoutes");
const ordersRoute = require("../client/routes/orderRoute")

app.use("/api/pizzas/", pizzasRoute);
app.use("/api/users/", userRoute);
app.use("/api/orders/", ordersRoute);

app.get("/", (req, res) => res.send("Server working " + port));

const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port`);
