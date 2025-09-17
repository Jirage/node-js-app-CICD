const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(
    "Hi from Jenkins & PM2 deployed Node.js App through jenkins cicd pipeline!, this is Abhishek Deployment"
  );
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
