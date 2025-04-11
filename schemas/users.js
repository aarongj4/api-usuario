import mongoose from "mongoose";



const usersSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: [true, 'El nombre es obligatorio'],
        },
        email: {
            type: String,
            required: [true, 'El correo es obligatorio'],
            unique: true,
            lowercase: true,
            trim: true,
            match: [/^\S+@\S+\.\S+$/, 'El correo no es válido']
        },
        password: {
            type: String,
            required: [true, 'La contraseña es obligatoria'],
            minlength: [8, 'La contraseña debe tener al menos 8 caracteres'],
            match: [
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])/,
                'La contraseña debe tener mayúsculas, minúsculas y al menos un símbolo'
            ]
        },
        rol: {
            type: String,
            required: [true, 'El rol es obligatorio'],
            enum: {
                values: ['admin', 'user'],
                message: 'Rol no válido. Debe ser "admin" o "user"'
            }
        },
        fechaRegistro: {
            type: Date
        },
        status: {
            type: Number,
            required: [true, 'El status es obligatorio'],
            enum: {
              values: [1, 0],
              message: 'El status debe ser 1 (activo) o 0 (inactivo)'
            },
            default: 1  // Si no se especifica, el valor por defecto es 1 (activo)
          }
    }, {timestamps : true}
);

export default mongoose.model('users', usersSchema);