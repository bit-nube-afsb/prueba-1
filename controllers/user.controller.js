import { getUsers, createUser, loginService, deleteUserById } from "../services/user.services.js";
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

export async function getOneUserById(req, res) {
    try {
        const userId = req.params.id;
        const result = await getUserById(userId);

        if (typeof result === 'string') {
            return res.status(404).json({ message: result });
        }

        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: `Error al obtener el usuario: ${error.message}` });
    }
}

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

export async function deleteOneUserById(req, res) {
    try {
        const userId = req.params.id;
        const result = await deleteUserById(userId);

        if (result.includes("no encontrado")) {
            return res.status(404).json({ message: result });
        }

        return res.status(200).json({ message: result });
    } catch (error) {
        return res.status(500).json({ message: `Error al borrar el usuario: ${error.message}` });
    }
}
// DELETE ALL

export async function deleteAllUsersController(req, res) {
    try {
        const result = await deleteAllUsers();
        return res.status(200).json({ message: result });
    } catch (error) {
        return res.status(500).json({ message: `Error al eliminar todos los usuarios: ${error.message}` });
    }
}

// UPDATE (*)

export async function updateOneUserById(req, res) {
    try {
        const userId = req.params.id;
        const data = req.body;
        const result = await updateUserById(userId, data);

        if (typeof result === 'string') {
            return res.status(404).json({ message: result });
        }

        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: `Error al actualizar el usuario: ${error.message}` });
    }
}

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