const express = require("express")
const { createProject,
    getAllProjects,
    updateProject,
    deleteProject,
    singleProject } = require("../controller/projectController")
const { authenticate, authorized } = require("../middleware/auth")
const Router = express.Router()

//---------> Create Project Only By Admin-------->

Router.route("/createP").post(authenticate, createProject)


Router.route("/getAllProject").get(getAllProjects)

Router.route('/updateproject/:id').put(updateProject)

Router.route('/deleteproject/:id').delete(deleteProject)

Router.route('/singleproject/:id').get(singleProject)

module.exports = Router