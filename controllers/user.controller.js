import { getUsers } from "../services/user.services.js";
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

// DELETE ONE (*)

// DELETE ALL

// UPDATE (*)

// AUTENTICACION 

// LOGIN (*)

// RUTA AUTENTICADA (*)

// CON CJS
// module.exports = {
//     createUser,
//     loginUser,
//     deleteUserById,
//     updateUser,
//     getUserById,
//     getAllUsers
// }