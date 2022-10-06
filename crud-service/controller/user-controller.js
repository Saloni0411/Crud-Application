import userModel from '../model/user-schema.js'

export const addUser = async (req, res)=> {
    const user = req.body;

    const newUser = new userModel(user)

    try {

       await newUser.save()
       return res.status(201).json(newUser);

    } catch(error) {
        return res.status(500).json({status: false, message: error.message})
    }
}

export const getUsers = async(req, res) => {
    try {

       const users = await userModel.find()
       return res.status(200).json(users);

    } catch(error) {
        return res.status(500).json({status: false, message: error.message})
    }
}

export const getUser = async(req, res) => {
    //console.log(req.params.id);
    try {

        const user = await userModel.find({_id: req.params.id})
        //console.log(user)
        return res.status(200).json(user);
 
     } catch(error) {
         return res.status(500).json({status: false, message: error.message})
     }
}

export const editUser = async(req, res) => {
    let user = req.body;
    const editUser = new userModel(user)
    try {
         
        await userModel.updateOne({_id: req.params.id}, editUser)
        return res.status(201).json(editUser);
 
     } catch(error) {
         return res.status(500).json({status: false, message: error.message})
     }
}

export const deleteUser = async(req, res) => {
    try {
        await userModel.deleteOne({_id: req.params.id})
        return res.status(200).json({message: "user deleted successfully"});

     } catch(error) {
         return res.status(500).json({status: false, message: error.message})
     }
}