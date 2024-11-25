import generateToken from "../middlewares/jwtGenerate.js";
import Users from "../models/User.js"

export async function getUsers() {
    try{
        const users = await Users.find();
        return users;
    } catch (error){
        // console.error(`Error al obtener los usuarios: ${error.message}`); aqui no se propaga el error solo lo muestro
        throw new Error(`Error al obtener los usuarios: ${error.message}`);
    }
}

export async function createUser(user) {
    
    const {email, password} = user;
    try {
        const user = await Users.findOne({email});
        if(user){
           return `Existe un usuario con el ${email}`;
        }
        const dbUser = Users.create({email: email, password: password})
        return dbUser;

    } catch (error) {
        throw new Error(`Error al crear el usuario: ${error.message}`);
    }
}

export async function loginService(user) {
    try {
        const {email, password} = user;
        const userInDB = await Users.findOne({email});
        if(!userInDB){
            return "El usuario no existe";
        }
        if(password != userInDB.password){
            return "Contraseña o email invalido";
        }
        const token = generateToken({email: email});
        return token;

    } catch (error) {
        throw new Error(`Error al logear el usuario: ${error.message}`);
    }
}
export async function deleteUserById(id) {
    try {
        const deletedUser = await Users.findByIdAndDelete(id);
        if (!deletedUser) {
            return `Usuario con ID ${id} no encontrado.`;
        }
        return `Usuario con ID ${id} eliminado exitosamente.`;
    } catch (error) {
        throw new Error(`Error al borrar el usuario: ${error.message}`);
    }
}

export async function getUserById(id) {
    try {
        const user = await Users.findById(id);
        if (!user) {
            return `Usuario con ID ${id} no encontrado.`;
        }
        return user;
    } catch (error) {
        throw new Error(`Error al obtener el usuario: ${error.message}`);
    }
}

export async function deleteAllUsers() {
    try {
        const result = await Users.deleteMany({});
        return `Se eliminaron ${result.deletedCount} usuarios.`;
    } catch (error) {
        throw new Error(`Error al eliminar todos los usuarios: ${error.message}`);
    }
}

export async function updateUserById(id, data) {
    try {
        const updatedUser = await Users.findByIdAndUpdate(id, data, { new: true });
        if (!updatedUser) {
            return `Usuario con ID ${id} no encontrado.`;
        }
        return updatedUser;
    } catch (error) {
        throw new Error(`Error al actualizar el usuario: ${error.message}`);
    }
}

// export async function getUserCount() {
//     try {
//         const count = await Users.find().length();
//         return count;
//     } catch (error) {
//         throw new Error(`Error al obtener los usuarios: ${error.message}`);
//     }
// }

// export async function getUserById(email) {
//     try {
//         const user = await Users.findOne({email})
//     } catch (error) {
//         throw new Error(`Error al obtener los usuarios: ${error.message}`);
//     }
// }