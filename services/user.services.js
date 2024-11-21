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