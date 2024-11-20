import { model, Schema } from "mongoose";

const userSchema = Schema({
    email: {type: String,
        required: true,
    },
    password: {
        type: String
    }
});

export default model('Users', userSchema);