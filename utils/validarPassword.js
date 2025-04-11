export function validarPassword(password) {
    
    if (!password || password.length < 8) {
        return 'La contraseña debe tener al menos 8 caracteres';
    }

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])/;
    if (!regex.test(password)) {
        return 'La contraseña debe tener mayúsculas, minúsculas y al menos un símbolo';
    }

    return null; 
}
