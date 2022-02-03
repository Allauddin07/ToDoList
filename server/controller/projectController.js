const projectModel = require("../model/projectModel")
//Creating Project by Admin Only-------
exports.createProject = async (req, res, next) => {

    // const { name, description, users, tasks} = req.body
    req.body.user = req.user.id
    const project = await projectModel.create(req.body)

    res.status(200).json({
        success: true,
        message: project
    })


}

// Getting all projects--------->

exports.getAllProjects = async (req, res, next) => {

    const projects = await projectModel.find()

    if (projects) {
        res.status(200).json({
            success: true,
            message: projects
        })
    }
    else {
        res.status(402).json({
            success: false,
            message: "No project found"
        })
    }



}

//Update project

exports.updateProject = async(req, res) => {

    const project = await projectModel.findById(req.params.id)

    if (!project) {
        res.status(402).json({
            success: false,
            message: "Not Found"

        })
    }
    else {
        const p = await projectModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        })

        res.status(200).json({
            success: false,
            message: p

        })
    }


}

//Delete project

exports.deleteProject = async(req, res)=>{

    const project = projectModel.findById(req.params.id)
    if(project){
        await project.remove()
        res.status(200).json({
            success:true,
            message:"project deleted successfully"
        })
    }

    else{
        res.status(402).json({
            success:false,
            message:"project not found"
        })
    }

}

//Detail of a single project

exports.singleProject = async(req, res)=>{

    const project = await projectModel.findById(req.params.id).populate("user", "name email")
    if(project){
        await project.remove()
        res.status(200).json({
            success:true,
            message:project
        })
    }

    else{
        res.status(402).json({
            success:false,
            message:"project not found"
        })
    }

}

