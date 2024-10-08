// TODO: this file :)
const express = require("express");
const app = express();

const PORT = 3000;
const employees = require("./employees");

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

app.get("/employees", (req, res) => {
  res.json(employees);
});

app.get("/employees/random", (req, res) => {
  const random = Math.floor(Math.random() * employees.length);
  const randomEmployee = employees[random];

  res.json(randomEmployee);
});

app.get("/employees/:id", (req, res) => {
  const { id } = req.params;
  const employee = employees.find((emp) => emp.id === parseInt(id));

  if (employee) {
    res.json(employee);
  } else {
    res.status(404).send("There is no employee with the given id");
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});
