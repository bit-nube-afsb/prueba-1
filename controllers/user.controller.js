import { getUsers, createUser, loginService } from "../services/user.services.js";
//READ ALL (*)
export async function listUsers(req,res) {
    try {
        const users = await getUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// READ ONE

// CREATE (*)

export async function createNewUser(req,res) {
    try {
        const userData = req.body;
        const user = await createUser(userData);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// DELETE ONE (*)

// DELETE ALL

// UPDATE (*)

// AUTENTICACION 

// LOGIN (*)
export async function loginUser(req,res) {
    try {
        const user = req.body;
        const token = await loginService(user);
        res.status(200).json({response: token});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// RUTA AUTENTICADA (*)
export async function protectedRoute(req,res){
    try{
        const user = req.user;
        res.status(200).json({response: `Estás autenticado correctamente con el email: ${user.email}`});
    }catch (error){
        res.status(500).json({message: `Ocurrio un error: ${error.message}`})
    }
}

// CON CJS
// module.exports = {
//     createUser,
//     loginUser,
//     deleteUserById,
//     updateUser,
//     getUserById,
//     getAllUsers
// }