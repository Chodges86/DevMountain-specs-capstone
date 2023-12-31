require("dotenv").config({ path: "./../.env" });
const express = require("express");
const cors = require("cors");

const {
  register,
  login,
  checkIsLoggedIn,
  getUser,
} = require("./controllers/auth");
const {
  getAllProjects,
  updateProject,
  addProject,
  deleteProject,
  getProjectById,
} = require("./controllers/projects");

const { PORT } = process.env;

const app = express();
app.use(express.json());
app.use(cors());

app.post("/register", register);
app.post("/login", login);
app.get("/get-user/:id", getUser);
app.get("/get-all-projects/:id", getAllProjects);
app.get("/single-project/:id", getProjectById);
app.put("/project/:id", updateProject);
app.post("/project", addProject);
app.delete("/project-delete/:id", deleteProject);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
