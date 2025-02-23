import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.get("/user/:id", (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

app.listen(4000, () => {
  console.log("Server is running on port 3000");
});
